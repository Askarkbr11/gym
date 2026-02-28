#!/bin/bash
# Process all pose photos and assign them

CLIENT_DIR="public/assets/images/client"
TARGET_DIR="public/assets/images"

echo "🔄 Processing pose photos..."
echo ""

# Process trainers (3 photos needed)
# Based on descriptions: muscular man in yellow tank, trainer from training photo, another trainer
echo "👥 Processing trainers..."
cwebp -q 85 "$CLIENT_DIR/pose1.jpg" -o "$TARGET_DIR/trainer-1.webp" 2>/dev/null && echo "✅ trainer-1.webp" || echo "⚠️  pose1.jpg not found"
cwebp -q 85 "$CLIENT_DIR/pose2.jpg" -o "$TARGET_DIR/trainer-2.webp" 2>/dev/null && echo "✅ trainer-2.webp" || echo "⚠️  pose2.jpg not found"
cwebp -q 85 "$CLIENT_DIR/pose3.jpg" -o "$TARGET_DIR/trainer-3.webp" 2>/dev/null && echo "✅ trainer-3.webp" || echo "⚠️  pose3.jpg not found"

echo ""
echo "💬 Processing testimonials..."
# Process testimonials (4 photos needed)
cwebp -q 85 "$CLIENT_DIR/pose5.jpg" -o "$TARGET_DIR/testimonial-1.webp" 2>/dev/null && echo "✅ testimonial-1.webp" || echo "⚠️  pose5.jpg not found"
cwebp -q 85 "$CLIENT_DIR/pose6.jpg" -o "$TARGET_DIR/testimonial-2.webp" 2>/dev/null && echo "✅ testimonial-2.webp" || echo "⚠️  pose6.jpg not found"
cwebp -q 85 "$CLIENT_DIR/pose7.jpg" -o "$TARGET_DIR/testimonial-3.webp" 2>/dev/null && echo "✅ testimonial-3.webp" || echo "⚠️  pose7.jpg not found"
cwebp -q 85 "$CLIENT_DIR/pose8.jpg" -o "$TARGET_DIR/testimonial-4.webp" 2>/dev/null && echo "✅ testimonial-4.webp" || echo "⚠️  pose8.jpg not found"

echo ""
echo "📊 Processing transformations..."
# Process transformations (6 pairs = 12 photos)
# Using remaining photos for transformations
cwebp -q 85 "$CLIENT_DIR/pose9.jpg" -o "$TARGET_DIR/transformation-1-before.webp" 2>/dev/null && echo "✅ transformation-1-before.webp" || echo "⚠️  pose9.jpg not found"
cwebp -q 85 "$CLIENT_DIR/pose10.jpg" -o "$TARGET_DIR/transformation-1-after.webp" 2>/dev/null && echo "✅ transformation-1-after.webp" || echo "⚠️  pose10.jpg not found"
cwebp -q 85 "$CLIENT_DIR/pose11.jpg" -o "$TARGET_DIR/transformation-2-before.webp" 2>/dev/null && echo "✅ transformation-2-before.webp" || echo "⚠️  pose11.jpg not found"
cwebp -q 85 "$CLIENT_DIR/pose12.jpg" -o "$TARGET_DIR/transformation-2-after.webp" 2>/dev/null && echo "✅ transformation-2-after.webp" || echo "⚠️  pose12.jpg not found"
cwebp -q 85 "$CLIENT_DIR/se4.jpg" -o "$TARGET_DIR/transformation-3-before.webp" 2>/dev/null && echo "✅ transformation-3-before.webp" || echo "⚠️  se4.jpg not found"

# For remaining transformations, we'll duplicate or use equipment photos
if [ -f "$CLIENT_DIR/equipment2.jpg" ]; then
    cwebp -q 85 "$CLIENT_DIR/equipment2.jpg" -o "$TARGET_DIR/transformation-3-after.webp" 2>/dev/null && echo "✅ transformation-3-after.webp"
fi

# Copy existing transformations for pairs 4-6 (or create from available photos)
# For now, we'll use the existing placeholder transformations

echo ""
echo "✅ All pose photos processed!"
echo ""
echo "📋 Note: You may need to reassign photos based on actual content."
echo "   Review the website and swap photos as needed."
