# Production-Grade Responsive Design System — Lineal Edge

Transform the existing CSS from an ad-hoc desktop-first stylesheet into a **scalable, maintainable responsive design system** — while keeping every existing animation, color, and interaction intact.

---

## Architecture Overview

```
src/
  index.css          ← 7,404 lines — PRIMARY target (inline fixes + appended system)
  style.css          ← 944 lines — minor fixes only
  pages/HomePage.jsx ← inline-style overrides + GSAP matchMedia (Phase 8)
  components/*.jsx   ← NO changes (except className additions on HomePage sections)
```

**Strategy**: Primarily CSS-only. Minimal JSX edits limited to adding `className` attributes (no logic changes). GSAP `matchMedia()` for responsive animation values.

---

## Phase 1 — Foundation: Design Tokens & Container System

### 1.1 Responsive Design Tokens (add to `:root`)

```css
:root {
  /* ── Fluid Spacing Scale ── */
  --space-xs:  clamp(4px, 0.5vw, 8px);
  --space-sm:  clamp(8px, 1vw, 16px);
  --space-md:  clamp(16px, 2vw, 24px);
  --space-lg:  clamp(24px, 3vw, 40px);
  --space-xl:  clamp(40px, 5vw, 64px);
  --space-2xl: clamp(56px, 7vw, 96px);
  --space-3xl: clamp(72px, 9vw, 120px);

  /* ── Container ── */
  --container-max: 1440px;
  --container-gutter: clamp(16px, 4vw, 64px);

  /* ── Existing token FIX ── */
  --section-padding: clamp(64px, 9vw, 120px);  /* was: 120px fixed */
}
```

### 1.2 Unified Container Class

Currently there are **6 different container patterns**. Add a single utility and align all pages:

```css
.aboutx-shell,
.services-container,
.teamx-container,
.careers-container,
.contactv2-container,
.legal-content {
  max-width: var(--container-max) !important;
  margin-inline: auto !important;
  padding-inline: var(--container-gutter) !important;
}
```

---

## Phase 2 — Inline Property Fixes (Targeted Swaps)

### 2.1 Fixed Widths → Fluid

| File | Line | Selector | Before | After |
|---|---|---|---|---|
| `index.css` | 805 | `.glow-top` | `width: 1440px` | `width: 100%` |
| `index.css` | 884-886 | `.logo-mark svg` | `width: 180px; height: 171px` | `width: min(180px, 40vw); height: auto` |
| `index.css` | 896 | `.hero-wordmark` | `width: 448px` | `width: min(448px, 90vw)` |
| `index.css` | 1042 | `.data-line-1` | `width: 940px` | `width: 100%` |
| `index.css` | 1049 | `.data-line-2` | `width: 940px` | `width: 100%` |
| `index.css` | 1252 | `.ghost-logo svg` | `width: 600px; height: 570px` | `width: min(600px, 80vw); height: auto` |
| `index.css` | 1258 | `.phase-visual` | `width: 520px` | `width: min(520px, 100%)` |
| `index.css` | 1293 | `.mark-svg` | `width/height: 340px` | `width: min(340px, 60vw); height: auto` |
| `index.css` | 1388 | `.phase-bg` | `width: 700px` | `width: min(700px, 100%)` |
| `index.css` | 1451 | `.growth-visual` | `width: 560px` | `width: min(560px, 100%)` |
| `index.css` | 1698 | `.bridge-glow` | `width: 1200px` | `width: 100%` |
| `index.css` | 6560 | `.services-newsletter-form` | `grid-template-columns: 455px 142px 420px` | `grid-template-columns: 1fr auto 1fr` |

### 2.2 Fixed Heights → Fluid

| File | Line | Selector | Before | After |
|---|---|---|---|---|
| `index.css` | 1172 | `.phase-one/two` | `height: 700px` | `min-height: 700px; height: auto` |
| `index.css` | 1176 | `.phase-three` | `height: 800px` | `min-height: 600px; height: auto` |
| `index.css` | 2200 | `.aboutx-image-main` | `min-height: 700px` | `min-height: min(700px, 60vh)` |
| `index.css` | 2370 | `.aboutx-wide-image` | `height: 396px` | `height: auto; aspect-ratio: 16/7` |
| `index.css` | 2389 | `.aboutx-architecture-image` | `min-height: 560px` | `min-height: min(560px, 50vh)` |
| `index.css` | 2473 | `.aboutx-member-image` | `height: 360px` | `height: auto; aspect-ratio: 3/4` |
| `index.css` | 3180 | `.careers-hero-image` | `height: 500px` | `height: auto; aspect-ratio: 4/3` |
| `index.css` | 5249 | `.img-card` | `height: 430px` | `min-height: 380px; height: auto` |
| `index.css` | 6315 | `.services-content-image` | `height: 520px` | `height: auto; aspect-ratio: 4/3` |
| `index.css` | 6699 | `.teamx-image` | `height: 380px` | `height: auto; aspect-ratio: 4/3` |
| `style.css` | 509 | `.pulse-section` | `padding: 100px 0` | `padding: var(--space-3xl) 0` |
| `style.css` | 623 | `.bar-container` | `height: 250px` | `min-height: 180px; height: auto` |

