# Content Page Layouts - Implementation Guide

This guide explains the two available layout options for content pages in the fazezero website.

## Available Layouts

### 1. **ContentPage** (Grid with Glassmorphism)

**File:** `src/components/ui/ContentPage.tsx`

**Best for:**

- Feature showcases
- Product pages
- Technical specifications
- Service offerings

**Layout Structure:**

```
┌─────────────────────────────────────┐
│  Animated Badge + Title             │
├─────────────────────────────────────┤
│  Quick Links (4 cards - 2x2 grid)  │
│  [Card] [Card] [Card] [Card]       │
├─────────────────────────────────────┤
│  Feature Sections (3-col grid)     │
│  [Section] [Section] [Section]     │
│  [Section] [Section] [Section]     │
└─────────────────────────────────────┘
```

**Visual Features:**

- Glassmorphism cards with backdrop blur
- Gradient hover effects
- Scale animations on hover
- 4-column quick links
- 3-column feature grid
- Consistent card sizing

**Responsive:**

- Mobile: 1 column
- Tablet: 2 columns
- Desktop: 3-4 columns

---

### 2. **TimelineContentPage** (Timeline/Flow)

**File:** `src/components/ui/TimelineContentPage.tsx`

**Best for:**

- Developer journeys
- Process flows
- Storytelling
- Step-by-step guides
- Historical narratives

**Layout Structure:**

```
┌─────────────────────────────────────┐
│  Hero Badge + Title                 │
├─────────────────────────────────────┤
│  Horizontal Scroll Quick Links      │
│  → [Card] [Card] [Card] [Card] →   │
├─────────────────────────────────────┤
│  ○─────────────────────────        │
│  │ Section 1 (left)                │
│  └──────○                           │
│         │ Section 2 (right)         │
│   ○─────┘                           │
│   │ Section 3 (left)                │
└───┴─────────────────────────────────┘
```

**Visual Features:**

- Vertical timeline with gradient line
- Alternating left/right content
- Pulsing icon nodes
- Horizontal scrolling quick links (mobile)
- Different gradient colors per side (indigo/purple)
- End marker with pulse animation

**Responsive:**

- Mobile: Centered, stacked
- Desktop: Left/right alternating with timeline

---

## Usage Examples

### Using ContentPage (Grid Layout)

```typescript
// src/app/your-page/page.tsx
import { ContentPage } from "@/components/ui/ContentPage";
import { pageContent } from "./metadata";

export default function YourPage() {
  return <ContentPage {...pageContent} />;
}
```

### Using TimelineContentPage (Flow Layout)

```typescript
// src/app/your-page/page.tsx
import { TimelineContentPage } from "@/components/ui/TimelineContentPage";
import { pageContent } from "./metadata";

export default function YourPage() {
  return <TimelineContentPage {...pageContent} />;
}
```

---

## Page Content Structure

Both layouts use the same `pageContent` interface:

```typescript
export const pageContent = {
  badge: "Your Badge",
  badgeIcon: "Code", // IconName from Icon.tsx
  title: "Your Page Title",
  description: "Your page description...",

  quickLinks: [
    {
      icon: "BookOpen",
      title: "Quick Link 1",
      description: "Description...",
      href: "/link-1",
    },
    // ... 3 more quickLinks (total 4 recommended)
  ],

  sections: [
    {
      title: "Section 1",
      description: "Long description...",
      icon: "Code",
    },
    // ... 5 more sections (total 6 recommended)
  ],
};
```

---

## When to Use Each Layout

### Use **ContentPage** (Grid) when:

✅ Content is feature-focused
✅ All sections have equal importance
✅ User needs quick scanning
✅ Content is product/service specs
✅ Mobile-first, compact view needed

**Examples:**

- Platform features page
- Solutions overview
- Industries page
- Product specifications

---

### Use **TimelineContentPage** (Flow) when:

✅ Content tells a story
✅ Sequential/chronological order matters
✅ Developer journey/process flow
✅ Building narrative progression
✅ Want visual flow and movement

**Examples:**

- Developer journey
- Getting started guides
- Company history/about
- Process explanations
- Onboarding flows

---

## Current Implementation

### Grid Layout (ContentPage):

- ✅ `/platform/*` - All platform pages
- ✅ `/solutions/*` - All solution pages
- ✅ `/industries` - Industries overview
- ✅ `/compliance` - Compliance page
- ✅ `/contact` - Contact page

### Timeline Layout (TimelineContentPage):

- ✅ `/developers` - Developer main page (DEMO)

---

## Switching Between Layouts

To switch a page from one layout to another, simply change the import:

**From Grid to Timeline:**

```diff
- import { ContentPage } from "@/components/ui/ContentPage";
+ import { TimelineContentPage } from "@/components/ui/TimelineContentPage";

export default function YourPage() {
-   return <ContentPage {...pageContent} />;
+   return <TimelineContentPage {...pageContent} />;
}
```

**No changes needed to `pageContent` structure!** Both layouts accept the same props.

---

## Design Features Comparison

| Feature            | ContentPage (Grid) | TimelineContentPage (Flow)    |
| ------------------ | ------------------ | ----------------------------- |
| Quick Links Layout | 2x2 or 4-col grid  | Horizontal scroll             |
| Sections Layout    | 3-column grid      | Alternating left/right        |
| Visual Flow        | Static grid        | Timeline with connecting line |
| Icon Position      | Top of card        | Center node on timeline       |
| Hover Effects      | Scale + glow       | Scale + rotate                |
| Gradient Colors    | Consistent indigo  | Alternating indigo/purple     |
| Best For           | Features           | Stories/Processes             |
| Mobile UX          | Stacked cards      | Stacked + scroll              |

---

## Animation Features

Both layouts include:

- ✅ Fade-in-up animations
- ✅ Staggered entrance delays
- ✅ Pulse animations for icons/badges
- ✅ Smooth hover transitions
- ✅ Glassmorphism effects
- ✅ Gradient backgrounds

---

## Customization Tips

### Adding More Quick Links

Recommended: 4 quick links

- Grid: Works with 2-8 links (adjusts columns)
- Timeline: Works with any number (horizontal scroll)

### Adding More Sections

Recommended: 6 sections

- Grid: Works with any number (3-col grid wraps)
- Timeline: Works with any number (alternates automatically)

### Changing Colors

Edit gradient colors in the components:

- Grid: `from-indigo-500 to-purple-500`
- Timeline: `from-indigo-500 to-purple-500` (left) and `from-purple-500 to-pink-500` (right)

---

## Performance Notes

Both layouts are optimized with:

- Client-side rendering only where needed
- CSS animations (GPU accelerated)
- Lazy loading of icons
- Efficient re-renders
- Responsive images

---

## Accessibility

Both layouts include:

- Semantic HTML structure
- Proper heading hierarchy
- ARIA labels where needed
- Keyboard navigation support
- Reduced motion support
- High contrast compatibility

---

## Next Steps

1. **Test Timeline Layout:** Visit `/developers` to see it in action
2. **Choose Layout:** Decide which pages should use which layout
3. **Implement:** Update page imports as needed
4. **Customize:** Adjust animations, colors, spacing as desired

---

## Questions?

Both layouts are production-ready and fully responsive. Choose based on your content type and storytelling needs!
