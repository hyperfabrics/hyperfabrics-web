# 📁 Assets Organization Guide

## Current Status

### ✅ Completed

- [x] Logo placed in `/public/images/logo_blue.png`
- [x] Folder structure created
- [x] All metadata files updated to use organized paths

### ⏳ Pending

- [ ] Create favicon files in `/public/icons/`
- [ ] Create Open Graph images in `/public/og/`

---

## 📂 Recommended Folder Structure

```
public/
├── images/                    ✅ Marketing & brand images
│   ├── logo_blue.png         ✅ ADDED - Main logo (blue version)
│   ├── logo_white.png        📝 TODO - Logo for dark backgrounds
│   └── logo.svg              📝 TODO - Scalable vector version (optional)
│
├── icons/                    📝 TODO - Favicons and app icons
│   ├── favicon.ico           (32x32 or 16x16)
│   ├── favicon-16x16.png     (16x16)
│   ├── apple-touch-icon.png  (180x180)
│   ├── icon-192.png          (192x192 for PWA)
│   └── icon-512.png          (512x512 for PWA)
│
├── og/                       📝 TODO - Open Graph images
│   ├── og-home.png           (1200x630)
│   ├── og-platform.png       (1200x630)
│   ├── og-solutions.png      (1200x630)
│   ├── og-industries.png     (1200x630)
│   ├── og-developers.png     (1200x630)
│   ├── og-compliance.png     (1200x630)
│   └── og-contact.png        (1200x630)
│
└── site.webmanifest          ✅ ADDED - PWA manifest
```

---

## 🎨 Asset Specifications

### 1. Logo Files

#### Main Logo (✅ ADDED)

- **Location**: `/public/images/logo_blue.png`
- **Usage**: Main site logo, structured data
- **Current**: Blue version added

#### Logo Variants (Optional)

- **White version**: For dark backgrounds
- **SVG version**: Scalable, smaller file size
- **Guidelines**:
  - Keep aspect ratio consistent
  - Recommended width: 200-400px for PNG
  - SVG: No fixed dimensions

---

### 2. Favicon Files (📝 TODO)

#### favicon.ico

- **Size**: 32x32 or 16x16 pixels
- **Format**: ICO
- **Location**: `/public/icons/favicon.ico`
- **Usage**: Browser tab icon (legacy support)

#### favicon-16x16.png

- **Size**: 16x16 pixels
- **Format**: PNG
- **Location**: `/public/icons/favicon-16x16.png`
- **Usage**: Modern browsers, small displays

#### apple-touch-icon.png

- **Size**: 180x180 pixels
- **Format**: PNG
- **Location**: `/public/icons/apple-touch-icon.png`
- **Usage**: iOS home screen icon
- **Guidelines**:
  - No transparency
  - iOS adds rounded corners automatically
  - Solid background color recommended

#### PWA Icons

- **icon-192.png**: 192x192 pixels (Android)
- **icon-512.png**: 512x512 pixels (Android)
- **Format**: PNG with transparency
- **Location**: `/public/icons/`
- **Usage**: Progressive Web App installation

---

### 3. Open Graph Images (📝 TODO)

All OG images should be:

- **Size**: 1200x630 pixels (Facebook/LinkedIn optimal)
- **Format**: PNG or JPG
- **File size**: < 8MB (aim for < 300KB)
- **Location**: `/public/og/`

#### Required Images:

1. **og-home.png** - Homepage
2. **og-platform.png** - Platform page
3. **og-solutions.png** - Solutions page
4. **og-industries.png** - Industries page
5. **og-developers.png** - Developers page
6. **og-compliance.png** - Compliance page
7. **og-contact.png** - Contact page

#### Design Guidelines:

- **Safe zone**: Keep important content in center 1200x600px
- **Branding**: Include logo (top-left or center)
- **Text**: Large, bold, readable (48-72px minimum)
- **Colors**: Use brand colors consistently
- **Template**: Create one template, customize per page

#### Example OG Image Layout:

```
┌──────────────────────────────────────────┐
│  [Logo]                           1200px │
│                                           │
│           Main Headline Here              │
│         (Large Bold 60-72px)              │
│                                           │
│        Subheadline or tagline             │
│            (36-48px)                      │
│                                           │
│                        [fazezero.com]     │
└──────────────────────────────────────────┘
                  630px
```

---

## 🛠️ Creation Tools

### Favicon Generator

- **RealFaviconGenerator**: https://realfavicongenerator.net/

  - Upload your logo
  - Automatically generates all required sizes
  - Provides ready-to-use code

- **Favicon.io**: https://favicon.io/
  - Simple interface
  - Multiple generation options

### OG Image Creation

- **Figma**: Professional design tool (free tier available)
- **Canva**: User-friendly templates (pro features for teams)
- **Photoshop/Illustrator**: For advanced designs
- **Online Tools**:
  - https://www.opengraph.xyz/ (preview tool)
  - https://ogimage.vercel.app/ (template generator)

---

## 📋 Quick Start Checklist

### Step 1: Create Favicons (15-20 mins)