### 2.3 Layout Hack Fixes

| File | Line | Selector | Before | After |
|---|---|---|---|---|
| `index.css` | 5386 | `.impact-stats-grid` | `margin-left: 200px` | `margin-left: 0` |

### 2.4 UX Visibility Fixes

| File | Line | Selector | Before | After |
|---|---|---|---|---|
| `index.css` | 1917 | `.hamburger span` | `background: rgba(11,26,56,0.6)` | `background: rgba(255,255,255,0.85)` |
| `index.css` | 4728 | `.nav-links .nav-link` (768px MQ) | `color: rgba(11,26,56,0.60)` | `color: rgba(255,255,255,0.82)` |

---

## Phase 3 — Card System Refactor

### 3.1 Flexible Card Pattern

```css
.stat-card  { width: auto; min-width: 150px; flex: 1 1 160px }
.value-card { width: auto; min-width: 220px; flex: 1 1 240px }
.perk-card  { width: auto; min-width: 260px; flex: 1 1 280px }
.team-card  { width: auto; min-width: 260px; flex: 1 1 280px }
```

### 3.2 Grid Systems → auto-fit/minmax

```css
.landing-sections .services-image-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(280px, 100%), 1fr));
}
.testimonials-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(320px, 100%), 1fr));
}
.contactv2-info-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(300px, 100%), 1fr));
}
.services-awards-grid {
  grid-template-columns: repeat(auto-fit, minmax(min(240px, 100%), 1fr));
}
```

---

## Phase 4 — Container & Footer Grid Fix

### 4.1 Nav/Footer Logo

```css
.nav-logo { width: clamp(180px, 30vw, 340px); height: auto; min-height: 56px; }
```

### 4.2 Footer Grid Safe Minimums

```css
.footer-inner {
  grid-template-columns: minmax(min(280px, 100%), 1.45fr) minmax(120px, 0.8fr) minmax(120px, 0.8fr) minmax(180px, 1fr);
}
```

### 4.3 Newsletter Form → Fluid

```css
.services-newsletter-form { grid-template-columns: 1fr auto 1fr; }
@media (max-width: 768px) { .services-newsletter-form { grid-template-columns: 1fr; } }
```

---

## Phase 5 — Structured Responsive Media Queries

Organized by breakpoint, desktop-first. Supplements existing queries.

```css
/* ═══════════════════════════════════════════════
   RESPONSIVE DESIGN SYSTEM
   ═══════════════════════════════════════════════ */

/* ── 1200px (Small Desktop) ────────── */
@media (max-width: 1200px) { ... }

/* ── 991px (Tablet Portrait) ───────── */
@media (max-width: 991px) { ... }

/* ── 768px (Mobile Landscape) ──────── */
@media (max-width: 768px) { ... }

/* ── 580px (Small Mobile) ──────────── */
@media (max-width: 580px) { ... }

/* ── 480px (Extra Small) ───────────── */
@media (max-width: 480px) { ... }
```

---

## Phase 6 — Overflow Safety

```css
.hero, .phase-section, .landing-sections, .site-footer {
  overflow-x: clip;
}
img, video, svg { max-width: 100%; height: auto; }
```

---

## Phase 7 — Typography Consistency

Convert remaining fixed font sizes to `clamp()`:

| Selector | Current | Fix |
|---|---|---|
| `.phase-title` | `56px` | `clamp(2rem, 5vw, 3.5rem)` |
| `.growth-title` | `68px` | `clamp(2rem, 6vw, 4.25rem)` |
| `.page-hero-title` | `56px` | `clamp(2rem, 5vw, 3.5rem)` |
| `.section-title` | `40px` | `clamp(1.75rem, 4vw, 2.5rem)` |

---

