# Process Client Photos - Quick Guide

## 📸 Your Client Photos Location
`public/assets/images/client/`

## 🎯 Photo Mapping Plan

Based on the photos you shared, here's the mapping:

### ✅ Direct Matches (I can process these):

1. **gym.png** → `hero-fallback.webp` (Reception/exterior)
2. **gym2.jpg** → `gym-interior.webp` (Wide gym view)
3. **epuipments1.jpg** → `testimonial-bg.webp` (Background texture)

### 📋 Pose Photos (Need Manual Assignment):

**For Trainers (3 needed):**
- pose1.jpg, pose2.jpg, pose3.jpg, pose5.jpg, pose6.jpg, pose7.jpg, pose8.jpg, pose9.jpg, pose10.jpg, pose11.jpg, pose12.jpg
- **Select 3 best trainer photos** → trainer-1.webp, trainer-2.webp, trainer-3.webp

**For Testimonials (4 needed):**
- **Select 4 member photos** → testimonial-1.webp through testimonial-4.webp

**For Transformations (12 needed - 6 pairs):**
- **Create 6 before/after pairs** from remaining photos
- → transformation-1-before.webp, transformation-1-after.webp, etc.

## 🚀 Quick Processing (Automated)

Run this command to process the main photos:

```bash
cd /Users/askarkabeer/Documents/GitHub/gym
./scripts/process-client-photos.sh
```

Or manually convert using webp tools:

```bash
# Install webp tools first
brew install webp

# Then convert
cd public/assets/images/client

# Hero
cwebp -q 85 gym.png -o ../hero-fallback.webp

# Gym interior
cwebp -q 85 gym2.jpg -o ../gym-interior.webp

# Background
cwebp -q 80 epuipments1.jpg -o ../testimonial-bg.webp
```

## 📝 Manual Processing Steps

1. **Install webp tools:**
   ```bash
   brew install webp
   ```

2. **Convert main photos:**
   ```bash
   cd public/assets/images/client
   
   # Hero section
   cwebp -q 85 gym.png -o ../hero-fallback.webp
   
   # About section
   cwebp -q 85 gym2.jpg -o ../gym-interior.webp
   
   # Background
   cwebp -q 80 epuipments1.jpg -o ../testimonial-bg.webp
   ```

3. **Convert pose photos for trainers:**
   ```bash
   # Select 3 best trainer photos (e.g., pose1, pose2, pose3)
   cwebp -q 85 pose1.jpg -o ../trainer-1.webp
   cwebp -q 85 pose2.jpg -o ../trainer-2.webp
   cwebp -q 85 pose3.jpg -o ../trainer-3.webp
   ```

4. **Convert for testimonials:**
   ```bash
   # Select 4 member photos
   cwebp -q 85 pose5.jpg -o ../testimonial-1.webp
   cwebp -q 85 pose6.jpg -o ../testimonial-2.webp
   cwebp -q 85 pose7.jpg -o ../testimonial-3.webp
   cwebp -q 85 pose8.jpg -o ../testimonial-4.webp
   ```

5. **Convert for transformations:**
   ```bash
   # Create 6 before/after pairs
   # Example:
   cwebp -q 85 pose9.jpg -o ../transformation-1-before.webp
   cwebp -q 85 pose10.jpg -o ../transformation-1-after.webp
   # ... continue for 6 pairs
   ```

## ✅ After Processing

1. Test the website:
   ```bash
   npm run dev
   ```

2. Check each section to verify photos appear correctly

3. Adjust quality if files are too large:
   ```bash
   cwebp -q 75 input.jpg -o output.webp  # Lower quality = smaller file
   ```

---

**Need help?** The photos are ready in `public/assets/images/client/` - just convert and place them!
