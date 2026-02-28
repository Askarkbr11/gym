#!/bin/bash

# Script to process and place client photos
# Converts JPG/PNG to WebP and places them in correct locations

CLIENT_DIR="public/assets/images/client"
TARGET_DIR="public/assets/images"

echo "Processing client photos..."
echo ""

# Check if webp tools are available
if ! command -v cwebp &> /dev/null; then
    echo "⚠️  cwebp not found. Installing webp tools..."
    if [[ "$OSTYPE" == "darwin"* ]]; then
        if command -v brew &> /dev/null; then
            brew install webp
        else
            echo "❌ Please install Homebrew first, then run: brew install webp"
            exit 1
        fi
    else
        echo "❌ Please install webp tools manually"
        exit 1
    fi
fi

# Create backup of existing images
echo "📦 Creating backup of existing images..."
mkdir -p "$TARGET_DIR/backup"
cp "$TARGET_DIR"/*.webp "$TARGET_DIR/backup/" 2>/dev/null || true

# Function to convert and optimize image
convert_image() {
    local input="$1"
    local output="$2"
    local quality="${3:-85}"
    local max_size="${4:-}"
    
    echo "Converting: $(basename "$input") → $(basename "$output")"
    
    # Convert to WebP
    cwebp -q "$quality" "$input" -o "$output" 2>/dev/null
    
    # If file is too large, reduce quality
    if [ -n "$max_size" ] && [ -f "$output" ]; then
        local size=$(stat -f%z "$output" 2>/dev/null || stat -c%s "$output" 2>/dev/null)
        local max_bytes=$((max_size * 1024))
        if [ "$size" -gt "$max_bytes" ]; then
            echo "  ⚠️  File too large ($size bytes), reducing quality..."
            cwebp -q 75 "$input" -o "$output" 2>/dev/null
        fi
    fi
    
    if [ -f "$output" ]; then
        echo "  ✅ Done"
    else
        echo "  ❌ Failed"
    fi
}

# Process photos based on file names and descriptions
# This is a template - we'll need to identify which photo is which

echo ""
echo "🔄 Processing photos..."
echo ""

# Hero section - reception/exterior
if [ -f "$CLIENT_DIR/gym.png" ]; then
    convert_image "$CLIENT_DIR/gym.png" "$TARGET_DIR/hero-fallback.webp" 85 500
fi

# Gym interior - wide view
if [ -f "$CLIENT_DIR/gym2.jpg" ]; then
    convert_image "$CLIENT_DIR/gym2.jpg" "$TARGET_DIR/gym-interior.webp" 85 400
fi

# Equipment photos for background
if [ -f "$CLIENT_DIR/epuipments1.jpg" ]; then
    convert_image "$CLIENT_DIR/epuipments1.jpg" "$TARGET_DIR/testimonial-bg.webp" 80 200
fi

echo ""
echo "✅ Processing complete!"
echo ""
echo "📋 Next steps:"
echo "1. Review the converted images"
echo "2. Manually assign pose photos to trainers/testimonials/transformations"
echo "3. Test the website: npm run dev"