## Phase 8 — Responsive Animations & Inline-Style Overrides

> [!IMPORTANT]  
> This is the critical new phase. The `HomePage.jsx` renders 7 major sections with **entirely inline styles** — fixed paddings, fixed font sizes, rigid grid columns. These are invisible to CSS media queries unless overridden with `!important`. Additionally, GSAP animations use fixed scatter distances and the scrollytelling section uses a side-by-side layout that doesn't stack on mobile.

### 8A. Scrollytelling Section — Responsive Layout

**Problem**: The scrollytelling section (`ScrollytellingSection`) uses inline `width: '50%'` for both logo and text columns, `height: '400px'` on text content, `padding: '0 40px'`, and `fontSize: '42px'` on phase titles. On mobile, logo and text must stack vertically.

**Fix (CSS overrides in index.css)**:
```css
/* ── Scrollytelling responsive ─────────── */
@media (max-width: 768px) {
  .scrolly-section > div {  /* .hero-content wrapper */
    flex-direction: column !important;
    padding: 0 20px !important;
    gap: 20px !important;
  }
  .scrolly-section .logo-container {
    width: 100% !important;
    max-width: 280px !important;
    margin: 0 auto !important;
  }
  .scrolly-section .hero-text-content {
    width: 100% !important;
    height: auto !important;
    min-height: 300px !important;
  }
  .scrolly-section .phase-title {
    font-size: clamp(1.5rem, 6vw, 2rem) !important;
  }
  .scrolly-section .detail-text {
    font-size: 14px !important;
  }
}
```

**Fix (GSAP matchMedia in HomePage.jsx)**:

Wrap the ScrollTrigger timeline creation in `gsap.matchMedia()` to adjust the `end` scroll distance on mobile:

```js
// BEFORE:
const scrollTl = gsap.timeline({
  scrollTrigger: {
    end: '+=1800',
    ...
  }
});

// AFTER:
const mm = gsap.matchMedia();
mm.add("(min-width: 769px)", () => {
  // Desktop: full scroll distance
  const scrollTl = gsap.timeline({
    scrollTrigger: { end: '+=1800', ... }
  });
  // ... existing timeline code
});
mm.add("(max-width: 768px)", () => {
  // Mobile: shorter scroll distance for faster phase transitions
  const scrollTl = gsap.timeline({
    scrollTrigger: { end: '+=1200', ... }
  });
  // ... same timeline code
});
```

### 8B. Hero Animation — Adaptive Scatter Values

**Problem**: Logo parts scatter from `x: ±1200, y: -800/+1500` with `scale: 8`. On a 360px phone, the parts fly way off-screen which wastes animation time and can cause GPU memory pressure.

**Fix (GSAP matchMedia)**:

```js
// In HeroSection useLayoutEffect:
const mm = gsap.matchMedia();

mm.add("(min-width: 769px)", () => {
  // Desktop: big cinematic scatter
  gsap.set('.logo-part-l', { x: -1200, y: -800, rotation: -180, scale: 8, opacity: 0, filter: "blur(24px)" });
  gsap.set('.logo-part-e', { x: 0, y: 1500, rotation: 180, scale: 8, opacity: 0, filter: "blur(24px)" });
  gsap.set('.logo-part-s', { x: 1200, y: -800, rotation: 270, scale: 8, opacity: 0, filter: "blur(24px)" });
  // ... rest of timeline identical
});

mm.add("(max-width: 768px)", () => {
  // Mobile: reduced scatter, smaller scale, less blur for perf
  gsap.set('.logo-part-l', { x: -400, y: -300, rotation: -90, scale: 4, opacity: 0, filter: "blur(12px)" });
  gsap.set('.logo-part-e', { x: 0, y: 500, rotation: 90, scale: 4, opacity: 0, filter: "blur(12px)" });
  gsap.set('.logo-part-s', { x: 400, y: -300, rotation: 135, scale: 4, opacity: 0, filter: "blur(12px)" });
  // ... rest of timeline identical (converges to x:0, y:0 regardless)
});
```

> [!NOTE]
> The convergence animation (`.to` with `x:0, y:0, scale:1`) is identical at all sizes — only the starting positions change. This means the visual effect is preserved while reducing GPU workload on mobile.

### 8C. CSS Animations — Responsive Sizing

**Problem**: Breathing rings have fixed `400px/300px/220px` sizes. On small screens they overflow the hero container.

