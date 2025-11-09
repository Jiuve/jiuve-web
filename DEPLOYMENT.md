# Deployment Guide - Jiuve Website

## Vercel Deployment Setup

This document provides step-by-step instructions for deploying the Jiuve website to Vercel.

### Prerequisites

- GitHub repository with the code pushed
- Vercel account (free tier is sufficient for this project)
- Node.js 18+ (already configured in project)

---

## Quick Deployment Steps

### 1. Connect Repository to Vercel

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click **"Add New Project"**
3. Import your Git repository:
   - Select the repository: `Jiuve/jiuve-web`
   - Click **"Import"**

### 2. Configure Project Settings

Vercel will auto-detect Next.js. Verify these settings:

| Setting | Value |
|---------|-------|
| **Framework Preset** | Next.js |
| **Build Command** | `npm run build` |
| **Output Directory** | `.next` (auto-detected) |
| **Install Command** | `npm install` |
| **Development Command** | `npm run dev` |
| **Node.js Version** | 18.x or higher |

### 3. Configure Environment Variables

Currently, no environment variables are required for basic deployment.

**Future variables** (add when implementing contact form):
- `EMAIL_SERVICE_API_KEY` - For EmailJS or Nodemailer
- `GOOGLE_ANALYTICS_ID` - For Google Analytics (Phase 5)

To add environment variables:
1. Go to Project Settings → Environment Variables
2. Add variables for Production, Preview, and Development as needed

### 4. Configure Deployment Branches

**Automatic Deployments:**
- **Production Branch**: `main` (or your default branch)
  - Every push to `main` triggers a production deployment
  - Accessible at: `jiuve-web.vercel.app`

- **Preview Deployments**: All other branches
  - Every pull request gets a unique preview URL
  - Useful for reviewing changes before merging

To configure:
1. Go to Project Settings → Git
2. Production Branch: Set to `main`
3. Enable "Automatic deployments for Production"
4. Enable "Automatic Preview deployments for PRs"

### 5. Custom Domain Setup (Optional)

If you have a custom domain:

1. Go to Project Settings → Domains
2. Add your domain (e.g., `jiuve.com`, `www.jiuve.com`)
3. Follow Vercel's DNS configuration instructions:
   - Add `A` record pointing to Vercel's IP
   - Or add `CNAME` record pointing to `cname.vercel-dns.com`
4. Wait for DNS propagation (up to 24-48 hours)
5. Vercel automatically provisions SSL certificate

**Recommended DNS Records:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

---

## Deployment Verification Checklist

After deployment, verify these items:

- [ ] Homepage loads correctly
- [ ] All styles render properly (Tailwind CSS)
- [ ] Typography scales correctly on different screen sizes
- [ ] Design system preview displays all colors, typography, and spacing
- [ ] Navigation works (when implemented)
- [ ] No console errors in browser
- [ ] Lighthouse performance score > 90
- [ ] Mobile responsive design works
- [ ] SSL certificate is active (HTTPS)

---

## Build Optimization

The project is already optimized for Vercel:

✅ **Next.js 16** with App Router (optimal for Vercel)
✅ **Static Generation** where possible
✅ **Automatic Code Splitting** enabled
✅ **Tailwind CSS v4** with PostCSS optimization
✅ **TypeScript** strict mode for compile-time checks

### Performance Targets

| Metric | Target | Status |
|--------|--------|--------|
| First Contentful Paint | < 1.5s | ✅ Expected |
| Largest Contentful Paint | < 2.5s | ✅ Expected |
| Time to Interactive | < 3.5s | ✅ Expected |
| Cumulative Layout Shift | < 0.1 | ✅ Expected |

---

## Monitoring and Analytics

### Built-in Vercel Analytics (Optional)

Vercel provides free analytics:
1. Go to Project → Analytics
2. Enable Vercel Analytics
3. View real-time performance metrics

### Google Analytics (Phase 5)

Will be implemented in Phase 5 (Task 5.6):
- Add `GOOGLE_ANALYTICS_ID` environment variable
- Integrate GA4 tracking code
- Configure event tracking

---

## Troubleshooting

### Build Fails

**Issue**: Build fails with "Module not found"
- **Solution**: Ensure all dependencies are in `package.json`
- Run `npm install` locally to verify

**Issue**: TypeScript errors during build
- **Solution**: Run `npm run build` locally to see errors
- Fix type errors before pushing

### Deployment Issues

**Issue**: Styles not loading
- **Solution**: Verify `globals.css` is imported in `layout.tsx`
- Check Tailwind config includes all content paths

**Issue**: 404 on routes
- **Solution**: Verify Next.js App Router structure in `src/app/`
- Check file naming conventions (page.tsx, layout.tsx)

### Performance Issues

**Issue**: Low Lighthouse score
- **Solution**:
  - Optimize images (use Next.js Image component)
  - Enable lazy loading
  - Review Core Web Vitals in Vercel Analytics

---

## Manual Deployment Commands

If you prefer CLI deployment:

```bash
# Install Vercel CLI
npm install -g vercel

# Login to Vercel
vercel login

# Deploy to preview
vercel

# Deploy to production
vercel --prod
```

---

## Rollback Procedure

If a deployment has issues:

1. Go to Deployments tab in Vercel dashboard
2. Find the last working deployment
3. Click on the deployment
4. Click "Promote to Production"
5. Confirm rollback

---

## Support and Resources

- **Vercel Documentation**: https://vercel.com/docs
- **Next.js Deployment**: https://nextjs.org/docs/deployment
- **Vercel Support**: support@vercel.com

---

## Deployment Checklist Summary

Complete these steps for full Task 1.2 completion:

- [ ] Create Vercel account
- [ ] Import GitHub repository to Vercel
- [ ] Verify build settings
- [ ] Configure production branch (main)
- [ ] Enable automatic deployments
- [ ] Enable preview deployments for PRs
- [ ] Test production deployment
- [ ] Verify deployment URL works
- [ ] (Optional) Configure custom domain
- [ ] Document deployment URL for team

---

**Last Updated**: November 9, 2025
**Maintained By**: Development Team
