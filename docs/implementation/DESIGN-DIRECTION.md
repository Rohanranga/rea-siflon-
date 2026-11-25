---
name: design-direction
description: Comprehensive new design direction document for Siflon Group website redesign reconsidering all major UI/UX areas
metadata:
  type: project
---

# Siflon Group Website — New Design Direction

**Project**: `siflon-group-website-new`  
**Date**: 2026-11-22  
**Status**: **COMPLETED — STEP 3 of 6**  
**Prerequisites**: 
- STEP 1: Study all reference data ✅
- STEP 2: `COMPETITOR-DESIGN-ANALYSIS.md` ✅ (identifies strongest patterns from Pfizer, Cipla, Dr. Reddy's, Sun Pharma, Reliance)

---

## 1. Design Philosophy & Strategic Intent

### 1.1 Core Positioning Statement

> **"One Group. Diverse Expertise. Industrial Scale."**

Siflon Group is not a pure-play pharmaceutical company — it is a **diversified industrial conglomerate** spanning pharmaceuticals (APIs + formulations), specialty polymers, and infrastructure pipes. The design must communicate:
- **Credibility** in regulated pharma markets (GMP, FDA, WHO standards)
- **Engineering depth** in polymer science and pipe manufacturing
- **Operational scale** across 20+ export markets
- **Group coherence** across four distinct but related divisions

### 1.2 Design Principles (Derived from Competitor Analysis)

| Principle | Source | Application |
|-----------|--------|-------------|
| **Clinical Precision Meets Industrial Strength** | Pfizer (clinical) + Reliance (industrial scale) | Color system: deep obsidian navy + clinical teal; typography: Manrope (editorial) + DM Sans (technical) |
| **Division-First Navigation** | Sun Pharma (5-col footer), Reliance (group nav bar) | Mega-menu with 4 division panels; 5-column footer; persistent "Our Businesses" access |
| **Capability Over Product** | Cipla (pipeline visualization), Dr. Reddy's (outcome-first) | Showcase manufacturing capabilities, certifications, export reach — not just product lists |
| **Stakeholder-Aware Entry Points** | Dr. Reddy's (3 pathways) | Four clear pathways: Pharma Partners, Industrial Buyers, Investors, Careers |
| **Glassmorphism as Material Metaphor** | Benchmark consensus (8/12 sites) | Layered surfaces, subtle glows, 300ms cubic-bezier transitions — suggests transparency, precision, modernity |
| **Motion as Feedback, Not Decoration** | All competitors | Staggered scroll reveals (500ms), hover lift (100ms), reduced-motion respected |

---

## 2. Color System — Tokens Upgrade

### 2.1 New Token Palette (to replace `app/globals.css` line 4)

```css
:root {
  /* Core Brand */
  --navy: #0B192C;           /* Deep obsidian — primary brand, headers, hero bg */
  --navy-2: #11223A;         /* Slightly lighter — card surfaces, hover states */
  --navy-3: #1A2E4A;         /* Mid — borders, dividers, disabled states */
  
  --logo-blue: #008DDA;      /* Clinical teal — primary CTAs, active states, key accents */
  --logo-blue-hover: #007BC4; /* Hover state for primary buttons */
  --logo-blue-light: #E8F5FC; /* 10% tint — badge backgrounds, subtle highlights */
  
  --cyan: #41C9E2;           /* Bright teal — secondary accents, focus rings, glow effects */
  --cyan-muted: #A8E6F4;     /* 30% tint — subtle borders, hover overlays */
  
  /* Neutrals */
  --paper: #F4F6F8;          /* Section backgrounds, card surfaces */
  --paper-elevated: #FFFFFF; /* Elevated cards, modals, dropdowns */
  --white: #FFFFFF;
  --muted: #647482;          /* Body copy secondary, meta text */
  --muted-strong: #4A5A6A;   /* Body copy primary */
  --line: #DCE3E8;           /* Borders, dividers, input outlines */
  --line-strong: #B8C5D1;    /* Stronger borders, focus states */
  
  /* Semantic */
  --success: #0D9488;        /* Verified badges, positive states */
  --success-light: #CCFBF1;
  --warning: #D97706;        /* Pending badges, attention states */
  --warning-light: #FEF3C7;
  --error: #DC2626;          /* Error states */
  --error-light: #FEE2E2;
}
```

### 2.2 Color Application Map

| UI Element | Token | Usage Notes |
|------------|-------|-------------|
| Page background | `--white` | Default |
| Section alternate bg | `--paper` | `.business-section`, `.capabilities-section` |
| Hero background | `--navy` | With gradient overlay |
| Primary CTA buttons | `--logo-blue` bg, `--white` text | `.primary-button`, `.header-cta` |
| Primary CTA hover | `--logo-blue-hover` bg | |
| Secondary CTA buttons | `--white` bg, `--navy` text, `--line` border | `.secondary-button` |
| Secondary CTA hover | `--navy-2` bg | |
| Headings (h1-h3) | `--navy` | Manrope font |
| Body text | `--muted-strong` | DM Sans |
| Meta/small text | `--muted` | |
| Links (default) | `--logo-blue` | |
| Links (hover) | `--navy` | |
| Focus ring | `--cyan` | 3px offset, `box-shadow: 0 0 0 3px var(--cyan)` |
| Card borders | `--line` | Default |
| Card hover border | `--cyan` | With subtle glow |
| Verified badge | `--success` bg, `--success-light` text | `.verified-badge` |
| Pending badge | `--warning` bg, `--warning-light` text | `.pending-badge` |
| Glassmorphism surfaces | `rgba(255,255,255,0.85)` + `backdrop-filter: blur(16px)` | Header, dropdowns, modals |

---

## 3. Typography System

### 3.1 Font Stack (Unchanged — Already Correct)

```css
/* Headings: Manrope — editorial, modern, geometric */
--font-display: "Manrope", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Body: DM Sans — technical, readable, neutral */
--font-body: "DM Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;

/* Mono: for data, codes, technical specs */
--font-mono: "JetBrains Mono", "Fira Code", monospace;
```

### 3.2 Type Scale (Clamp-based, Fluid)

| Element | Desktop (1440px) | Tablet (768px) | Mobile (375px) | Font | Weight | Line Height | Letter Spacing |
|---------|------------------|----------------|----------------|------|--------|-------------|----------------|
| Hero H1 | `clamp(56px, 5.5vw, 72px)` | `clamp(48px, 6vw, 64px)` | `clamp(40px, 8vw, 56px)` | Manrope | 600 | 1.05 | -2.5px to -3px |
| Section H2 | `clamp(38px, 4.5vw, 58px)` | `clamp(34px, 5vw, 48px)` | `clamp(30px, 6vw, 40px)` | Manrope | 600 | 1.12 | -1.5px to -2px |
| Card H3 | `clamp(22px, 2.5vw, 28px)` | `clamp(20px, 3vw, 24px)` | `clamp(18px, 4vw, 22px)` | Manrope | 600 | 1.2 | -0.5px |
| Body LG | 16px | 16px | 15px | DM Sans | 400 | 1.8 | 0 |
| Body MD | 15px | 15px | 14px | DM Sans | 400 | 1.75 | 0 |
| Body SM | 13px | 13px | 12px | DM Sans | 500 | 1.6 | 0.5px |
| Caption/Label | 11px | 11px | 10px | DM Sans | 600 | 1.5 | 1.2px (uppercase) |
| Button | 12px | 12px | 12px | Manrope | 700 | 1 | 1px (uppercase) |

### 3.3 Editorial Treatment

- **Kicker/Eyebrow**: 10px, uppercase, tracking 2.2px, `--blue` (`#477A9E`) — introduces sections
- **Highlight/Emphasis**: `em` in headings → `--cyan` (`#41C9E2`) not italic
- **Numbers/Metrics**: Manrope 700, tabular-nums, `--logo-blue`

---

## 4. Spacing & Layout System

### 4.1 Base Unit: 8px Scale

```css
--space-1: 4px;   --space-2: 8px;   --space-3: 12px;  --space-4: 16px;
--space-5: 24px;  --space-6: 32px;  --space-7: 48px;  --space-8: 64px;
--space-9: 96px;  --space-10: 128px;
```

### 4.2 Container & Grid

| Breakpoint | Container Max | Side Padding | Grid Columns |
|------------|---------------|--------------|--------------|
| Desktop (≥1440px) | 1440px | 10% (144px) | 12 |
| Desktop (≥1200px) | 1200px | 8% (96px) | 12 |
| Tablet (768-1199px) | 100% | 6% (48px) | 8 |
| Mobile (375-767px) | 100% | 5% (20px) | 4 |

### 4.3 Section Vertical Rhythm

| Section Type | Padding Top | Padding Bottom | Gap Between Elements |
|--------------|-------------|----------------|---------------------|
| Hero | — (fixed height) | — | — |
| Major (intro, capabilities, story) | 96px (`--space-9`) | 96px | 48px (`--space-7`) |
| Standard (business, gallery, contact) | 72px | 72px | 32px (`--space-6`) |
| Compact (footer, thin slices) | 48px | 48px | 24px (`--space-5`) |

---

## 5. Component Design Specifications

### 5.1 Header & Navigation (`site-header.tsx`, `liquid-glass-navbar.tsx`)

#### 5.1.1 Header States

```css
/* Default (top of page) */
.site-header {
  height: 90px;
  background: transparent;
  border-bottom: none;
  transition: background 300ms var(--ease-out), 
              border-color 300ms var(--ease-out),
              box-shadow 300ms var(--ease-out);
}

/* Scrolled (>20px) */
.site-header.is-scrolled {
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--line);
  box-shadow: 0 4px 24px rgba(11, 25, 44, 0.08);
}
```

#### 5.1.2 Mega-Menu (4 Division Panels)

```
┌─────────────────────────────────────────────────────────────┐
│ OUR BUSINESSES                                              │
├──────────────┬──────────────┬──────────────┬──────────────┤
│ PHARMACEUTICALS        │ FORMULATIONS     │ POLYMERS       │ PIPES         │
│ ┌──────────────────┐   │ ┌────────────┐  │ ┌───────────┐  │ ┌─────────┐  │
│ │ APIs & Intermediates│ │ Oral Solids  │  │ Specialty   │  │ Pressure│  │
│ │ Custom Synthesis   │ │ Liquids      │  │ Polymers    │  │ Pipes   │  │
│ │ Analytical Services│ │ Injectables  │  │ Compounds   │  │ Ducting │  │
│ └──────────────────┘   │ └────────────┘  │ └───────────┘  │ └─────────┘  │
│ [View All Pharma →]    │ [View All →]    │ [View All →]   │ [View All →] │
└────────────────────────┴────────────────┴────────────────┴──────────────┘
```

**Interaction Spec:**
- Hover delay: 100ms (Dr. Reddy's pattern)
- Fade-in: 200ms `var(--ease-out)`
- Panel width: 280px each, max 4 panels
- Keyboard: `Tab` into panel, `Arrow keys` navigate, `Escape` closes

#### 5.1.3 Mobile Drawer (Enhanced)

- Full-screen on mobile (<640px)
- Keyboard trap when open (already implemented)
- `Escape` key closes (already implemented)
- Division list as accordion sections
- CTA button at bottom: "Contact Us"

---

### 5.2 Hero Section (`hero.tsx` — Complete Redesign)

#### 5.2.1 New Architecture: Static Industrial Photography Hero

**Rationale**: Competitor analysis shows static heroes with play-button video (Dr. Reddy's) or muted auto-play (Pfizer) both work. For Siflon:
- Industrial photography loads faster, performs better
- User controls video engagement (play on demand)
- Shows actual facilities — builds credibility

#### 5.2.2 Layout Structure

```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   [Kicker]     SIFLON GROUP                                     │
│   [H1]         One Group. Diverse Expertise.                    │
│   [Body]       Delivering pharmaceutical APIs, specialty        │
│                polymers, and infrastructure pipes to 20+        │
│                global markets from GMP-certified facilities.    │
│                                                                 │
│   ┌─────────────────────┐  ┌─────────────────────────────────┐ │
│   │ [Primary CTA]       │  │ [Secondary CTA]                 │ │
│   │ Explore Divisions   │  │ Our Companies ▼                 │ │
│   └─────────────────────┘  └─────────────────────────────────┘ │
│                                                                 │
│   ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐             │
│   │ PHARMA  │ │ POLYMERS│ │  PIPES  │ │  DRUGS  │             │
│   │  Verified│ │ Verified│ │ Pending │ │ Verified│             │
│   └─────────┘ └─────────┘ └─────────┘ └─────────┘             │
│                                                                 │
│   [Scroll indicator]                                            │
└─────────────────────────────────────────────────────────────────┘
```

#### 5.2.3 Hero Visual Treatment

- **Background**: Full-bleed industrial photography (facility aerial, cleanroom, extrusion line, pipe yard) — single image, not slider
- **Overlay**: `linear-gradient(90deg, rgba(11,25,44,0.85) 0%, rgba(11,25,44,0.45) 50%, rgba(11,25,44,0.1) 100%)`
- **Content**: Left-aligned, max-width 640px, 10% from left edge
- **Division Quick-Cards**: 4 cards, hover lift + `--cyan` border glow, link to `/businesses/[slug]`
- **Video**: Play button overlay (center-right) → opens modal with corporate video

#### 5.2.4 Responsive Behavior

| Viewport | Layout Change |
|----------|---------------|
| Desktop | Side-by-side CTAs, 4-card row |
| Tablet | Stacked CTAs, 2x2 card grid |
| Mobile | Stacked CTAs, single-column cards, H1 56px max |

---

### 5.3 Business Division Quick-Cards (Homepage)

#### 5.3.1 Card Spec

```
┌────────────────────────────────────────┐
│  🏭  PHARMACEUTICALS                    │
│  APIs, Formulations, Custom Synthesis  │
│  ────────────────────────────────────  │
│  ✓ GMP Certified  ✓ US FDA  ✓ 15+ Mkts │
│  [Explore Division →]                  │
└────────────────────────────────────────┘
```

**States:**
- Default: `--paper-elevated` bg, `--line` border, subtle shadow
- Hover: `transform: translateY(-4px)`, `--cyan` border, `box-shadow: 0 16px 48px rgba(0,141,218,0.12)`
- Focus: 3px `--cyan` focus ring
- Badge: Top-right — "Verified" (green) / "Pending" (amber)

---

### 5.4 Manufacturing Capabilities Showcase (Replaces Tilt Stack)

**Adapted from Cipla's pipeline visualization**

#### 5.4.1 Layout: 4-Card Grid with Horizontal Marquee Above

```
┌─────────────────────────────────────────────────────────────────┐
│ [Horizontal Marquee — auto-scroll, pause on hover]             │
│  GMP Certified  •  ISO 9001:2015  •  WHO-GMP  •  US FDA         │
│  EDQM Certified  •  20+ Export Markets  •  30+ Years Exp.      │
├─────────────┬─────────────┬─────────────┬─────────────┤
│  CLEANROOMS │   POLYMER   │  EXTRUSION  │    QC/      │
│  (Pharma)   │    LABS     │   LINES     │   ANALYTICAL│
│             │             │  (Pipes)    │             │
│  [Icon]     │  [Icon]     │  [Icon]     │  [Icon]     │
│  ISO Class  │  R&D Pilot  │  Multi-layer│  HPLC, GC,  │
│  7 & 8      │  Scale-up   │  Co-extrusion│  DSC, TGA  │
│             │             │             │             │
│  [Learn More] [Learn More] [Learn More] [Learn More]   │
└─────────────┴─────────────┴─────────────┴─────────────┘
```

**Marquee Spec:**
- Continuous left-to-right scroll (30s cycle)
- Pause on hover/focus
- Icons: check-circle in `--logo-blue`
- `prefers-reduced-motion`: static display, no scroll

**Card Spec:**
- Glassmorphism: `bg: rgba(255,255,255,0.85)`, `backdrop-filter: blur(16px)`
- Border: `--line` default, `--cyan` hover
- Hover: lift -4px, glow `0 20px 60px rgba(0,141,218,0.1)`
- Icon: 48px, `--logo-blue`
- CTA: Text link with arrow, `--logo-blue` → `--navy` hover

---

### 5.5 Business Division Pages (`/businesses/[slug]/page.tsx`)

#### 5.5.1 Page Template Structure

```
┌─────────────────────────────────────────────────────────────────┐
│ [Breadcrumb]  Home > Our Businesses > Pharmaceuticals          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Division Hero]                                                │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  PHARMACEUTICALS                    [Verified Badge]    │  │
│  │  Active Pharmaceutical Ingredients & Formulations       │  │
│  │  GMP • US FDA • WHO-GMP • EDQM • 15+ Export Markets     │  │
│  │                                                         │  │
│  │  [Explore Products]    [Technical Specs]    [Contact]   │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  [Capabilities Grid — 3 cards]                                 │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐                    │
│  │ APIs &    │ │ Formu-    │ │ Custom    │                    │
│  │ Intermed. │ │ lations   │ │ Synthesis │                    │
│  └───────────┘ └───────────┘ └───────────┘                    │
│                                                                 │
│  [Facilities Showcase — 2-col: image + specs]                  │
│  ┌─────────────────────┐ ┌─────────────────────────────────┐  │
│  │  [Facility Photo]   │ │  Ankleshwar Facility            │  │
│  │                     │ │  • 45,000 sq ft                 │  │
│  │                     │ │  • ISO Class 7/8 Cleanrooms     │  │
│  │                     │ │  • 12 Reaction Vessels          │  │
│  │                     │ │  • Dedicated Analytical Lab     │  │
│  │                     │ │  [View All Facilities →]        │  │
│  └─────────────────────┘ └─────────────────────────────────┘  │
│                                                                 │
│  [Responsible Manufacturing — NEW SECTION]                     │
│  ┌─────────────────────────────────────────────────────────┐  │
│  │  Sustainability & Compliance                            │  │
│  │  Zero liquid discharge • Solar 30% energy • Green chem  │  │
│  └─────────────────────────────────────────────────────────┘  │
│                                                                 │
│  [Related Divisions — Cross-link cards]                        │
└─────────────────────────────────────────────────────────────────┘
```

#### 5.5.2 Verified vs Pending States

| State | Badge | Hero Treatment | CTA Availability |
|-------|-------|----------------|------------------|
| Verified | Green `--success` | Full content, all CTAs active | All 3 CTAs |
| Pending | Amber `--warning` | Hero only, "Coming Soon" notice | Contact only |

---

### 5.6 Product Catalogue (`/products` — New Page)

**Adapted from Sun Pharma's tabbed division view**

#### 5.6.1 Tabbed Interface

```
┌─────────────────────────────────────────────────────────────────┐
│ PRODUCT CATALOGUE                              [Search/Filter]  │
├─────────────────────────────────────────────────────────────────┤
│  [ALL]  [PHARMA]  [FORMULATIONS]  [POLYMERS]  [PIPES]          │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  [Filter Bar]  Grade: [All ▼]  |  Application: [All ▼]        │
│                Certification: [All ▼]  |  Market: [All ▼]      │
│                                                                 │
│  ┌────────────┐ ┌────────────┐ ┌────────────┐ ┌────────────┐  │
│  │  PRODUCT   │ │  PRODUCT   │ │  PRODUCT   │ │  PRODUCT   │  │
│  │  CARD      │ │  CARD      │ │  CARD      │ │  CARD      │  │
│  │            │ │            │ │            │ │            │  │
│  │  [Badge]   │ │  [Badge]   │ │  [Badge]   │ │  [Badge]   │  │
│  │  Name      │ │  Name      │ │  Name      │ │  Name      │  │
│  │  Division  │ │  Division  │ │  Division  │ │  Division  │  │
│  │  Grade     │ │  Grade     │ │  Grade     │ │  Grade     │  │
│  │  [Specs]   │ │  [Specs]   │ │  [Specs]   │ │  [Specs]   │  │
│  └────────────┘ └────────────┘ └────────────┘ └────────────┘  │
│                                                                 │
│  [Load More / Pagination]                                       │
└─────────────────────────────────────────────────────────────────┘
```

#### 5.6.2 Filter Taxonomy (Siflon-Specific)

| Filter | Options |
|--------|---------|
| Division | All, Pharmaceuticals, Formulations, Polymers, Pipes |
| Grade | All, Pharma Grade (GMP), Industrial Grade, Food Contact, Export Compliant |
| Application | All, Human API, Veterinary, Packaging, Infrastructure, Automotive, Construction |
| Certification | All, US FDA, EDQM, WHO-GMP, ISO 9001, REACH, RoHS |
| Market | All, Domestic, US, EU, LATAM, APAC, MENA |

---

### 5.7 Corporate History & Leadership

**Adapted from Dr. Reddy's timeline + Reliance group narrative**

#### 5.7.1 Interactive Timeline

```
┌─────────────────────────────────────────────────────────────────┐
│ OUR JOURNEY                                                     │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  1994  ──●──────────────────────────────────────────────────   │
│        │  Founded as Siflon Polymers in Gujarat               │
│        │                                                       │
│  2003  ──●──────────────────────────────────────────────────   │
│        │  Pharma division launched: API manufacturing         │
│        │                                                       │
│  2010  ──●──────────────────────────────────────────────────   │
│        │  US FDA inspection passed — first facility           │
│        │                                                       │
│  2015  ──●──────────────────────────────────────────────────   │
│        │  Formulations facility commissioned                  │
│        │                                                       │
│  2020  ──●──────────────────────────────────────────────────   │
│        │  Pipes division acquired — infrastructure expansion  │
│        │                                                       │
│  2024  ──●──────────────────────────────────────────────────   │
│        │  30th Anniversary • 20+ Export Markets • 4 Divisions │
│                                                                 │
│  [Leadership Grid — 4 cards: Chairman, MD, Tech Director,     │
│   Quality Head — photo, name, role, LinkedIn link]            │
└─────────────────────────────────────────────────────────────────┘
```

**Interaction**: Scroll-triggered reveal (staggered 100ms per milestone), horizontal line connects dots

---

### 5.8 Gallery & Resources

#### 5.8.1 Gallery (Masonry Grid)

- Categories: Facilities, Manufacturing, Products, Team, Events
- Lightbox on click (keyboard navigable)
- Filter tabs + search
- `prefers-reduced-motion`: no zoom animation, instant swap

#### 5.8.2 Resources (Document Library)

- Table view: Document, Division, Type, Date, Download
- Types: Brochure, Certificate, MSDS, Technical Data Sheet, Regulatory Filing
- Filter by division + type
- Download tracking (analytics event)

---

### 5.9 Footer — 5-Column Architecture (Sun Pharma Pattern)

```
┌────────────────────────────────────────────────────────────────────────────┐
│ GROUP OVERVIEW           BUSINESS DIVISIONS      QUICK LINKS        CONTACT │
│ ───────────────────────   ────────────────────   ────────────────   ─────── │
│ About Siflon Group       Pharmaceuticals         Products           HQ:     │
│ Our Journey              Formulations            Certifications    Address  │
│ Leadership               Polymers                Resources         Phone    │
│ Responsible Mfg.         Pipes                   Careers           Email    │
│ Investors                Animal Health           Contact           Map Link │
│ Governance                                                           │
│ Media Center                                                         │
├────────────────────────────────────────────────────────────────────────────┤
│ © 2024 Siflon Group  |  Privacy Policy  |  Terms of Use  |  Cookie Policy  │
│  [LinkedIn] [Twitter] [YouTube]                                                    │
└────────────────────────────────────────────────────────────────────────────┘
```

**Column Content Details:**

| Column | Links (Priority Order) |
|--------|------------------------|
| Group Overview | About, Journey, Leadership, Responsible Manufacturing, Investors, Governance, Media |
| Business Divisions | Pharmaceuticals, Formulations, Polymers, Pipes, Animal Health |
| Quick Links | Products, Certifications, Resources, Careers, Contact |
| Contact | HQ Address, Phone, Email, Regional Offices, Inquiry Form Link |
| Explore Group | Subsidiaries, Joint Ventures, Partnerships, Suppliers |

---

### 5.10 Mobile Experience (375px Baseline)

| Component | Mobile Adaptation |
|-----------|-------------------|
| Header | Logo + hamburger only; CTA moves to drawer bottom |
| Mega-menu | Accordion in drawer; division panels stacked |
| Hero | Single column; H1 56px; stacked CTAs; card stack |
| Capabilities | Single column cards; marquee static (tap to scroll) |
| Division Pages | Hero stacked; facilities image above specs; timeline vertical |
| Product Catalogue | Tabs scroll horizontally; 1-col cards; filter drawer |
| Footer | 5 columns → 2 rows: [Group, Divisions] [Quick Links, Contact] + Explore full-width |
| Touch Targets | Minimum 48x48px; 8px gap between targets |
| Keyboard Trap | Mobile drawer (already implemented) |
| Escape Key | Closes drawer, modals, mega-menu (already implemented) |

---

## 6. Animation & Motion Specifications

### 6.1 Transition Tokens (Already in `globals.css` — Verify)

```css
--ease-out: cubic-bezier(0.2, 0.7, 0.2, 1);
--ease-in-out: cubic-bezier(0.4, 0, 0.2, 1);
--dur-fast: 180ms;
--dur-card: 300ms;
--dur-hero: 650ms;
```

### 6.2 Animation Inventory

| Animation | Trigger | Duration | Easing | Reduced Motion |
|-----------|---------|----------|--------|----------------|
| Header scroll transition | Scroll > 20px | 300ms | `--ease-out` | Instant |
| Mega-menu panel fade | Hover (100ms delay) | 200ms | `--ease-out` | Instant |
| Card hover lift | Hover/Focus | 200ms | `--ease-out` | None (static lift) |
| Card border glow | Hover/Focus | 200ms | `--ease-out` | None |
| Button hover transform | Hover | 150ms | `--ease-out` | None |
| Scroll reveal (sections) | IntersectionObserver | 500ms | `--ease-out` | Instant (visible) |
| Timeline milestone reveal | IntersectionObserver | 400ms stagger | `--ease-out` | Instant |
| Marquee scroll | Continuous | 30s cycle | Linear | Static display |
| Hero image Ken Burns | Mount | 8s | `--ease-in-out` | Static |
| Modal/overlay fade | Open/Close | 200ms | `--ease-out` | Instant |
| Focus ring | Focus-visible | 150ms | `--ease-out` | Instant |

### 6.3 Scroll Reveal Implementation (Framer Motion)

```tsx
// Section wrapper pattern
<motion.section
  initial={{ opacity: 0, y: 30 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.5, ease: [0.2, 0.7, 0.2, 1] }}
>
  {/* Section content */}
</motion.section>

// Staggered children
<motion.div
  initial="hidden"
  whileInView="visible"
  viewport={{ once: true }}
  variants={{
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  }}
>
  {children.map(child => (
    <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
      {child}
    </motion.div>
  ))}
</motion.div>
```

---

## 7. Accessibility Requirements (WCAG 2.2 AA)

### 7.1 Already Implemented (Verify Preservation)

- ✅ Keyboard trap in mobile drawer
- ✅ `Escape` key closes drawer, modals, mega-menu
- ✅ `:focus-visible` outlines on all interactive elements
- ✅ `prefers-reduced-motion` respected on transitions
- ✅ Semantic HTML structure (header, main, footer, nav, section)
- ✅ Alt text on all images
- ✅ ARIA labels on icon-only buttons

### 7.2 New Requirements for Redesign

| Requirement | Implementation |
|-------------|----------------|
| Color contrast | All text ≥ 4.5:1; UI elements ≥ 3:1; test new tokens |
| Focus order | Logical tab sequence; skip link to main content |
| Live regions | Marquee paused by default; `aria-live="polite"` for dynamic content |
| Touch targets | ≥ 48×48px; 8px spacing between adjacent targets |
| Form labels | All inputs have associated `<label>`; error messages via `aria-describedby` |
| Language | `lang="en"` on `<html>`; division names not translated |
| Zoom | Content functional at 200% zoom; no horizontal scroll at 320px |

---

## 8. Technical Implementation Plan

### 8.1 File Changes Required

| Priority | File | Changes |
|----------|------|---------|
| **P0** | `app/globals.css` | Replace line 4 tokens; add new semantic tokens; verify transitions |
| **P0** | `components/site-header.tsx` | Add scroll state (`is-scrolled`); enhance mega-menu to 4 panels |
| **P0** | `components/ui/liquid-glass-navbar.tsx` | Update glassmorphism styles; 4-panel mega-menu |
| **P0** | `components/hero.tsx` | Complete redesign: static photo hero, dual CTA, division quick-cards, video modal |
| **P0** | `app/page.tsx` | Restructure sections: Hero → Capabilities Showcase → Division Cards → Journey → Gallery → Resources → Footer |
| **P1** | `app/businesses/[slug]/page.tsx` | Enhanced template: capabilities grid, facilities showcase, responsible manufacturing section, related divisions |
| **P1** | `components/expanded-footer.tsx` | Restructure to 5-column layout |
| **P1** | `app/products/page.tsx` (NEW) | Tabbed catalogue with filters |
| **P2** | `app/journey/page.tsx` (NEW) | Interactive timeline + leadership grid |
| **P2** | `app/gallery/page.tsx` (ENHANCE) | Masonry + lightbox + filters |
| **P2** | `app/resources/page.tsx` (ENHANCE) | Document library table |
| **P2** | `components/business-selector-card.tsx` | Hover lift + glow + verified/pending badge |
| **P2** | `components/capability-card.tsx` (NEW) | Glassmorphism card for capabilities showcase |

### 8.2 New Assets Needed

| Asset | Source | Spec |
|-------|--------|------|
| Hero industrial photography | Siflon `public/media/` or new shoot | 1920×1080 min, 3:2 aspect, facility/cleanroom/extrusion/pipe yard |
| Division card icons | Custom SVG | 48×48px, `--logo-blue`, consistent style |
| Capability icons | Custom SVG | 48×48px, `--logo-blue` |
| Facility photos | Siflon `public/media/` | 800×600 min, 4:3 aspect |
| Leadership photos | Siflon `public/media/` | 400×400, 1:1 aspect |
| Certificates/badges | Siflon `public/media/` | SVG preferred, `--logo-blue` mono |

---

## 9. Quality Gates & Verification

### 9.1 Build Health (Must Pass Before Visual Verification)

- [ ] TypeScript compilation: `tsc --noEmit` — zero errors
- [ ] ESLint: `npm run lint` — zero warnings/errors
- [ ] Next.js build: `npm run build` — successful static generation
- [ ] Dev server: `npm run dev` — no console errors

### 9.2 Visual Verification (STEP 5)

| Viewport | Pages to Capture | Comparison Targets |
|----------|------------------|-------------------|
| 1440px | `/`, `/businesses/siflon-pharma`, `/businesses/siflon-polymers`, `/products`, `/journey`, `/gallery` | Original `siflon-phase2-design-system` + competitor screenshots |
| 768px | Same pages | Same |
| 375px | Same pages | Same |

### 9.3 Accessibility Audit

- [ ] axe-core automated scan: zero violations
- [ ] Keyboard navigation: full site traversable
- [ ] Screen reader: NVDA/VoiceOver spot check
- [ ] Color contrast: all tokens verified via tool
- [ ] Reduced motion: all animations disabled

---

## 10. Rollback & Safety

- **Branch**: All changes on `redesign-2026` branch (not `main`)
- **No commits to `main`** until STEP 6 final report approved
- **Original files preserved**: `siflon-phase2-design-system` untouched
- **Dev server**: Runs on `localhost:3000` from `siflon-group-website-new` only

---

## 11. Next Steps

This document completes **STEP 3** of the 6-step redesign process.

**STEP 4**: Implement substantial redesign in `siflon-group-website-new` — starting with:
1. `app/globals.css` token upgrade (CRITICAL — currently shows original tokens)
2. `components/site-header.tsx` scroll state + mega-menu
3. `components/hero.tsx` complete redesign
4. `app/page.tsx` section restructuring
5. `components/expanded-footer.tsx` 5-column layout

**STEP 5**: Visual verification via browser capture at 1440px, 768px, 375px.

**STEP 6**: Create `docs/implementation/FINAL-VISUAL-REDESIGN-REPORT.md`.

---

*Design direction informed by `COMPETITOR-DESIGN-ANALYSIS.md` (Pfizer, Cipla, Dr. Reddy's, Sun Pharma, Reliance patterns) and `pharma-website-benchmark.md` (12-site benchmark). No proprietary assets, code, or branding from competitors used.*