**Fix (index.css)**:
```css
.ring-outer { width: min(400px, 80vw); height: min(400px, 80vw); }
.ring-mid   { width: min(300px, 60vw); height: min(300px, 60vw); }
.ring-inner { width: min(220px, 44vw); height: min(220px, 44vw); }
```

The `@keyframes breathe`, `float`, `scrollPulse`, `greenPulse`, `fadeInUp`, `dropIn`, `menuItemIn`, and `marquee` animations are **already responsive** — they use relative transforms (scale, small translateY values, percentage-based) and do not need changes.

The route loader animations in `style.css` (`routeLoaderFloat`, `routeLoaderCore`, `routeLoaderPieceLeft/Right/Center`) use transform/opacity only and are **already responsive**.

### 8D. HomePage Inline-Style Overrides

**Problem**: 7 sections in `HomePage.jsx` use entirely inline React styles with fixed values. These cannot be overridden by normal CSS — only `!important` in media queries can win against inline styles.

**Sections requiring overrides:**

| Section | Fixed Padding | Fixed Font | Fixed Grid | Fix |
|---|---|---|---|---|
| `OurServicesSectionOne` | `140px 100px 80px` | `54px`, `64px` | `2-col` | Fluid padding, clamp fonts, stack on mobile |
| `BusinessImpactSection` | `100px 100px` | `clamp` ✓ | `2-col sticky` | Fluid padding, stack grid, unstick left col |
| `MeetOurLeadersSection` | `100px 100px 120px` | `54px` | `1fr 1.3fr` | Fluid padding, clamp font, stack |
| `OurServicesSectionTwo` | `0 60px` | `42px` | `3-col` | Fluid padding, stack grid |
| `OurBlogSection` | `120px 0` + `0 60px` | `54px` | `2-col` | Fluid padding, clamp font, stack |
| `WorksheetsSection` | `120px 0` + `0 60px` | `54px` | `3-col` | Fluid padding, clamp font, stack |
| Hero CTA button | `width: 260px; min-width: 260px` | — | — | `width: 100%` on mobile |

**Fix (CSS in index.css)**:
```css
/* ═══════════════════════════════════════════════
   HOMEPAGE INLINE-STYLE RESPONSIVE OVERRIDES
   ═══════════════════════════════════════════════ */

/* Target the landing-sections wrapper children */
@media (max-width: 991px) {
  /* OurServicesSectionOne */
  .landing-sections section.hp-services-1 {
    padding: 80px var(--container-gutter) 60px !important;
  }
  .landing-sections section.hp-services-1 > div:first-child {
    flex-direction: column !important;
    gap: 24px !important;
  }
  .landing-sections .hp-services-1 h2 {
    font-size: clamp(2rem, 5vw, 3rem) !important;
  }

  /* BusinessImpactSection */
  .landing-sections section.hp-impact {
    padding: 60px var(--container-gutter) !important;
  }
  .landing-sections section.hp-impact > div:last-child {
    grid-template-columns: 1fr !important;
    gap: 32px !important;
  }
  .landing-sections section.hp-impact > div:last-child > div:first-child {
    position: static !important;
  }

  /* MeetOurLeadersSection */
  .landing-sections section.hp-leaders {
    padding: 60px var(--container-gutter) 80px !important;
  }
  .landing-sections section.hp-leaders > div {
    grid-template-columns: 1fr !important;
    gap: 40px !important;
  }
  .landing-sections .hp-leaders h2 {
    font-size: clamp(2rem, 5vw, 3rem) !important;
  }

  /* OurServicesSectionTwo */
  .landing-sections section.hp-services-2 > div > div {
    grid-template-columns: 1fr 1fr !important;
  }
  .landing-sections section.hp-services-2 > div {
    padding: 0 var(--container-gutter) !important;
  }

  /* OurBlogSection */
  .landing-sections section.hp-blog > div {
    padding: 0 var(--container-gutter) !important;
  }
  .landing-sections .hp-blog h2 {
    font-size: clamp(2rem, 5vw, 3rem) !important;
  }

  /* WorksheetsSection */
  .landing-sections section.hp-worksheets > div {
    padding: 0 var(--container-gutter) !important;
  }
  .landing-sections .hp-worksheets h2 {
    font-size: clamp(2rem, 5vw, 3rem) !important;
  }
}

@media (max-width: 768px) {
  /* Service cards stack */
  .landing-sections .hp-services-1 .service-cards-grid {
    grid-template-columns: 1fr !important;
  }
  /* Card title font */
  .landing-sections .hp-services-1 .service-title-card {
    font-size: clamp(2rem, 8vw, 3rem) !important;
  }

  /* Bento grid → stacked */
  .landing-sections section.hp-services-2 > div > div {
    grid-template-columns: 1fr !important;
  }
  .landing-sections section.hp-services-2 > div > div > div:last-child {
    grid-row: auto !important;  /* un-span the graph card */
  }

  /* Blog → 1 col */
  .landing-sections .hp-blog .blog-cards-grid {
    grid-template-columns: 1fr !important;
  }
  .landing-sections .hp-blog .blog-header {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  /* Worksheets → 1 col */
  .landing-sections .hp-worksheets .worksheets-cards-grid {
    grid-template-columns: 1fr !important;
  }
  .landing-sections .hp-worksheets .worksheets-header {
    flex-direction: column !important;
    align-items: flex-start !important;
  }

  /* Impact section: left column unstick, reduce min-height */
  .landing-sections section.hp-impact > div:last-child > div:last-child {
    padding-left: 0 !important;
  }
  .landing-sections section.hp-impact .story-article {
    padding: 24px 20px !important;
  }

  /* Leaders portrait grid → 1 col on small mobile */
  .landing-sections .hp-leaders .portrait-grid {
    grid-template-columns: 1fr !important;
  }

  /* Hero CTA full-width */
  .hero-cta-primary {
    width: 100% !important;
    min-width: 0 !important;
  }

  /* Section padding reduction */
  .landing-sections section.hp-services-1 {
    padding: 60px 20px 48px !important;
  }
  .landing-sections section.hp-impact {
    padding: 48px 20px !important;
  }
  .landing-sections section.hp-leaders {
    padding: 48px 20px 60px !important;
  }
  .landing-sections section.hp-blog {
    padding: 80px 0 !important;
  }
  .landing-sections section.hp-worksheets {
    padding: 80px 0 !important;
  }
}

@media (max-width: 480px) {
  .landing-sections .hp-services-1 h2 {
    font-size: clamp(1.6rem, 8vw, 2.2rem) !important;
  }
  .landing-sections .hp-leaders h2 {
    font-size: clamp(1.6rem, 8vw, 2.2rem) !important;
  }
  .landing-sections .hp-blog h2,
  .landing-sections .hp-worksheets h2 {
    font-size: clamp(1.6rem, 8vw, 2.2rem) !important;
  }
}
```

