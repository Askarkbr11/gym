# Image Placement Instructions

## Quick Reference

Place your client photos in the following locations:

### Hero Section
- **hero-fallback.webp** - Reception area with neon "247 GYM" sign OR exterior building

### About Section  
- **gym-interior.webp** - Wide gym view with equipment and members
- **personal-training.webp** - Woman doing dumbbell presses with trainer

### Trainers (3 images needed)
- **trainer-1.webp** - Muscular man in yellow tank top
- **trainer-2.webp** - Trainer from personal training photo
- **trainer-3.webp** - Another trainer photo

### Transformations (12 images - 6 before/after pairs)
- Use member photos showing different fitness levels
- Pair them as before/after transformations

### Testimonials (4 member photos)
- **testimonial-1.webp** - Two women with "TEAM 247" hoodie
- **testimonial-2.webp** - Two women with "BREAK LIMITATIONS" wall
- **testimonial-3.webp** - Mirror selfie (women or man/woman)
- **testimonial-4.webp** - Another member photo

### Background
- **testimonial-bg.webp** - Gym interior with lighting for texture

## Image Specifications

- **Format:** WebP (convert from JPG/PNG)
- **Max Size:** 300KB per image
- **Hero:** 1920x1080px
- **Trainers:** 400x500px (portrait)
- **Transformations:** 800x600px
- **Testimonials:** 200x200px (square)

## Tools for Conversion

```bash
# Using ImageMagick
convert input.jpg -quality 85 -resize 1920x1080 output.webp

# Using cwebp (Google)
cwebp -q 85 input.jpg -o output.webp
```
