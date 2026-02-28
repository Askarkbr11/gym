# ReStart Fitness Center & Gym - Premium 3D Animated Website

A production-ready, premium 3D animated gym website built with Next.js 14, React Three Fiber, GSAP, and Framer Motion.

## 🚀 Features

- **3D Animations**: Interactive 3D dumbbell model using React Three Fiber
- **Smooth Animations**: GSAP and Framer Motion for premium animations
- **Responsive Design**: Fully responsive with mobile optimizations
- **Performance Optimized**: Lazy loading, image optimization, and code splitting
- **SEO Optimized**: Complete metadata and structured data
- **Modern UI/UX**: Premium dark theme with red accent colors

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd gym
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Run the development server:
```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📁 Project Structure

```
gym/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Programs.tsx
│   │   ├── Transformations.tsx
│   │   ├── Trainers.tsx
│   │   ├── Membership.tsx
│   │   ├── Testimonials.tsx
│   │   ├── FinalCTA.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   └── ui/                # Reusable UI components
│       ├── Navigation.tsx
│       ├── Dumbbell3D.tsx
│       └── WhatsAppButton.tsx
├── public/
│   └── assets/
│       ├── images/        # WebP images
│       ├── videos/        # MP4 videos
│       ├── 3d/            # GLTF 3D models
│       └── icons/         # SVG icons
└── lib/
    └── utils.ts           # Utility functions
```

## 🎨 Media Assets Setup

### Required Media Files

Place the following assets in their respective directories:

#### `/public/assets/videos/`
- `hero-background.mp4` - 8-12 second gym workout loop (under 3MB, compressed)

#### `/public/assets/3d/`
- `dumbbell.gltf` - Optimized 3D dumbbell model (Draco compressed)

#### `/public/assets/images/`
- `gym-interior.webp` - Gym interior image (under 300KB)
- `personal-training.webp` - Personal training session (under 300KB)
- `transformation-1-before.webp` through `transformation-6-before.webp` - Before images
- `transformation-1-after.webp` through `transformation-6-after.webp` - After images
- `trainer-1.webp`, `trainer-2.webp`, `trainer-3.webp` - Trainer portraits (400x500px)
- `testimonial-bg.webp` - Subtle background texture
- `hero-fallback.webp` - Fallback image for video

#### `/public/assets/icons/`
- `strength.svg` - Strength training icon
- `fat-loss.svg` - Fat loss icon
- `personal-training.svg` - Personal training icon
- `crossfit.svg` - CrossFit icon
- `group-classes.svg` - Group classes icon

### Image Optimization Tips

- Convert all images to WebP format
- Compress images to reduce file size
- Use appropriate dimensions (responsive images)
- Add blur placeholders for better UX

### Video Optimization Tips

- Compress video to under 3MB
- Use H.264 codec for maximum compatibility
- Keep duration between 8-12 seconds
- Optimize for web playback

### 3D Model Tips

- Use Draco compression for GLTF files
- Keep polygon count low for performance
- Optimize textures
- Test on mobile devices (fallback provided)

## 🚀 Deployment to Vercel

### Option 1: Deploy via Vercel CLI

1. Install Vercel CLI:
```bash
npm i -g vercel
```

2. Deploy:
```bash
vercel
```

3. Follow the prompts to complete deployment.

### Option 2: Deploy via GitHub

1. Push your code to GitHub:
```bash
git add .
git commit -m "Initial commit"
git push origin main
```

2. Go to [Vercel](https://vercel.com) and sign in
3. Click "New Project"
4. Import your GitHub repository
5. Vercel will automatically detect Next.js and configure settings
6. Click "Deploy"

### Environment Variables

No environment variables are required for basic functionality. If you need to add Google Maps API key or other services, add them in Vercel dashboard under Project Settings > Environment Variables.

### Build Settings

Vercel will automatically:
- Detect Next.js framework
- Use Node.js 18+
- Run `npm run build`
- Optimize images and assets

## 🔧 Configuration

### Update Contact Information

Edit the following files to update contact details:

- `components/sections/Contact.tsx` - Address, phone, email
- `components/sections/Footer.tsx` - Contact info in footer
- `components/ui/WhatsAppButton.tsx` - WhatsApp number
- `app/layout.tsx` - Structured data schema

### Update Social Media Links

Edit `components/sections/Footer.tsx` to update social media URLs.

### Update Google Maps Embed

1. Go to [Google Maps](https://www.google.com/maps)
2. Search for your location
3. Click "Share" > "Embed a map"
4. Copy the iframe code
5. Replace the iframe src in `components/sections/Contact.tsx`

## 📱 Mobile Optimization

- 3D models are disabled on mobile devices (< 768px)
- Images are optimized with Next.js Image component
- Touch-friendly navigation and interactions
- Responsive typography and spacing

## ⚡ Performance Optimization

- Lazy loading for 3D components
- Image optimization with WebP format
- Code splitting with dynamic imports
- Suspense boundaries for async components
- Optimized animations (60fps target)

## 🎯 SEO Features

- Complete metadata in `app/layout.tsx`
- Structured data (LocalBusiness schema)
- Semantic HTML
- Open Graph tags
- Optimized page titles and descriptions

## 🐛 Troubleshooting

### 3D Model Not Loading

- Ensure the GLTF file is in `/public/assets/3d/`
- Check browser console for errors
- The component includes a fallback geometry if the model fails to load

### Video Not Playing

- Ensure video is in MP4 format
- Check file size (should be under 3MB)
- Verify video path is correct
- Check browser autoplay policies

### Images Not Displaying

- Ensure images are in WebP format
- Check file paths match component references
- Verify images are in `/public/assets/images/`

## 📝 License

This project is proprietary. All rights reserved.

## 👥 Support

For support, contact: info@restartfitness.ae

---

Built with ❤️ for ReStart Fitness Center & Gym