### 8E. Minimal JSX className Additions

To make the CSS overrides in Phase 8D targetable, we add `className` attributes to 7 sections in `HomePage.jsx`. **Zero logic changes, zero animation changes — only adding a class string.**

| Component | Line | Change |
|---|---|---|
| `OurServicesSectionOne` | 460 | Add `className="hp-services-1"` to `<section>` |
| `OurServicesSectionOne` | 509 | Add `className="service-cards-grid"` to cards grid `<div>` |
| `BusinessImpactSection` | 642 | Add `className="hp-impact"` to `<section>` |
| `MeetOurLeadersSection` | 805 | Add `className="hp-leaders"` to `<section>` |
| `MeetOurLeadersSection` | 883 | Add `className="portrait-grid"` to portrait grid `<div>` |
| `OurServicesSectionTwo` | 922 | Add `className="hp-services-2"` to `<section>` |
| `OurBlogSection` | 1131 | Add `className="hp-blog"` to `<section>` |
| `OurBlogSection` | 1135 | Add `className="blog-header"` to header `<div>` |
| `OurBlogSection` | 1187 | Add `className="blog-cards-grid"` to cards grid `<div>` |
| `WorksheetsSection` | 1266 | Add `className="hp-worksheets"` to `<section>` |
| `WorksheetsSection` | 1270 | Add `className="worksheets-header"` to header `<div>` |
| `WorksheetsSection` | 1322 | Add `className="worksheets-cards-grid"` to cards grid `<div>` |

Example of the change (NO logic affected):
```diff
-  <section style={{ padding: '140px 100px 80px' }}>
+  <section className="hp-services-1" style={{ padding: '140px 100px 80px' }}>
```

> [!WARNING]
> The inline styles remain on desktop (they still work perfectly at 1440px+). The CSS `!important` rules only activate inside media queries, so desktop layout is 100% untouched.

---

## Files Modified Summary