1. Go to https://realfavicongenerator.net/
2. Upload `/public/images/logo_blue.png`
3. Customize colors/padding if needed
4. Download favicon package
5. Extract to `/public/icons/`
6. Update references in `layout.tsx` if needed

### Step 2: Create OG Images (30-45 mins)

1. **Choose a tool** (Figma/Canva recommended)
2. **Create master template**:

   - Canvas: 1200x630px
   - Add logo from `/public/images/logo_blue.png`
   - Design consistent header/footer
   - Use brand colors

3. **Customize for each page**:

   - Home: "Enterprise Blockchain Infrastructure"
   - Platform: "Platform Capabilities"
   - Solutions: "Blockchain Solutions"
   - Industries: "Industries We Serve"
   - Developers: "Developer Resources"
   - Compliance: "Compliance-Ready Infrastructure"
   - Contact: "Get Started Today"

4. **Export as PNG**:

   - Resolution: 1200x630px
   - Quality: High (but keep under 300KB)
   - Save to `/public/og/`

5. **Verify file names match**:
   ```
   og-home.png
   og-platform.png
   og-solutions.png
   og-industries.png
   og-developers.png
   og-compliance.png
   og-contact.png
   ```

### Step 3: Test Everything

```bash
# Start dev server
npm run dev

# Test in browser
# - Check favicon appears in tab
# - Share links on social media to test OG images
# - Use debugging tools below
```

---

## 🧪 Testing Tools

### Favicon Testing

- **Browser**: Check tab icon in Chrome/Firefox/Safari
- **iOS**: Save to home screen on iPhone/iPad
- **Android**: Add to home screen on Android device

### OG Image Testing

- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **OpenGraph Preview**: https://www.opengraph.xyz/
- **Meta Tags Checker**: https://metatags.io/

---

## 🎯 Brand Guidelines

### Colors (Examples - adjust to your brand)

- **Primary Blue**: #375bd2 (from your logo)
- **Dark Background**: #0a0a0a
- **Light Background**: #ffffff
- **Accent**: Use gradient from logo

### Typography

- **Headlines**: Bold, sans-serif, 60-72px
- **Subheads**: Medium weight, 36-48px
- **Body**: Regular, 18-24px
- **Font families**: Match your website fonts

### Logo Usage

- **Minimum size**: 120px width
- **Clear space**: At least logo height around it
- **Backgrounds**: Use blue logo on light, white logo on dark
- **Don't**: Stretch, rotate, or recolor improperly

---

## 📊 File Size Guidelines

### Optimization Targets

- **Favicons**: < 50KB total for all files
- **Logo PNG**: 50-150KB
- **Logo SVG**: 5-20KB
- **OG Images**: 100-300KB each

### Optimization Tools

- **TinyPNG**: https://tinypng.com/ (PNG compression)
- **Squoosh**: https://squoosh.app/ (Google's image optimizer)
- **ImageOptim**: https://imageoptim.com/mac (Mac app)
- **SVGOMG**: https://jakearchibald.github.io/svgomg/ (SVG optimizer)

---

## 🚀 Deployment Checklist

Before deploying:

- [ ] All favicon files created and in `/public/icons/`
- [ ] All OG images created and in `/public/og/`
- [ ] Logo files in `/public/images/`
- [ ] Test all images load correctly locally
- [ ] Test social sharing previews
- [ ] Verify file sizes are optimized
- [ ] Check images on mobile devices
- [ ] Validate with OG debugging tools

---

## 💡 Pro Tips

1. **Version Control**:

   - Keep source files (PSD, Figma, etc.) separate from web files
   - Only commit optimized web-ready files to git

2. **Naming Convention**:

   - Use lowercase
   - Use hyphens for spaces
   - Be descriptive but concise
   - Example: `og-platform.png` not `OG_Platform_Image_Final_v2.png`

3. **Batch Processing**:

   - Create all OG images at once for consistency
   - Use same template with just text changes
   - Export all at once with same settings

4. **Mobile Testing**:

   - Test favicons on actual devices
   - Check OG images on mobile social apps
   - Ensure text is readable on small screens

5. **A/B Testing**:
   - Track social sharing CTR
   - Test different OG image designs
   - Update based on performance

---

## 📚 Additional Resources

- **Next.js Image Optimization**: https://nextjs.org/docs/basic-features/image-optimization
- **Web.dev Image Guide**: https://web.dev/fast/#optimize-your-images
- **OpenGraph Protocol**: https://ogp.me/
- **Twitter Card Docs**: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards
- **PWA Icon Guide**: https://web.dev/add-manifest/

---

## 🆘 Need Help?

If you're stuck:

1. Check the examples in this guide
2. Use the recommended tools (they're beginner-friendly)
3. Start with favicon generator (easiest)
4. Use Canva templates for OG images (fastest)
5. Test with the debugging tools listed above

**Remember**: You can always iterate! Start with simple designs and improve them over time.

---

**Last Updated**: October 11, 2025
**Status**: Logo added ✅ | Favicons pending 📝 | OG images pending 📝
