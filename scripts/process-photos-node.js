// Node.js script to process client photos using sharp (if available) or provide instructions
const fs = require('fs');
const path = require('path');

const clientDir = path.join(__dirname, '../public/assets/images/client');
const targetDir = path.join(__dirname, '../public/assets/images');

console.log('📸 Client Photo Processor');
console.log('========================\n');

// Check if sharp is available
let sharp;
try {
  sharp = require('sharp');
  console.log('✅ Sharp library found - can process images\n');
} catch (e) {
  console.log('⚠️  Sharp library not found');
  console.log('📦 Install it with: npm install sharp\n');
  console.log('📋 Manual processing required:\n');
  console.log('1. Install webp tools: brew install webp');
  console.log('2. Or use online converter: https://cloudconvert.com/jpg-to-webp');
  console.log('3. Convert and place photos manually\n');
  process.exit(0);
}

// Photo mapping based on file names and descriptions
const photoMapping = {
  // Hero section
  'gym.png': 'hero-fallback.webp',
  'gym2.jpg': 'gym-interior.webp',
  
  // Equipment/Background
  'epuipments1.jpg': 'testimonial-bg.webp',
  'equipment2.jpg': null, // Can be used for additional gym interior
  'equipment3.jpg': null,
  
  // Pose photos - need to be identified
  // These will be mapped to trainers, testimonials, transformations
  'pose1.jpg': null,
  'pose2.jpg': null,
  'pose3.jpg': null,
  'pose5.jpg': null,
  'pose6.jpg': null,
  'pose7.jpg': null,
  'pose8.jpg': null,
  'pose9.jpg': null,
  'pose10.jpg': null,
  'pose11.jpg': null,
  'pose12.jpg': null,
  'se4.jpg': null,
};

async function processImage(inputPath, outputPath, maxSizeKB = 500) {
  try {
    const metadata = await sharp(inputPath).metadata();
    console.log(`Processing: ${path.basename(inputPath)} (${metadata.width}x${metadata.height})`);
    
    // Resize if needed and convert to WebP
    let pipeline = sharp(inputPath);
    
    // Resize large images
    if (metadata.width > 1920) {
      pipeline = pipeline.resize(1920, null, { withoutEnlargement: true });
    }
    
    // Convert to WebP with quality optimization
    let quality = 85;
    let outputBuffer = await pipeline.webp({ quality }).toBuffer();
    
    // Check size and reduce quality if needed
    const sizeKB = outputBuffer.length / 1024;
    if (sizeKB > maxSizeKB) {
      quality = 75;
      outputBuffer = await sharp(inputPath)
        .resize(metadata.width > 1920 ? 1920 : null, null, { withoutEnlargement: true })
        .webp({ quality })
        .toBuffer();
    }
    
    // Write file
    fs.writeFileSync(outputPath, outputBuffer);
    const finalSizeKB = (fs.statSync(outputPath).size / 1024).toFixed(1);
    console.log(`  ✅ Created: ${path.basename(outputPath)} (${finalSizeKB}KB)\n`);
    
    return true;
  } catch (error) {
    console.error(`  ❌ Error processing ${inputPath}:`, error.message);
    return false;
  }
}

async function main() {
  // Create backup
  const backupDir = path.join(targetDir, 'backup');
  if (!fs.existsSync(backupDir)) {
    fs.mkdirSync(backupDir, { recursive: true });
    console.log('📦 Created backup directory\n');
  }
  
  // Process mapped photos
  console.log('🔄 Processing photos...\n');
  
  for (const [inputFile, outputFile] of Object.entries(photoMapping)) {
    if (!outputFile) continue;
    
    const inputPath = path.join(clientDir, inputFile);
    const outputPath = path.join(targetDir, outputFile);
    
    if (fs.existsSync(inputPath)) {
      // Determine max size based on output file
      let maxSize = 500; // Default
      if (outputFile.includes('trainer')) maxSize = 200;
      else if (outputFile.includes('testimonial') && !outputFile.includes('bg')) maxSize = 100;
      else if (outputFile.includes('transformation')) maxSize = 250;
      else if (outputFile.includes('bg')) maxSize = 200;
      
      await processImage(inputPath, outputPath, maxSize);
    } else {
      console.log(`⚠️  Not found: ${inputFile}\n`);
    }
  }
  
  console.log('✅ Processing complete!');
  console.log('\n📋 Next steps:');
  console.log('1. Review the converted images');
  console.log('2. Manually assign pose photos (pose1-12.jpg) to:');
  console.log('   - Trainers (trainer-1.webp, trainer-2.webp, trainer-3.webp)');
  console.log('   - Testimonials (testimonial-1.webp through testimonial-4.webp)');
  console.log('   - Transformations (transformation-*-before.webp, transformation-*-after.webp)');
  console.log('3. Test the website: npm run dev');
}

main().catch(console.error);