### [MODIFY] [index.css](file:///c:/Users/ayush/Desktop/LinealEdge-main/src/index.css)
- ~40 inline property fixes (Phases 2-4)
- ~6 new grid auto-fit rules (Phase 3.2)
- ~120 lines structured responsive block (Phase 5)
- ~10 lines overflow safety + image fluid (Phase 6)
- ~15 lines fluid typography fixes (Phase 7)
- ~3 lines breathing ring fluid sizes (Phase 8C)
- ~100 lines HomePage inline-style overrides (Phase 8D)
- ~15 lines scrollytelling responsive layout (Phase 8A)

### [MODIFY] [style.css](file:///c:/Users/ayush/Desktop/LinealEdge-main/src/style.css)
- pulse-section padding → fluid
- bar-container height → auto
- container consistency layer → fluid gutters
- testimonials grid → auto-fit

### [MODIFY] [HomePage.jsx](file:///c:/Users/ayush/Desktop/LinealEdge-main/src/pages/HomePage.jsx)
- 12 lines: Add `className` attributes to section elements (Phase 8E)
- HeroSection: Wrap GSAP scatter values in `matchMedia()` (Phase 8B)
- ScrollytellingSection: Wrap ScrollTrigger in `matchMedia()` for shorter scroll distance on mobile (Phase 8A)

### No changes to:
- Other `.jsx` component files
- Route loader, Navbar, Footer component logic
- Color palette, fonts, design tokens (only additions)
- Existing working breakpoints

---

## Animation Responsiveness Summary

| Animation | Type | Status | Fix |
|---|---|---|---|
| Hero logo scatter (GSAP) | JS | ⚠️ Fixed px | **matchMedia** — reduced distances/scale on mobile |
| Hero logo shift x:-31vw (GSAP) | JS | ✅ Already vw-based | No change |
| Scrollytelling scroll-scrub (GSAP) | JS | ⚠️ Fixed end distance | **matchMedia** — shorter `+=1200` on mobile |
| Scrollytelling text transitions (GSAP) | JS | ✅ Relative y/opacity | No change |
| Phase visual slide-in (GSAP) | JS | ✅ Small px translateX | No change |
| Growth section entrance (GSAP) | JS | ✅ Relative y/scale | No change |
| Business impact progress bar (GSAP) | JS | ✅ scaleY percentage | No change |
| CTA section entrance (GSAP) | JS | ✅ Small y + opacity | No change |
| TrustBar badges (GSAP) | JS | ✅ Small y + opacity | No change |
| Logo float (GSAP infinite) | JS | ✅ Small y:-10 | No change |
| `@keyframes breathe` | CSS | ✅ scale-based | No change |
| `@keyframes float` | CSS | ✅ small px | No change |
| `@keyframes scrollPulse` | CSS | ✅ scale-based | No change |
| `@keyframes greenPulse` | CSS | ✅ scale-based | No change |
| `@keyframes fadeInUp` | CSS | ✅ transform-based | No change |
| `@keyframes marquee` | CSS | ✅ percentage-based | No change |
| Route loader animations | CSS | ✅ transform/opacity | No change |
| Breathing rings | CSS | ⚠️ Fixed 400/300/220px | **min()** — fluid with vw cap |
| Data lines | CSS | ⚠️ Fixed 940px width | **width: 100%** (Phase 2) |
| Navbar glass transition | CSS/JS | ✅ opacity-based | No change |

---

## Verification Plan

### Build
```bash
npm run build   # Must exit 0
```

### Visual Testing (browser subagent)

| Viewport | Pages | Check for |
|---|---|---|
| 375px | Home, About, Contact | Scrollytelling stacks, cards 1-col, no overflow |
| 428px | Services, Careers | Images fluid, CTA full-width |
| 768px | Home, Services, About | Grids 2-col, hero animation plays, scrollytelling stacks |
| 1024px | Home, Contact | Transition between layouts |
| 1440px | All pages | Zero regressions |

### Animation Regression Checklist
- [ ] Hero logo scatter plays and converges correctly at all sizes
- [ ] Scrollytelling phases transition smoothly on scroll at 375px
- [ ] KPI card renders in hero at 768px
- [ ] Phase section slide-in animations work
- [ ] CTA section entrance animation works
- [ ] Route loader still animates
- [ ] Breathing rings visible and breathing on mobile
- [ ] No horizontal scrollbar at any viewport

---

> [!IMPORTANT]
> **Safety guarantee**: Every CSS change is an additive `@media` rule or targeted property swap. JSX changes are limited to adding `className` strings (no logic changes). GSAP changes use `matchMedia()` which is an official GSAP 3 pattern — the desktop code path remains identical. All existing selectors, animations, and design tokens are preserved.
