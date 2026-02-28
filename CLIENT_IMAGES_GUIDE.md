# Client Images Placement Guide - 247 Gym

## 📸 Image Mapping

Based on the provided client photos, here's where each image should be placed:

### 🎬 Hero Section
**File:** `hero-background.mp4` or `hero-fallback.webp`
- **Use:** Reception area photo with "247 GYM FITNESS DISTRICT" neon sign
- **Description:** Shows the modern reception with blue neon signage
- **Alternative:** Exterior building shot with "247 GYM" sign

### 🏋️ About Section
**File:** `gym-interior.webp`
- **Use:** Wide gym view showing equipment and people working out
- **Description:** Shows the spacious gym with various equipment, LED lighting, and active members
- **Alternative:** Cardio equipment area or functional training area

**File:** `personal-training.webp`
- **Use:** Woman doing dumbbell presses with trainer spotting
- **Description:** Shows personal training session in action

### 👥 Trainers Section
**File:** `trainer-1.webp`
- **Use:** Muscular man in yellow tank top (first trainer photo)
- **Description:** Professional trainer photo showing physique

**File:** `trainer-2.webp`
- **Use:** Trainer spotting woman (male trainer from personal training photo)
- **Description:** Shows trainer in action

**File:** `trainer-3.webp`
- **Use:** Another trainer photo (can use one of the men from gym selfies)
- **Description:** Professional trainer portrait

### 📊 Transformations Section
**Before/After pairs:**
- Use the various member photos showing different fitness levels
- Pair members at different stages of their journey
- **Files:** `transformation-1-before.webp` through `transformation-6-after.webp`

### 💬 Testimonials Section
**File:** `testimonial-1.webp` through `testimonial-4.webp`
- **Use:** Member photos from the gym selfies and group photos
- **Options:**
  - Two women with "TEAM 247" hoodie
  - Two women in front of "BREAK YOUR LIMITATIONS" wall
  - Two women mirror selfie
  - Man and woman mirror selfie
  - Two men gym selfie

**File:** `testimonial-bg.webp`
- **Use:** Gym interior with colorful lighting and equipment
- **Description:** Background texture for testimonials section

### 🏢 Contact Section
**File:** `gym-exterior.webp` (new)
- **Use:** Exterior building shot showing "247 GYM" sign
- **Description:** Shows the building facade for Google Maps context

## 📁 Recommended File Structure

```
public/assets/images/
├── hero/
│   ├── hero-background.mp4 (video)
│   └── hero-fallback.webp (reception or exterior)
├── about/
│   ├── gym-interior.webp (wide gym view)
│   └── personal-training.webp (trainer with client)
├── trainers/
│   ├── trainer-1.webp (man in yellow tank)
│   ├── trainer-2.webp (trainer spotting)
│   └── trainer-3.webp (another trainer)
├── transformations/
│   ├── transformation-1-before.webp
│   ├── transformation-1-after.webp
│   └── ... (6 pairs total)
├── testimonials/
│   ├── testimonial-1.webp (team 247 women)
│   ├── testimonial-2.webp (women with limitations wall)
│   ├── testimonial-3.webp (mirror selfie women)
│   ├── testimonial-4.webp (man and woman)
│   └── testimonial-bg.webp (gym interior texture)
└── contact/
    └── gym-exterior.webp (building exterior)
```

## 🎯 Image Optimization Checklist

Before placing images:
- [ ] Convert all to WebP format
- [ ] Compress to under 300KB each
- [ ] Resize to appropriate dimensions:
  - Hero: 1920x1080
  - Trainers: 400x500
  - Transformations: 800x600
  - Testimonials: 200x200
- [ ] Add blur placeholders for better loading
- [ ] Ensure proper alt text for accessibility

## 📝 Notes

- All images should showcase the modern, professional gym environment
- Use images that highlight the "247 GYM" branding where visible
- Ensure diversity in member photos
- Maintain consistent quality and lighting across images
