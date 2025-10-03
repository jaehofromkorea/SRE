import sharp from 'sharp';
import { readFileSync } from 'fs';

const svg = readFileSync('./public/icon.svg');

const sizes = [
  { name: 'pwa-64x64.png', size: 64 },
  { name: 'pwa-192x192.png', size: 192 },
  { name: 'pwa-512x512.png', size: 512 },
  { name: 'maskable-icon-512x512.png', size: 512 },
  { name: 'apple-touch-icon.png', size: 180 },
];

async function generateIcons() {
  for (const { name, size } of sizes) {
    await sharp(svg)
      .resize(size, size)
      .png()
      .toFile(`./public/${name}`);
    console.log(`✓ Generated ${name}`);
  }

  // Generate favicon.ico
  await sharp(svg)
    .resize(32, 32)
    .png()
    .toFile('./public/favicon.png');
  console.log('✓ Generated favicon.png (rename to favicon.ico if needed)');
}

generateIcons().catch(console.error);
