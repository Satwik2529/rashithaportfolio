# Deployment Guide - Fix 404 Error

## ✅ Changes Made

I've configured your Next.js app for **static export** which works with most hosting platforms.

### Files Updated:
1. **next.config.ts** - Added `output: 'export'` and `images: { unoptimized: true }`
2. **vercel.json** - Configuration for Vercel
3. **netlify.toml** - Configuration for Netlify
4. **public/.nojekyll** - For GitHub Pages

---

## 🚀 How to Deploy

### Option 1: Vercel (Recommended - Easiest)

1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect Next.js
5. Click "Deploy"

**That's it!** Vercel handles everything automatically.

---

### Option 2: Netlify

1. Go to [netlify.com](https://netlify.com)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Build settings (should auto-fill from netlify.toml):
   - **Build command:** `npm run build`
   - **Publish directory:** `out`
5. Click "Deploy"

---

### Option 3: GitHub Pages

1. **Build locally:**
   ```bash
   npm run build
   ```

2. **Push the `out` folder to `gh-pages` branch:**
   ```bash
   git add out
   git commit -m "Deploy to GitHub Pages"
   git subtree push --prefix out origin gh-pages
   ```

3. **Enable GitHub Pages:**
   - Go to your repo → Settings → Pages
   - Source: Deploy from branch
   - Branch: `gh-pages` / `root`
   - Save

4. **Your site will be at:**
   ```
   https://[your-username].github.io/[repo-name]
   ```

---

### Option 4: Other Platforms (Render, Railway, etc.)

**Build Settings:**
- **Build Command:** `npm run build`
- **Output Directory:** `out`
- **Start Command:** Not needed (static site)

---

## 🔧 Testing Locally

Before deploying, test the static export:

```bash
# Build the static site
npm run build

# The output will be in the 'out' folder
# You can serve it locally with:
npx serve out
```

Then open http://localhost:3000 to test.

---

## ❌ Common 404 Errors & Fixes

### 1. **Wrong Output Directory**
- **Problem:** Platform looking for `build` or `dist` instead of `out`
- **Fix:** Set publish/output directory to `out`

### 2. **Missing Build Command**
- **Problem:** Platform doesn't know how to build
- **Fix:** Set build command to `npm run build`

### 3. **Node Version Mismatch**
- **Problem:** Platform using old Node.js version
- **Fix:** Add `.nvmrc` file with `20` or set Node version in platform settings

### 4. **Client-Side Routing Issues**
- **Problem:** Refreshing on `/about` gives 404
- **Fix:** Already handled by `netlify.toml` redirects. For other platforms, configure SPA fallback.

---

## 📝 Quick Checklist

Before deploying, make sure:
- ✅ `npm run build` works locally
- ✅ No TypeScript errors
- ✅ All environment variables are set (if any)
- ✅ Build command is `npm run build`
- ✅ Output directory is `out`

---

## 🆘 Still Getting 404?

**Tell me:**
1. Which platform are you using? (Vercel, Netlify, GitHub Pages, etc.)
2. What's the exact error message?
3. Can you share the deployment logs?

I'll help you fix it!

---

## 🎯 Recommended Platform

**Vercel** is the easiest because:
- Made by Next.js creators
- Auto-detects everything
- Free for personal projects
- Automatic HTTPS
- Global CDN
- Zero configuration needed

Just connect your GitHub repo and click deploy!
