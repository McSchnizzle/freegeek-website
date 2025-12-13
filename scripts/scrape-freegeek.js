const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { URL } = require('url');

const BASE_URL = 'https://freegeek.org';
const CONTENT_DIR = path.join(__dirname, '..', 'research', 'content');
const IMAGES_DIR = path.join(__dirname, '..', 'research', 'images');
const SITEMAP_DIR = path.join(__dirname, '..', 'research', 'sitemap');

// Track visited URLs and sitemap
const visited = new Set();
const sitemap = [];
const allImages = new Set();

// Ensure directories exist
[CONTENT_DIR, IMAGES_DIR, SITEMAP_DIR].forEach(dir => {
  fs.mkdirSync(dir, { recursive: true });
});

function urlToFilename(url) {
  const parsed = new URL(url);
  let pathname = parsed.pathname || '/';
  if (pathname === '/') pathname = '/index';
  // Remove leading slash and replace remaining slashes
  return pathname.slice(1).replace(/\//g, '_') || 'index';
}

async function downloadImage(imageUrl, filename) {
  return new Promise((resolve, reject) => {
    const protocol = imageUrl.startsWith('https') ? https : http;
    const filePath = path.join(IMAGES_DIR, filename);

    // Skip if already downloaded
    if (fs.existsSync(filePath)) {
      resolve(filePath);
      return;
    }

    const file = fs.createWriteStream(filePath);
    protocol.get(imageUrl, (response) => {
      // Handle redirects
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlinkSync(filePath);
        downloadImage(response.headers.location, filename).then(resolve).catch(reject);
        return;
      }

      if (response.statusCode !== 200) {
        file.close();
        fs.unlinkSync(filePath);
        reject(new Error(`Failed to download ${imageUrl}: ${response.statusCode}`));
        return;
      }

      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve(filePath);
      });
    }).on('error', (err) => {
      file.close();
      if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
      reject(err);
    });
  });
}

async function scrapePage(browser, url) {
  if (visited.has(url)) return [];
  visited.add(url);

  console.log(`\n📄 Scraping: ${url}`);

  const page = await browser.newPage();
  const pageData = {
    url,
    title: '',
    content: '',
    images: [],
    links: [],
    meta: {}
  };

  try {
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });

    // Get page title
    pageData.title = await page.title();

    // Get meta description
    const metaDesc = await page.$('meta[name="description"]');
    if (metaDesc) {
      pageData.meta.description = await metaDesc.getAttribute('content');
    }

    // Get Open Graph data
    const ogTitle = await page.$('meta[property="og:title"]');
    if (ogTitle) pageData.meta.ogTitle = await ogTitle.getAttribute('content');

    const ogDesc = await page.$('meta[property="og:description"]');
    if (ogDesc) pageData.meta.ogDescription = await ogDesc.getAttribute('content');

    const ogImage = await page.$('meta[property="og:image"]');
    if (ogImage) pageData.meta.ogImage = await ogImage.getAttribute('content');

    // Extract main content
    const mainContent = await page.$('main') || await page.$('article') || await page.$('body');
    if (mainContent) {
      // Get text content
      pageData.content = await mainContent.innerText();

      // Get HTML structure for reference
      pageData.html = await mainContent.innerHTML();
    }

    // Extract all images
    const images = await page.$$('img');
    for (const img of images) {
      const src = await img.getAttribute('src');
      const alt = await img.getAttribute('alt') || '';
      if (src) {
        let fullUrl = src;
        if (src.startsWith('/')) {
          fullUrl = BASE_URL + src;
        } else if (!src.startsWith('http')) {
          fullUrl = new URL(src, url).href;
        }

        if (fullUrl.startsWith('http')) {
          pageData.images.push({ src: fullUrl, alt });
          allImages.add(fullUrl);
        }
      }
    }

    // Extract internal links
    const links = await page.$$('a[href]');
    const internalLinks = [];

    for (const link of links) {
      const href = await link.getAttribute('href');
      const text = await link.innerText();

      if (href) {
        let fullUrl = href;
        if (href.startsWith('/')) {
          fullUrl = BASE_URL + href;
        } else if (!href.startsWith('http')) {
          fullUrl = new URL(href, url).href;
        }

        // Only follow internal links
        if (fullUrl.startsWith(BASE_URL) && !fullUrl.includes('#') && !visited.has(fullUrl)) {
          // Skip file downloads, mailto, tel
          if (!fullUrl.match(/\.(pdf|doc|docx|xls|xlsx|zip|png|jpg|jpeg|gif|svg)$/i) &&
              !fullUrl.startsWith('mailto:') && !fullUrl.startsWith('tel:')) {
            internalLinks.push(fullUrl);
            pageData.links.push({ url: fullUrl, text: text.trim() });
          }
        }
      }
    }

    // Take screenshot
    const filename = urlToFilename(url);
    await page.screenshot({
      path: path.join(SITEMAP_DIR, `screenshot_${filename}.png`),
      fullPage: true
    });

    // Save page content
    const contentFile = path.join(CONTENT_DIR, `${filename}.json`);
    fs.writeFileSync(contentFile, JSON.stringify(pageData, null, 2));

    // Save readable text version
    const textFile = path.join(CONTENT_DIR, `${filename}.txt`);
    fs.writeFileSync(textFile, `URL: ${url}\nTitle: ${pageData.title}\n\n${pageData.content}`);

    // Add to sitemap
    sitemap.push({
      url,
      title: pageData.title,
      imageCount: pageData.images.length,
      linkCount: pageData.links.length,
      meta: pageData.meta
    });

    console.log(`   ✅ Title: ${pageData.title}`);
    console.log(`   📸 Images: ${pageData.images.length}`);
    console.log(`   🔗 Internal links: ${internalLinks.length}`);

    await page.close();
    return internalLinks;

  } catch (error) {
    console.error(`   ❌ Error scraping ${url}: ${error.message}`);
    await page.close();
    return [];
  }
}

