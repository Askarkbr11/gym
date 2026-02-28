# Deployment Guide - ReStart Fitness Website

## Quick Deploy to Vercel

### Method 1: Vercel Dashboard (Recommended)

1. **Prepare Your Repository**
   - Push your code to GitHub, GitLab, or Bitbucket
   - Ensure all media assets are committed (or use a CDN)

2. **Deploy via Vercel Dashboard**
   - Go to [vercel.com](https://vercel.com)
   - Sign in with your GitHub account
   - Click "Add New Project"
   - Import your repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Configure Domain** (Optional)
   - After deployment, go to Project Settings
   - Navigate to "Domains"
   - Add your custom domain (e.g., restartfitness.ae)
   - Follow DNS configuration instructions

### Method 2: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from project root)
vercel

# For production deployment
vercel --prod
```

## Pre-Deployment Checklist

### ✅ Code
- [ ] All components are working
- [ ] No console errors
- [ ] All links are functional
- [ ] Mobile responsiveness tested

### ✅ Media Assets
- [ ] Hero video is compressed (< 3MB)
- [ ] All images are in WebP format
- [ ] Images are optimized (< 300KB each)
- [ ] 3D model is Draco compressed
- [ ] Fallback images are in place

### ✅ Configuration
- [ ] Contact information updated
- [ ] Phone numbers updated
- [ ] Email addresses updated
- [ ] WhatsApp number configured
- [ ] Google Maps embed URL updated
- [ ] Social media links updated

### ✅ SEO
- [ ] Meta descriptions updated
- [ ] Open Graph tags configured
- [ ] Structured data (LocalBusiness) updated
- [ ] Sitemap generated (optional)

### ✅ Performance
- [ ] Lighthouse score > 85
- [ ] Images lazy loaded
- [ ] 3D components lazy loaded
- [ ] No unused dependencies

## Environment Variables

Currently, no environment variables are required. If you add:
- Google Maps API key
- Analytics services
- Contact form backend

Add them in Vercel Dashboard:
1. Go to Project Settings
2. Navigate to "Environment Variables"
3. Add your variables
4. Redeploy

## Post-Deployment

### 1. Test All Features
- [ ] Navigation works on all pages
- [ ] Contact form/links work
- [ ] WhatsApp button functions
- [ ] Google Maps loads correctly
- [ ] All animations work smoothly
- [ ] Mobile experience is optimal

### 2. Performance Check
- Run Lighthouse audit
- Check Core Web Vitals
- Verify image loading
- Test 3D model performance

### 3. SEO Verification
- Test structured data with [Google Rich Results Test](https://search.google.com/test/rich-results)
- Verify meta tags
- Check Open Graph previews

### 4. Analytics Setup (Optional)
- Add Google Analytics
- Add Facebook Pixel
- Configure conversion tracking

## Custom Domain Setup

1. **In Vercel Dashboard:**
   - Go to Project Settings > Domains
   - Add your domain (e.g., restartfitness.ae)

2. **DNS Configuration:**
   - Add CNAME record pointing to Vercel
   - Or add A record with Vercel IPs
   - Wait for DNS propagation (up to 48 hours)

3. **SSL Certificate:**
   - Vercel automatically provisions SSL certificates
   - HTTPS will be enabled automatically

## Troubleshooting

### Build Fails
- Check Node.js version (should be 18+)
- Verify all dependencies are installed
- Check for TypeScript errors
- Review build logs in Vercel dashboard

### Images Not Loading
- Verify image paths are correct
- Check that images are in `/public` directory
- Ensure images are committed to repository
- Check file permissions

### 3D Model Not Loading
- Verify GLTF file is in correct location
- Check browser console for errors
- Ensure model is properly compressed
- Test fallback geometry works

### Performance Issues
- Optimize images further
- Reduce video file size
- Check for unnecessary dependencies
- Enable Vercel's image optimization

## Monitoring

### Vercel Analytics
- Enable Vercel Analytics in dashboard
- Monitor page views and performance
- Track Core Web Vitals

### Error Tracking
- Consider adding Sentry for error tracking
- Monitor 404 errors
- Track JavaScript errors

## Updates and Maintenance

### Updating Content
1. Make changes locally
2. Test in development
3. Commit and push to repository
4. Vercel will auto-deploy

### Adding New Features
1. Create feature branch
2. Develop and test locally
3. Create pull request
4. Deploy preview will be created automatically
5. Merge after review

## Support

For deployment issues:
- Check [Vercel Documentation](https://vercel.com/docs)
- Review build logs in Vercel dashboard
- Contact Vercel support if needed

---

**Note:** This website is optimized for Vercel's platform. For other hosting providers, you may need to adjust configuration.
