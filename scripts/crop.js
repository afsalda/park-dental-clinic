const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const imagesDir = path.join(__dirname, '..', 'public', 'images');
const outputDir = path.join(imagesDir, 'before-after');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

async function processImage(filename, prefix) {
  const inputPath = path.join(imagesDir, filename);
  
  try {
    const image = sharp(inputPath);
    const metadata = await image.metadata();
    
    const width = metadata.width;
    const height = metadata.height;
    
    // In these specific images, let's find the middle H/2 line
    const halfHeight = Math.floor(height / 2);
    
    console.log(`Processing ${filename}: ${width}x${height}`);
    
    // Top half (Before)
    await sharp(inputPath)
      .extract({ left: 0, top: 0, width: width, height: halfHeight })
      .sharpen()
      .toFile(path.join(outputDir, `${prefix}-before.jpg`));
      
    // Bottom half (After)
    await sharp(inputPath)
      .extract({ left: 0, top: halfHeight, width: width, height: height - halfHeight })
      .sharpen()
      .toFile(path.join(outputDir, `${prefix}-after.jpg`));
      
    console.log(`Saved ${prefix}-before.jpg and ${prefix}-after.jpg`);
  } catch (err) {
    console.error(`Error processing ${filename}:`, err);
  }
}

async function run() {
  await processImage('IMG-20260713-WA0057.jpg.jpeg', 'smile-makeover');
  await processImage('IMG-20260713-WA0066.jpg.jpeg', 'orthodontics');
}

run();