async function main() {
  console.log('🚀 Starting Free Geek website scraper\n');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Content dir: ${CONTENT_DIR}`);
  console.log(`Images dir: ${IMAGES_DIR}`);

  const browser = await chromium.launch({ headless: true });

  // BFS crawl
  const queue = [BASE_URL];

  while (queue.length > 0) {
    const url = queue.shift();
    const newLinks = await scrapePage(browser, url);

    // Add new links to queue
    for (const link of newLinks) {
      if (!visited.has(link) && !queue.includes(link)) {
        queue.push(link);
      }
    }
  }

  await browser.close();

  // Save sitemap
  const sitemapFile = path.join(SITEMAP_DIR, 'sitemap.json');
  fs.writeFileSync(sitemapFile, JSON.stringify(sitemap, null, 2));

  // Create sitemap summary
  const summaryFile = path.join(SITEMAP_DIR, 'sitemap-summary.md');
  let summary = `# Free Geek Website Sitemap\n\n`;
  summary += `Scraped on: ${new Date().toISOString()}\n\n`;
  summary += `## Statistics\n`;
  summary += `- Total pages: ${sitemap.length}\n`;
  summary += `- Total unique images: ${allImages.size}\n\n`;
  summary += `## Pages\n\n`;

  for (const page of sitemap) {
    summary += `### ${page.title || 'Untitled'}\n`;
    summary += `- URL: ${page.url}\n`;
    summary += `- Images: ${page.imageCount}\n`;
    if (page.meta.description) {
      summary += `- Description: ${page.meta.description}\n`;
    }
    summary += `\n`;
  }

  fs.writeFileSync(summaryFile, summary);

  // Download all images
  console.log(`\n📥 Downloading ${allImages.size} images...`);

  let downloaded = 0;
  let failed = 0;

  for (const imageUrl of allImages) {
    try {
      const urlObj = new URL(imageUrl);
      const filename = path.basename(urlObj.pathname) || 'image.jpg';
      // Add hash to avoid collisions
      const hash = imageUrl.split('').reduce((a, b) => ((a << 5) - a + b.charCodeAt(0)) | 0, 0).toString(16);
      const uniqueFilename = `${hash}_${filename}`;

      await downloadImage(imageUrl, uniqueFilename);
      downloaded++;
      process.stdout.write(`\r   Downloaded: ${downloaded}/${allImages.size}`);
    } catch (error) {
      failed++;
    }
  }

  console.log(`\n   ✅ Downloaded: ${downloaded}, Failed: ${failed}`);

  // Save image manifest
  const imageManifest = path.join(IMAGES_DIR, 'manifest.json');
  fs.writeFileSync(imageManifest, JSON.stringify([...allImages], null, 2));

  console.log('\n✅ Scraping complete!');
  console.log(`   Pages: ${sitemap.length}`);
  console.log(`   Images: ${downloaded}`);
  console.log(`   Sitemap: ${sitemapFile}`);
}

main().catch(console.error);
