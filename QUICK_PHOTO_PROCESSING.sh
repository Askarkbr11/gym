#!/bin/bash
# Quick photo processing script

CLIENT_DIR="public/assets/images/client"
TARGET_DIR="public/assets/images"

echo "📸 Processing Client Photos"
echo "=========================="
echo ""

# Check for webp tools
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  webp tools not found. Installing..."
    if command -v brew &> /dev/null; then
        brew install webp
    else
        echo "❌ Please install Homebrew first: https://brew.sh"
        exit 1
    fi
fi

echo "✅ webp tools ready"
echo ""

# Process main photos
echo "🔄 Converting main photos..."

if [ -f "$CLIENT_DIR/gym.png" ]; then
    cwebp -q 85 "$CLIENT_DIR/gym.png" -o "$TARGET_DIR/hero-fallback.webp" && echo "✅ Hero: gym.png → hero-fallback.webp"
fi

if [ -f "$CLIENT_DIR/gym2.jpg" ]; then
    cwebp -q 85 "$CLIENT_DIR/gym2.jpg" -o "$TARGET_DIR/gym-interior.webp" && echo "✅ Gym Interior: gym2.jpg → gym-interior.webp"
fi

if [ -f "$CLIENT_DIR/epuipments1.jpg" ]; then
    cwebp -q 80 "$CLIENT_DIR/epuipments1.jpg" -o "$TARGET_DIR/testimonial-bg.webp" && echo "✅ Background: epuipments1.jpg → testimonial-bg.webp"
fi

echo ""
echo "✅ Main photos processed!"
echo ""
echo "📋 Next: Manually assign pose photos (pose1-12.jpg) to:"
echo "   - Trainers (3 photos)"
echo "   - Testimonials (4 photos)"
echo "   - Transformations (6 pairs = 12 photos)"
echo ""
echo "Run: npm run dev to test"
