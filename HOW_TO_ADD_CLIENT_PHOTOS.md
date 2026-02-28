# How to Add Your Client Photos to the Website

## 🎯 Quick Guide

Your client photos need to **replace** the placeholder images currently in the website. Here's how:

## 📁 Where to Put Your Photos

All photos go in: **`public/assets/images/`**

## 📸 Step-by-Step Instructions

### Step 1: Prepare Your Client Photos

You have these client photos that need to be added:

1. **Reception area** with "247 GYM FITNESS DISTRICT" neon sign
2. **Gym interior** (wide view with equipment)
3. **Personal training** (woman with dumbbells, trainer spotting)
4. **Trainer photos** (3 trainers)
5. **Member photos** (for testimonials and transformations)
6. **Exterior building** photo

### Step 2: Convert to WebP Format

**Option A: Online (Easiest)**
1. Go to https://cloudconvert.com/jpg-to-webp
2. Upload your photo
3. Convert to WebP
4. Download

**Option B: Command Line (Mac)**
```bash
# Install webp tools (if not installed)
brew install webp

# Convert a photo
cwebp -q 85 your-photo.jpg -o output.webp
```

### Step 3: Name Your Photos Correctly

Replace these files in `public/assets/images/`:

| Your Photo | Save As | Where It Appears |
|------------|---------|-----------------|
| Reception/exterior photo | `hero-fallback.webp` | Hero section background |
| Wide gym interior | `gym-interior.webp` | About section |
| Trainer with client | `personal-training.webp` | About section |
| Trainer 1 (yellow tank top) | `trainer-1.webp` | Trainers section |
| Trainer 2 (from training photo) | `trainer-2.webp` | Trainers section |
| Trainer 3 | `trainer-3.webp` | Trainers section |
| Member photo 1 | `testimonial-1.webp` | Testimonials |
| Member photo 2 | `testimonial-2.webp` | Testimonials |
| Member photo 3 | `testimonial-3.webp` | Testimonials |
| Member photo 4 | `testimonial-4.webp` | Testimonials |
| Before photo 1 | `transformation-1-before.webp` | Transformations |
| After photo 1 | `transformation-1-after.webp` | Transformations |
| Before photo 2 | `transformation-2-before.webp` | Transformations |
| After photo 2 | `transformation-2-after.webp` | Transformations |
| ... (continue for 6 pairs) | ... | Transformations |
| Gym interior texture | `testimonial-bg.webp` | Testimonials background |

### Step 4: Replace the Files

**Method 1: Using Finder (Mac)**
1. Open Finder
2. Navigate to: `/Users/askarkabeer/Documents/GitHub/gym/public/assets/images/`
3. Drag and drop your converted WebP photos
4. **Replace** the existing files when prompted

**Method 2: Using Terminal**
```bash
cd /Users/askarkabeer/Documents/GitHub/gym/public/assets/images/

# Copy your photos here, replacing the existing ones
# Example:
cp ~/Downloads/reception-photo.webp ./hero-fallback.webp
cp ~/Downloads/gym-interior.webp ./gym-interior.webp
# ... continue for all photos
```

### Step 5: Optimize Sizes (Important!)

Before replacing, make sure your photos are optimized:

| Photo Type | Max Size | Dimensions |
|------------|----------|------------|
| Hero | 500KB | 1920x1080 |
| Gym interior | 400KB | 1920x1080 |
| Personal training | 300KB | 1920x1080 |
| Trainers | 200KB | 400x500 |
| Transformations | 250KB | 800x600 |
| Testimonials | 100KB | 200x200 |
| Background | 200KB | 1920x1080 |

**To resize and optimize:**
```bash
# Install ImageMagick (if not installed)
brew install imagemagick

# Resize and compress
convert input.webp -resize 1920x1080 -quality 85 output.webp
```

### Step 6: Test Your Changes

1. **Start the development server:**
   ```bash
   npm run dev
   ```

2. **Open your browser:**
   - Go to http://localhost:3000
   - Check each section to see your photos
   - Verify images load correctly

3. **Check these sections:**
   - ✅ Hero section - Should show your reception/exterior photo
   - ✅ About section - Should show gym interior and personal training
   - ✅ Trainers section - Should show your 3 trainer photos
   - ✅ Transformations - Should show your before/after pairs
   - ✅ Testimonials - Should show your member photos

## 🎨 Recommended Photo Assignments

Based on the photos you shared:

### Hero Section (`hero-fallback.webp`)
- **Best choice:** Reception area with "247 GYM FITNESS DISTRICT" neon sign
- **Alternative:** Exterior building with "247 GYM" sign

### About Section
- **`gym-interior.webp`:** Wide gym view showing equipment and members
- **`personal-training.webp`:** Woman doing dumbbell presses with trainer

### Trainers
- **`trainer-1.webp`:** Muscular man in yellow tank top
- **`trainer-2.webp`:** Trainer from personal training photo (bearded man)
- **`trainer-3.webp`:** Another trainer from your photos

### Testimonials
- **`testimonial-1.webp`:** Two women with "TEAM 247" hoodie
- **`testimonial-2.webp`:** Two women with "BREAK LIMITATIONS" wall
- **`testimonial-3.webp`:** Mirror selfie (women or couple)
- **`testimonial-4.webp`:** Another member photo

### Transformations
- Create 6 before/after pairs from your member photos
- Show different fitness levels and transformations

## ⚠️ Troubleshooting

### Images not showing?
1. Check file names match exactly (case-sensitive)
2. Verify files are in `public/assets/images/` folder
3. Make sure files are WebP format
4. Restart the dev server: `npm run dev`

### Images too large/slow?
1. Optimize using the commands above
2. Reduce quality to 80-85
3. Resize to recommended dimensions

### Wrong images showing?
1. Clear browser cache (Cmd+Shift+R on Mac)
2. Check file names match the table above
3. Verify you replaced the correct files

## ✅ Quick Checklist

- [ ] All photos converted to WebP
- [ ] Photos optimized (under size limits)
- [ ] Photos renamed correctly
- [ ] Photos placed in `public/assets/images/`
- [ ] Replaced all placeholder images
- [ ] Tested on local server
- [ ] Verified all sections show correct photos

## 🚀 After Adding Photos

Once all photos are added:
1. Test the website thoroughly
2. Check mobile responsiveness
3. Verify all images load quickly
4. Deploy to production

---

**Need help?** Make sure:
- File names match exactly (including .webp extension)
- Files are in the correct folder
- Files are WebP format
- Dev server is running
