import 'dotenv/config';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

const API_KEY = process.env.GEMINI_API_KEY;
if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable is not set');
  process.exit(1);
}

const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

const BADGE_STYLE = `
Style: Professional certification badge design, clean and official-looking.
Format: Square badge with circular or shield-shaped design element.
Background: White or very light gray.
Quality: High-resolution, crisp edges, professional typography.
`;

const badges = [
  {
    path: 'public/images/badges/isigma-member.png',
    prompt: `${BADGE_STYLE}
Create a professional certification badge for "i-SIGMA" (International Secure Information Governance & Management Association).
Design: Circular badge with "i-SIGMA" text prominently displayed.
Include: The text "MEMBER" below the main logo.
Colors: Professional gray and dark blue tones.
Style: Corporate, trustworthy, data security focused.
Should look like an official membership seal/badge.
No extra decorative elements - keep it clean and professional.`
  },
  {
    path: 'public/images/badges/ndia-affiliate.png',
    prompt: `${BADGE_STYLE}
Create a professional affiliate badge for "NDIA" (National Digital Inclusion Alliance).
Design: Badge showing "NDIA" with "AFFILIATE" text.
Include: Subtle digital/network connectivity visual elements.
Colors: Blue tones suggesting digital inclusion and connectivity.
Style: Modern, inclusive, nonprofit organization badge.
Should look like an official affiliate membership badge.
Keep it simple and recognizable.`
  },
  {
    path: 'public/images/badges/100-best-nonprofits.png',
    prompt: `${BADGE_STYLE}
Create a professional award badge for "100 Best Nonprofits to Work For" from Oregon Business Magazine.
Design: Badge with "100 BEST" prominently displayed.
Include: "NONPROFITS TO WORK FOR" and "OREGON" text.
Colors: Professional purple/burgundy tones typical of business awards.
Style: Award seal/ribbon style, prestigious looking.
Should look like an official business magazine recognition badge.
Year: Include "2024" subtly.`
  },
  {
    path: 'public/images/badges/100-best-green.png',
    prompt: `${BADGE_STYLE}
Create a professional award badge for "100 Best Green Workplaces in Oregon" from Oregon Business Magazine.
Design: Badge with "100 BEST GREEN" prominently displayed.
Include: "WORKPLACES" and "OREGON 2024" text.
Colors: Green and teal tones suggesting environmental sustainability.
Style: Award seal style with subtle eco/leaf element.
Should look like an official environmental business award badge.`
  },
  {
    path: 'public/images/badges/pbj-most-admired.png',
    prompt: `${BADGE_STYLE}
Create a professional award badge for Portland Business Journal "Most Admired Companies" award.
Design: Badge showing "#4 MOST ADMIRED" prominently.
Include: "TECH COMPANY" and "PORTLAND BUSINESS JOURNAL 2024" text.
Colors: Navy blue and gold tones typical of business journal awards.
Style: Prestigious business award seal.
Should look like an official regional business publication award.`
  }
];

async function generateBadge(config, index, total) {
  const { path: outputPath, prompt } = config;
  const fullPath = path.join(projectRoot, outputPath);
  const dir = path.dirname(fullPath);

  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`\n[${index + 1}/${total}] Generating: ${outputPath}`);

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        contents: [{ parts: [{ text: prompt }] }],
        generationConfig: { responseModalities: ['TEXT', 'IMAGE'] }
      })
    });

    if (!response.ok) {
      throw new Error(`API error ${response.status}: ${await response.text()}`);
    }

    const data = await response.json();
    const parts = data.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));

    if (!imagePart) {
      console.log(`  ⚠ No image in response`);
      return false;
    }

    const buffer = Buffer.from(imagePart.inlineData.data, 'base64');
    fs.writeFileSync(fullPath, buffer);
    console.log(`  ✓ Saved: ${outputPath}`);
    return true;

  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('Generating trust badges...\n');

  let success = 0;
  for (let i = 0; i < badges.length; i++) {
    const result = await generateBadge(badges[i], i, badges.length);
    if (result) success++;

    if (i < badges.length - 1) {
      console.log('  Waiting 3s...');
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  console.log(`\nComplete! Generated ${success}/${badges.length} badges`);
}

main();
