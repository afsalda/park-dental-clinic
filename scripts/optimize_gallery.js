const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesDir = path.join(__dirname, '..', 'public', 'images');

const filesToOptimize = [
  'JAI04145.JPG',
  'JAI04168.JPG',
  'JAI04233.JPG'
];

async function optimizeImage(filename) {
  const inputPath = path.join(imagesDir, filename);
  const webpOutputPath = path.join(imagesDir, `${filename}.webp`);
  const avifOutputPath = path.join(imagesDir, `${filename}.avif`);

  if (!fs.existsSync(inputPath)) {
    console.error(`Input file does not exist: ${inputPath}`);
    return;
  }

  console.log(`Optimizing ${filename}...`);

  try {
    // 1. Generate optimized WebP (800x533)
    await sharp(inputPath)
      .resize(800, 533, { fit: 'cover' })
      .webp({ quality: 80, effort: 6 })
      .toFile(webpOutputPath);
    console.log(`  - Created WebP: ${webpOutputPath}`);

    // 2. Generate optimized AVIF (800x533)
    await sharp(inputPath)
      .resize(800, 533, { fit: 'cover' })
      .avif({ quality: 75, effort: 6 })
      .toFile(avifOutputPath);
    console.log(`  - Created AVIF: ${avifOutputPath}`);
  } catch (err) {
    console.error(`Error optimizing ${filename}:`, err);
  }
}

async function run() {
  for (const file of filesToOptimize) {
    await optimizeImage(file);
  }
  console.log('All gallery images optimized successfully!');
}

run();
