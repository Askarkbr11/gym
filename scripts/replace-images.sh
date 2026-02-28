#!/bin/bash

# Script to help replace placeholder images with client photos
# Usage: ./scripts/replace-images.sh

echo "=========================================="
echo "247 Gym - Image Replacement Helper"
echo "=========================================="
echo ""

IMAGES_DIR="public/assets/images"

echo "Current images in the website:"
echo "--------------------------------"
ls -lh "$IMAGES_DIR"/*.webp 2>/dev/null | awk '{print $9, "(" $5 ")"}'
echo ""

echo "To replace images:"
echo "1. Convert your client photos to WebP format"
echo "2. Name them exactly as shown above"
echo "3. Copy them to: $IMAGES_DIR/"
echo "4. Replace the existing files"
echo ""
echo "Required images:"
echo "  - hero-fallback.webp (reception/exterior)"
echo "  - gym-interior.webp (wide gym view)"
echo "  - personal-training.webp (trainer with client)"
echo "  - trainer-1.webp, trainer-2.webp, trainer-3.webp"
echo "  - testimonial-1.webp through testimonial-4.webp"
echo "  - transformation-1-before.webp through transformation-6-after.webp"
echo "  - testimonial-bg.webp (background texture)"
echo ""
echo "After replacing, run: npm run dev"
echo ""
