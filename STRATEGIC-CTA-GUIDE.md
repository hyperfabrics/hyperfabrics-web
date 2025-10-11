# Strategic CTA Implementation Guide

## Overview

We've added **strategic CTA sections** to both `ContentPage` and `TimelineContentPage` templates. These CTAs appear at the bottom of each page (before the global CTA section) and direct users to specific conversion actions like requesting a demo, contacting sales, or scheduling a consultation.

## Features Added

### 1. **Hero Section**

- ✅ Commented out the pill/badge for now (can be re-enabled later)
- Badge can be strategically reintroduced when needed

### 2. **Page Templates Enhanced**

Both `ContentPage.tsx` and `TimelineContentPage.tsx` now support:

- Optional `strategicCTA` prop with configurable:
  - Title
  - Description
  - Primary button (text + href)
  - Secondary button (optional, text + href)

## Usage Examples

### Example 1: Platform Page - Request Demo

```tsx
// In your metadata.ts file
export const pageContent = {
  badge: "Blockchain as a Service",
  title: "Enterprise Platform",
  description: "...",

  // Add strategic CTA
  strategicCTA: {
    title: "Ready to Build?",
    description: "See how our platform can accelerate your blockchain journey. Schedule a demo with our team.",
    primaryButton: {
      text: "Request Demo",
      href: "/contact?type=demo"
    },
    secondaryButton: {
      text: "Contact Sales",
      href: "/contact?type=sales"
    }
  },

  sections: [...]
};
```

### Example 2: Solutions Page - Contact Sales

```tsx
export const pageContent = {
  badge: "Financial Services",
  title: "DeFi Solutions",
  description: "...",

  strategicCTA: {
    title: "Transform Your Financial Infrastructure",
    description:
      "Connect with our solution architects to design a custom blockchain implementation for your institution.",
    primaryButton: {
      text: "Contact Sales",
      href: "/contact?type=sales",
    },
    secondaryButton: {
      text: "View Case Studies",
      href: "/resources/case-studies",
    },
  },
};
```

### Example 3: Services Page - Schedule Consultation

```tsx
export const pageContent = {
  badge: "Professional Services",
  title: "Migration Services",
  description: "...",

  strategicCTA: {
    title: "Need Migration Support?",
    description:
      "Our experts can help you seamlessly migrate to blockchain infrastructure. Let's discuss your requirements.",
    primaryButton: {
      text: "Schedule Consultation",
      href: "/contact?type=consultation",
    },
    secondaryButton: {
      text: "Read Migration Guide",
      href: "/resources/whitepapers/migration",
    },
  },
};
```

### Example 4: Single CTA Only

```tsx
export const pageContent = {
  badge: "Developers",
  title: "API Documentation",
  description: "...",

  strategicCTA: {
    title: "Start Building Today",
    description:
      "Get started with our comprehensive APIs and SDKs. No credit card required.",
    primaryButton: {
      text: "Get API Keys",
      href: "/developers/api",
    },
    // No secondary button - it's optional!
  },
};
```

## CTA URL Patterns

### Recommended URL patterns for consistency:

1. **Request Demo**: `/contact?type=demo`
2. **Contact Sales**: `/contact?type=sales`
3. **Schedule Consultation**: `/contact?type=consultation`
4. **Technical Support**: `/developers/support?type=technical`
5. **Partnership Inquiry**: `/contact?type=partnership`
6. **Get Started**: `/developers` or `/platform/sandbox`

## Design Features

The strategic CTA section includes:

- ✨ Gradient background with glassmorphism effect
- 🎨 Responsive padding (adjusts for mobile, tablet, desktop)
- 🔘 Large, prominent buttons using the new Button component
- 📱 Mobile-friendly stacked layout
- 💫 Background glow effects for visual depth
- 🎯 Centered content with max-width for readability

## When to Use Strategic CTAs

### ✅ **Do use strategic CTAs for:**

- Platform feature pages → "Request Demo"
- Solution pages → "Contact Sales"
- Service pages → "Schedule Consultation"
- Industry pages → "See Case Studies"
- Enterprise features → "Talk to Expert"

### ❌ **Don't use strategic CTAs for:**

- Developer documentation (use inline code examples instead)
- Blog posts (use related posts)
- Legal/policy pages
- Error pages

## Customization

### Changing CTA Appearance

The strategic CTA section uses:

- `Button` component with `variant="primary"` and `variant="secondary"`
- `size="lg"` for prominent display
- Gradient backgrounds defined in the template

### Adding Icons (Future Enhancement)

```tsx
// Future: Add icon support
strategicCTA: {
  title: "Ready to Build?",
  icon: "Rocket", // IconName type
  description: "...",
  // ...
}
```

## Next Steps

1. **Add strategic CTAs to existing pages** by updating their `metadata.ts` files
2. **Create contact form pages** that handle the different CTA types (demo, sales, consultation)
3. **Set up form routing** based on URL parameters (e.g., `?type=demo`)
4. **Track CTA conversions** with analytics

## Pages to Update

### Priority 1 (High Conversion):

- [ ] `/platform` - Request Demo
- [ ] `/solutions` - Contact Sales
- [ ] `/services` - Schedule Consultation
- [ ] `/services/consulting` - Book Consultation
- [ ] `/services/poc` - Request PoC

### Priority 2 (Medium Conversion):

- [ ] All Solutions pages (financial-services, gaming, etc.)
- [ ] All Platform pages (api, mpc, dashboard, etc.)
- [ ] All Services pages (implementation, migration, etc.)

### Priority 3 (Low Priority):

- [ ] Industry pages
- [ ] Resource pages (case studies, whitepapers)

## Example Implementation

See `/src/app/platform/metadata.ts` for a working example of strategic CTA implementation.
