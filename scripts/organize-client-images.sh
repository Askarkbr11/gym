#!/bin/bash

# Script to organize client images for 247 Gym website
# Place all client images in a folder and run this script

SOURCE_DIR="./client-photos"  # Change this to your source folder
TARGET_DIR="./public/assets/images"

echo "Organizing client images for 247 Gym website..."
echo ""

# Create directories if they don't exist
mkdir -p "$TARGET_DIR"

# Instructions for manual placement
echo "=== IMAGE PLACEMENT GUIDE ==="
echo ""
echo "1. HERO SECTION (hero-fallback.webp):"
echo "   - Reception area with '247 GYM FITNESS DISTRICT' neon sign"
echo "   - OR exterior building with '247 GYM' sign"
echo ""
echo "2. ABOUT SECTION:"
echo "   - gym-interior.webp: Wide gym view with equipment"
echo "   - personal-training.webp: Woman doing dumbbell presses with trainer"
echo ""
echo "3. TRAINERS (3 images):"
echo "   - trainer-1.webp: Muscular man in yellow tank top"
echo "   - trainer-2.webp: Trainer from personal training photo"
echo "   - trainer-3.webp: Another trainer photo"
echo ""
echo "4. TRANSFORMATIONS (6 before/after pairs = 12 images):"
echo "   - Use member photos showing different fitness levels"
echo "   - Name them: transformation-1-before.webp, transformation-1-after.webp, etc."
echo ""
echo "5. TESTIMONIALS (4 images):"
echo "   - testimonial-1.webp: Two women with 'TEAM 247' hoodie"
echo "   - testimonial-2.webp: Two women with 'BREAK LIMITATIONS' wall"
echo "   - testimonial-3.webp: Mirror selfie"
echo "   - testimonial-4.webp: Another member photo"
echo ""
echo "6. BACKGROUND:"
echo "   - testimonial-bg.webp: Gym interior with lighting"
echo ""
echo "=== CONVERSION INSTRUCTIONS ==="
echo "Convert all images to WebP format and optimize:"
echo "  - Max size: 300KB per image"
echo "  - Use: cwebp -q 85 input.jpg -o output.webp"
echo ""
echo "Place optimized images in: $TARGET_DIR"
