import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(__dirname, '..');

// Gemini API key from environment variable
const API_KEY = process.env.GEMINI_API_KEY;

if (!API_KEY) {
  console.error('Error: GEMINI_API_KEY environment variable is not set');
  console.error('Set it with: export GEMINI_API_KEY=your_api_key');
  process.exit(1);
}
const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash-exp:generateContent';

// Free Geek style guide based on their existing illustrations:
// - Flat vector style, simple shapes, minimal detail
// - Colors: teal (#00A0B0), purple/magenta (#9B4DCA), orange (#F5A623), yellow (#F8E71C), black, white
// - Clean lines, friendly and approachable
// - Emphasizes: digital inclusion, diversity, community, sustainability

const STYLE_GUIDE = `
Style: Flat vector illustration, simple geometric shapes, minimal detail, clean lines.
Colors: Use a palette of teal (#00A0B0), purple (#9B4DCA), orange (#F5A623), and black on white background.
Aesthetic: Friendly, approachable, inclusive, modern nonprofit feel.
No gradients, no 3D effects, no photorealism - pure flat vector illustration style.
`;

const images = [
  // Hero illustrations
  {
    path: 'public/images/hero/hero-donate.png',
    prompt: `${STYLE_GUIDE}
Create a flat vector illustration showing the concept of tech donation.
Scene: A diverse group of people (different ages, ethnicities, abilities) handing over laptops and phones to volunteers.
Include: A laptop, a phone, diverse human figures represented simply.
Mood: Hopeful, community-focused, action-oriented.
No text in the image.`
  },
  {
    path: 'public/images/hero/hero-receive.png',
    prompt: `${STYLE_GUIDE}
Create a flat vector illustration showing someone receiving a refurbished computer.
Scene: A happy person (could be a student, senior, or job seeker) opening a laptop box with joy.
Include: A laptop emerging from a box, happy expression, subtle celebration elements.
Mood: Joyful, empowering, life-changing moment.
The person should be diverse/inclusive in representation.
No text in the image.`
  },
  {
    path: 'public/images/hero/hero-community.png',
    prompt: `${STYLE_GUIDE}
Create a flat vector illustration showing digital inclusion and community connection.
Scene: Diverse people of different ages, backgrounds, and abilities all connected through technology.
Include: Multiple people using laptops/tablets, connection lines between them, a sense of community.
Show diversity: elderly person, young student, person in wheelchair, different ethnicities.
Mood: Connected, inclusive, empowering.
No text in the image.`
  },

  // Process icons
  {
    path: 'public/images/icons/icon-donate.png',
    prompt: `${STYLE_GUIDE}
Create a simple flat vector icon representing "donate technology."
Show: A hand offering/giving a laptop or device.
Size: Square icon format, simple enough to work at 64x64 pixels.
Colors: Teal (#00A0B0) as primary with black outlines.
No text.`
  },
  {
    path: 'public/images/icons/icon-refurbish.png',
    prompt: `${STYLE_GUIDE}
Create a simple flat vector icon representing "refurbish/repair."
Show: A wrench or tool with a laptop, or gears around a computer.
Size: Square icon format, simple enough to work at 64x64 pixels.
Colors: Purple (#9B4DCA) as primary with black outlines.
No text.`
  },
  {
    path: 'public/images/icons/icon-distribute.png',
    prompt: `${STYLE_GUIDE}
Create a simple flat vector icon representing "distribute to community."
Show: A laptop with an arrow pointing outward to people, or a gift box with a computer.
Size: Square icon format, simple enough to work at 64x64 pixels.
Colors: Orange (#F5A623) as primary with black outlines.
No text.`
  },
  {
    path: 'public/images/icons/icon-recycle.png',
    prompt: `${STYLE_GUIDE}
Create a simple flat vector icon representing "responsible e-waste recycling."
Show: The recycling symbol integrated with a computer or electronic device.
Size: Square icon format, simple enough to work at 64x64 pixels.
Colors: Teal (#00A0B0) as primary with black outlines.
No text.`
  },
  {
    path: 'public/images/icons/icon-education.png',
    prompt: `${STYLE_GUIDE}
Create a simple flat vector icon representing "digital education/skills training."
Show: A person at a computer with a lightbulb or graduation cap element.
Size: Square icon format, simple enough to work at 64x64 pixels.
Colors: Purple (#9B4DCA) as primary with black outlines.
No text.`
  },
  {
    path: 'public/images/icons/icon-security.png',
    prompt: `${STYLE_GUIDE}
Create a simple flat vector icon representing "data security/wiping."
Show: A shield with a lock symbol, or a hard drive with security checkmark.
Size: Square icon format, simple enough to work at 64x64 pixels.
Colors: Teal (#00A0B0) as primary with black outlines.
No text.`
  },

  // Stat/impact illustrations
  {
    path: 'public/images/icons/stat-ewaste.png',
    prompt: `${STYLE_GUIDE}
Create a flat vector illustration representing e-waste reduction.
Show: A pile of electronics being diverted away from a landfill/trash, redirected toward a recycling or reuse path.
Include: Monitors, phones, keyboards in a simplified pile.
Mood: Environmental responsibility, positive impact.
No text in the image.`
  },
  {
    path: 'public/images/icons/stat-devices.png',
    prompt: `${STYLE_GUIDE}
Create a flat vector illustration representing devices being given to people in need.
Show: Multiple laptops/computers with hearts or checkmarks, suggesting they're going to good homes.
Mood: Generosity, impact, helping others.
No text in the image.`
  },

  // Digital divide illustrations
  {
    path: 'public/images/hero/digital-divide.png',
    prompt: `${STYLE_GUIDE}
Create a flat vector illustration representing the "digital divide" being bridged.
Scene: On one side, people struggling without technology; on the other, people thriving with computers. A bridge or connection in the middle.
Show diversity: different ages, ethnicities, a person in wheelchair, elderly person, child.
Mood: Hopeful, showing the transformation technology access enables.
No text in the image.`
  },

  // Call-to-action illustrations
  {
    path: 'public/images/hero/cta-volunteer.png',
    prompt: `${STYLE_GUIDE}
Create a flat vector illustration encouraging volunteering.
Show: Diverse people working together on computers, sorting electronics, helping each other.
Include: People at workbenches, teamwork elements, friendly collaboration.
Mood: Community, teamwork, making a difference together.
No text in the image.`
  }
];

