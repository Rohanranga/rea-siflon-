# Phase 1 — Siflon Group Website Redesign Implementation Checklist

**Source specs:** `SIFLON-GROUP-CONSOLIDATED-DESIGN-STRATEGY.md`, `FINAL-SIFLON-WEBSITE-DESIGN-BLUEPRINT.md`
**Project:** `website/siflon-group-website-new` (Next.js 15 App Router, React 19, Tailwind 4)
**Status:** Phase 1 Step 1 (audit) complete. Ready for design-system work.

## Audit findings (current state)

- Stack: Next.js 15.1, React 19, TypeScript 5.7, Tailwind 4 (`@tailwindcss/postcss`), OpenNext/Cloudflare. Paths `@/*` -> `./*`.
- Routes present: `/`, `/businesses/[slug]` (4 divisions), `/products`, `/gallery`, `/resources`, `/components-demo`, `/sticky-footer-demo`, plus `api/`.
- Layout: `app/layout.tsx` renders `SiteHeader`, `main#main`, `ExpandedFooter`. Skip-to-main present. Header uses `LiquidNavbar` (glass) with only Home/Products/Gallery/Resources/Locations — does not reflect verified division structure or blueprint nav (About, Pharma, Drugs, Polymers, Pipes pending, Investors, Media, Careers, Contact).
- Homepage (`app/page.tsx`) is a single monolithic file with Hero, intro, BusinessTiltStack, IndustriesMarquee, ManufacturingGallery, StoryTimeline, ExhibitionGallery, PeopleGallery, capabilities, contact-band. Sections already reference verified facts; facility photos flagged as representative.
- Division pages (`app/businesses/[slug]/page.tsx`) already split verified vs pending and render products/services/facilities; Pipes correctly pending. Uses inline styles and ad-hoc classes.
- Styles: single `globals.css` (~629 lines) mixing design tokens, component classes, and responsive rules. Tokens are ad-hoc `--navy`, `--blue`, etc. No typography scale, spacing scale, or focus-ring tokens.
- Assets: `public/images/{facilities,cert-previews,clients,exhibitions,hero_candidate_*,products,siflon-*}`. Facility images are generic; must stay flagged as representative.

## Phase 1 execution plan

### Step 2 — Design system (establish first)
- [ ] Add design tokens to `globals.css` `:root`: colour (navy/blue/cyan/paper/charcoal/muted/line + dark-mode overrides), typography scale (Manrope display, DM Sans body), spacing scale (4/8/12/16/24/32/48/64/96), container max-widths, radius, shadows, motion durations/easings, focus-ring.
- [ ] Add `prefers-color-scheme: dark` token overrides guarded by `:root:not([data-theme="light"])` and `:root[data-theme="dark"]`.
- [ ] Establish shared utility classes: `.container`, `.section`, `.eyebrow`, `.btn-primary`, `.btn-secondary`, `.card`, `.focus-ring`, `.skip-link`.
- [ ] Document token usage in a short `docs/implementation/DESIGN-TOKENS.md`.

### Step 3 — Shared components (keyboard + focus)
- [ ] `SiteHeader` with desktop nav (7 items per strategy), mega-menu for divisions, mobile drawer with focus trap + Escape.
- [ ] `ExpandedFooter` 4-6 column nav + last-reviewed stamp.
- [ ] `Breadcrumb` component for sub-pages.
- [ ] `Hero` (reusable, with skip/alt/focus).
- [ ] `CtaBand`, `Container`, `Section`, `Card`, `StatBand`, `DivisionCard`.
- [ ] `PendingVerificationBadge` for Pipes.

### Step 4 — Homepage redesign (per blueprint wireframe)
- [ ] Hero with verified headline + CTA.
- [ ] Stat band: founded 1996, 60+ export countries, 350 MT/year, WHO-GMP.
- [ ] Division cards (4, Pipes marked pending).
- [ ] Manufacturing/facilities strip (representative flag).
- [ ] Story timeline.
- [ ] Contact band.

### Step 5 — Division pages (Pharma, Drugs, Polymers, Pipes)
- [ ] Pharma: verified hero, overview, products, services, facilities, quality standards, CTA.
- [ ] Drugs: same, plus API list.
- [ ] Polymers: same, plus lined-component range.
- [ ] Pipes: pending-verification state only; no invented details; "verification in progress" card.

### Step 6 — Verification (no commit/push/deploy)
- [ ] `npm run lint` passes.
- [ ] `npx tsc --noEmit` passes.
- [ ] `npm run build` passes.
- [ ] Routes `/`, `/businesses/siflon-pharma`, `/businesses/siflon-drugs`, `/businesses/siflon-polymers`, `/businesses/siflon-pipes` render.
- [ ] No console errors in dev.
- [ ] Responsive check at 1440 / 768 / 375.
- [ ] axe-core/Lighthouse accessibility pass (target 0 critical).
- [ ] Report any missing assets (facility photos, people photos, Pipes data).

## Constraints
- Do not modify research reports or final blueprint.
- Do not delete existing useful assets/functionality.
- Do not commit, push, or deploy.
- Pipes stays unverified until leadership confirms.
- No invented metrics/testimonials/facility photos.
