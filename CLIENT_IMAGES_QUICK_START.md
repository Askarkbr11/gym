# Quick Start: Adding Client Images to 247 Gym Website

## 📋 Step-by-Step Instructions

### Step 1: Prepare Your Images

1. **Organize your photos** into these categories:
   - Hero/Reception photos
   - Gym interior photos
   - Trainer photos (3 needed)
   - Member photos (for testimonials and transformations)
   - Exterior building photo

### Step 2: Convert to WebP Format

Use an online converter or command line tool:

**Online:** https://cloudconvert.com/jpg-to-webp
**Command Line:**
```bash
# Install cwebp (if not installed)
# macOS: brew install webp
# Then convert:
cwebp -q 85 input.jpg -o output.webp
```

### Step 3: Optimize Sizes

**Target sizes:**
- Hero: 1920x1080px, max 500KB
- Trainers: 400x500px, max 200KB
- Transformations: 800x600px, max 250KB
- Testimonials: 200x200px, max 100KB
- Gym interior: 1920x1080px, max 400KB

### Step 4: Place Images

Copy your optimized WebP images to:

```
public/assets/images/
├── hero-fallback.webp          ← Reception or exterior photo
├── gym-interior.webp            ← Wide gym view
├── personal-training.webp       ← Trainer with client
├── trainer-1.webp               ← Trainer photo 1
├── trainer-2.webp               ← Trainer photo 2
├── trainer-3.webp               ← Trainer photo 3
├── transformation-1-before.webp ← Member before
├── transformation-1-after.webp ← Member after
├── ... (6 pairs total)
├── testimonial-1.webp           ← Member photo 1
├── testimonial-2.webp           ← Member photo 2
├── testimonial-3.webp           ← Member photo 3
├── testimonial-4.webp           ← Member photo 4
└── testimonial-bg.webp           ← Gym interior texture
```

### Step 5: Verify

1. Run `npm run dev`
2. Check each section to ensure images load correctly
3. Verify images look good on mobile devices

## 🎯 Recommended Image Assignments

Based on your client photos:

### Hero Section
- **Reception area** with "247 GYM FITNESS DISTRICT" neon sign
- Shows the modern, professional gym entrance

### About Section
- **Wide gym view** showing equipment and active members
- **Personal training** photo (woman with dumbbells, trainer spotting)

### Trainers
- **Trainer 1:** Muscular man in yellow tank top
- **Trainer 2:** Trainer from personal training session
- **Trainer 3:** Another trainer (from gym photos)

### Testimonials
- **Member 1:** Two women with "TEAM 247" hoodie
- **Member 2:** Two women with "BREAK LIMITATIONS" wall
- **Member 3:** Mirror selfie (women or couple)
- **Member 4:** Another member photo

### Transformations
- Use member photos showing different fitness levels
- Create 6 before/after pairs from available photos

## ✅ Checklist

- [ ] All images converted to WebP
- [ ] Images optimized (under size limits)
- [ ] Images placed in correct directories
- [ ] All 3 trainer photos added
- [ ] 6 transformation pairs added
- [ ] 4 testimonial photos added
- [ ] Hero fallback image added
- [ ] Gym interior photos added
- [ ] Tested on local development server
- [ ] Verified mobile responsiveness

## 🚀 After Adding Images

1. Test the website: `npm run dev`
2. Check all sections load images correctly
3. Verify performance (images should load quickly)
4. Test on mobile devices
5. Deploy to production

---

**Need help?** Refer to `CLIENT_IMAGES_GUIDE.md` for detailed descriptions.