async function generateImage(imageConfig, index, total) {
  const { path: outputPath, prompt } = imageConfig;
  const fullPath = path.join(projectRoot, outputPath);
  const dir = path.dirname(fullPath);

  // Ensure directory exists
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }

  console.log(`\n[${index + 1}/${total}] Generating: ${outputPath}`);

  const requestBody = {
    contents: [{
      parts: [{ text: prompt }]
    }],
    generationConfig: {
      responseModalities: ['TEXT', 'IMAGE']
    }
  };

  try {
    const response = await fetch(`${API_URL}?key=${API_KEY}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`API error ${response.status}: ${errorText}`);
    }

    const data = await response.json();

    // Find the image part in the response
    const parts = data.candidates?.[0]?.content?.parts || [];
    const imagePart = parts.find(p => p.inlineData?.mimeType?.startsWith('image/'));

    if (!imagePart) {
      console.log(`  ⚠ No image in response. Response: ${JSON.stringify(data).slice(0, 200)}`);
      return false;
    }

    // Save the image
    const imageData = imagePart.inlineData.data;
    const buffer = Buffer.from(imageData, 'base64');
    fs.writeFileSync(fullPath, buffer);
    console.log(`  ✓ Saved: ${outputPath}`);
    return true;

  } catch (error) {
    console.error(`  ✗ Error: ${error.message}`);
    return false;
  }
}

async function main() {
  console.log('='.repeat(60));
  console.log('Free Geek - Image Generation Script');
  console.log('Using Gemini 2.0 Flash Image Generation');
  console.log('='.repeat(60));
  console.log(`\nGenerating ${images.length} images...\n`);

  let success = 0;
  let failed = 0;

  for (let i = 0; i < images.length; i++) {
    const result = await generateImage(images[i], i, images.length);
    if (result) {
      success++;
    } else {
      failed++;
    }

    // Rate limiting - wait between requests
    if (i < images.length - 1) {
      console.log('  Waiting 3s for rate limit...');
      await new Promise(r => setTimeout(r, 3000));
    }
  }

  console.log('\n' + '='.repeat(60));
  console.log(`Complete! Success: ${success}, Failed: ${failed}`);
  console.log('='.repeat(60));
}

main();
