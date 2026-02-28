# 🖼️ Simple Guide: Add Your Client Photos

## The Problem
The website currently has **placeholder images**. Your client photos need to **replace** them.

## The Solution (3 Simple Steps)

### Step 1: Save Your Photos
1. Save all your client photos to a folder on your computer (e.g., Desktop/247Gym-Photos)
2. Make sure you can see them in Finder

### Step 2: Convert to WebP
**Easy way (Online):**
1. Go to: https://cloudconvert.com/jpg-to-webp
2. Upload each photo
3. Click "Convert"
4. Download the WebP file
5. Save with the correct name (see Step 3)

**Or use this command (if you have many photos):**
```bash
# Install webp tools first
brew install webp

# Then convert all photos in a folder
for file in ~/Desktop/247Gym-Photos/*.{jpg,jpeg,png}; do
  cwebp -q 85 "$file" -o "${file%.*}.webp"
done
```

### Step 3: Name and Place Photos

**Location:** `/Users/askarkabeer/Documents/GitHub/gym/public/assets/images/`

**Copy your photos there with these EXACT names:**

```
hero-fallback.webp          ← Reception/exterior photo
gym-interior.webp            ← Wide gym view
personal-training.webp       ← Trainer with client
trainer-1.webp               ← Trainer 1 (yellow tank top)
trainer-2.webp               ← Trainer 2 (from training photo)
trainer-3.webp               ← Trainer 3
testimonial-1.webp           ← Two women with TEAM 247 hoodie
testimonial-2.webp           ← Two women with BREAK LIMITATIONS wall
testimonial-3.webp           ← Mirror selfie
testimonial-4.webp           ← Another member photo
transformation-1-before.webp ← Before photo 1
transformation-1-after.webp  ← After photo 1
transformation-2-before.webp ← Before photo 2
transformation-2-after.webp  ← After photo 2
... (continue for 6 pairs)
testimonial-bg.webp          ← Gym interior texture
```

## 🎯 Quick Method (Using Finder)

1. **Open Finder**
2. **Press Cmd+Shift+G** (Go to Folder)
3. **Paste this path:**
   ```
   /Users/askarkabeer/Documents/GitHub/gym/public/assets/images
   ```
4. **Press Enter**
5. **Drag your converted WebP photos** into this folder
6. **Replace** the existing files when asked

## ✅ Verify It Worked

1. Open Terminal
2. Run:
   ```bash
   cd /Users/askarkabeer/Documents/GitHub/gym
   npm run dev
   ```
3. Open browser: http://localhost:3000
4. Check if your photos appear!

## 🆘 Still Not Working?

**Check:**
- ✅ File names match EXACTLY (case-sensitive)
- ✅ Files are .webp format (not .jpg or .png)
- ✅ Files are in the correct folder
- ✅ You replaced the old files (not just added new ones)
- ✅ Dev server is running

**Common mistakes:**
- ❌ Wrong file name (e.g., `Hero-Fallback.webp` instead of `hero-fallback.webp`)
- ❌ Wrong format (e.g., `.jpg` instead of `.webp`)
- ❌ Wrong folder (not in `public/assets/images/`)
- ❌ Didn't replace old files (added new ones instead)

---

**Need more help?** See `HOW_TO_ADD_CLIENT_PHOTOS.md` for detailed instructions.
