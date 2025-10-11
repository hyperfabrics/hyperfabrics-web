# Open Graph Images Folder

This folder contains all Open Graph (OG) images for social media sharing previews.

## Required Files

All images should be **1200x630 pixels** in PNG or JPG format:

- `og-home.png` - Homepage
- `og-platform.png` - Platform page
- `og-solutions.png` - Solutions page
- `og-industries.png` - Industries page
- `og-developers.png` - Developers page
- `og-compliance.png` - Compliance page
- `og-contact.png` - Contact page

## Design Specifications

### Dimensions

- **Size**: 1200x630 pixels (Facebook/LinkedIn optimal)
- **Format**: PNG or JPG
- **File size**: < 8MB (aim for < 300KB for performance)

### Safe Zone

Keep important content within the center **1200x600px** area. Some platforms crop the edges.

### Design Guidelines

1. **Branding**: Include your logo (from `/public/images/logo_blue.png`)
2. **Text**: Large, bold, readable (minimum 48-72px font size)
3. **Colors**: Use fazezero brand colors consistently
4. **Contrast**: Ensure text is readable on background
5. **Template**: Create one template, customize per page

## Example Structure

```
┌─────────────────────────────────────┐
│  [Logo]                    fazezero │
│                                     │
│        Main Headline Here           │
│        (Large Bold Text)            │
│                                     │
│        Brief description or         │
│        key benefit                  │
│                                     │
│                    [fazezero.com]   │
└─────────────────────────────────────┘
```

## Page-Specific Content

### og-home.png

**Headline**: "Enterprise Blockchain Infrastructure"
**Subtext**: "From tokenization to compliance"

### og-platform.png

**Headline**: "Platform"
**Subtext**: "Secure, scalable blockchain infrastructure"

### og-solutions.png

**Headline**: "Solutions"
**Subtext**: "Tokenization, payments, identity & compliance"

### og-industries.png

**Headline**: "Industries"
**Subtext**: "Blockchain for regulated sectors"

### og-developers.png

**Headline**: "Developers"
**Subtext**: "APIs, SDKs & comprehensive documentation"

### og-compliance.png

**Headline**: "Compliance"
**Subtext**: "Regulatory-ready infrastructure"

### og-contact.png

**Headline**: "Get Started"
**Subtext**: "Build the future with fazezero"

## Testing Tools

After creating, test your OG images:

- **OpenGraph Debugger**: https://www.opengraph.xyz/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: Share on LinkedIn and check preview
- **Facebook Sharing Debugger**: https://developers.facebook.com/tools/debug/

## Quick Tips

1. Keep text large and minimal
2. Use high contrast
3. Test on mobile
4. Preview on actual social platforms
5. Update images when branding changes
