# Final Siflon Website Design Blueprint

**Scope:** Implementation blueprint for the Siflon Group public website, derived from the consolidated design strategy and the six verified competitor research reports. No website source files, stylesheets, assets, or configuration were modified. No packages installed. No commits, pushes, or deploys.

**Status:** Complete.

**Companion document:** `SIFLON-GROUP-CONSOLIDATED-DESIGN-STRATEGY.md`

---

## 1. Blueprint Overview

This blueprint is the implementation-ready specification for the Siflon Group public website. It defines information architecture, page templates, component inventory, content model, SEO/GEO specification, accessibility baseline, and a phased implementation roadmap. All content slots are populated only with verified Siflon facts; unverified items (notably the Pipes division) are explicitly flagged.

**Guiding principles:**
1. **Static HTML first.** No framework migration. Enhancements are additive.
2. **Verified facts only.** Every public claim links to a source; every number has a year.
3. **Accessibility as baseline.** WCAG 2.1 AA from day one.
4. **Progressive enhancement.** Pages work without JavaScript; JS adds convenience.
5. **No invented content.** Pipes division, brand tokens, and unverified statistics remain flagged.

---

## 2. Information Architecture

### 2.1 Sitemap (Verified Content Only)

```
/ (Home)
├── /about/
│   ├── /about/heritage/          (founded 1996)
│   ├── /about/leadership/        (Mr. R. Ananthaiah, MD)
│   ├── /about/quality/           (WHO-GMP certification)
│   └── /about/global-presence/   (60+ export countries)
├── /pharma/                      (Siflon Pharma Pvt Ltd)
│   ├── /pharma/products/         (animal healthcare products)
│   ├── /pharma/farm-animals/     (sheep, goat, cattle, swine)
│   ├── /pharma/facilities/       (Kothur, Telangana)
│   └── /pharma/vet-franchise/    (Siflon Vet Pharma)
├── /drugs/                       (Siflon Drugs)
│   ├── /drugs/veterinary-apis/   (API catalogue)
│   ├── /drugs/capacity/          (350 MT/year → 1000 MT)
│   ├── /drugs/facilities/        (Anantapur, Andhra Pradesh)
│   └── /drugs/formulations/      (Siflon Drugs & Pharmaceuticals)
├── /polymers/                    (Siflon Polymers)
│   ├── /polymers/ptfe/           (PTFE components)
│   ├── /polymers/applications/   (application areas)
│   └── /polymers/tds/            (technical data sheets)
├── /pipes/                       ⚠️ UNVERIFIED — confirm division exists
│   ├── /pipes/range/             ⚠️ UNVERIFIED
│   └── /pipes/applications/      ⚠️ UNVERIFIED
├── /investors/
│   └── /investors/ratings/       (ICRA rating reports)
├── /sustainability/
├── /careers/
├── /media/
│   └── /media/press-releases/    (when publishing begins)
└── /contact/
```

### 2.2 Navigation Specification

**Primary nav (7 items):** Home | About | Pharma | Drugs | Polymers | Investors | Contact
- Media and Careers folded into footer + About respectively to keep nav at 7 items.
- Pipes appears in nav only after division is verified.

**Footer (4 columns):**
1. Company (About, Quality, Global Presence, Sustainability)
2. Divisions (Pharma, Drugs, Polymers, Pipes [if verified])
3. Work with us (Careers, Contact, Partner with us)
4. Legal (Privacy, Terms, Cookie policy, Last-updated stamp)

**Breadcrumb:** Home > [Section] > [Page] on every page below root.

---

## 3. Page Templates

### 3.1 Homepage
Sections in order:
1. Header (logo + primary nav + search + region selector)
2. Hero band: H1 "Siflon Group" + promise line + 2 CTAs (Discover Siflon, Contact us)
3. Statistic band: 4 verified stats (Founded 1996, 60+ countries, 350 MT/year capacity, WHO-certified facilities)
4. Division cards: Pharma, Drugs, Polymers, Pipes (Pipes flagged UNVERIFIED)
5. Latest from Siflon: 3 press-release rows (when publishing begins)
6. Quality and certifications callout: WHO-GMP with link to certifications page
7. Footer

### 3.2 Division Landing
Sections in order:
1. Breadcrumb
2. Hero: H1 division name + lede (verified fact only) + hero image
3. Statistic band: division-specific verified stats only
4. Products: category cards (only verified categories)
5. Manufacturing and facilities: facility card with verified address, certification, capacity
6. Latest division news: 2 press-release rows
7. FAQ accordion: 5 questions max
8. Footer

### 3.3 Product Detail (Veterinary API appropriate)
Sections in order:
1. Breadcrumb
2. H1 product name + category | CAS number (if disclosed) | grade + image
3. Two-column: Overview (body copy) | Specifications (grade, manufactured at, capacity)
4. Quality and certification: WHO-GMP callout with certificate link
5. For customers: TDS link, MSDS link, enquiry form
6. Related products: 3 cards
7. Export destinations: country chips (60+ verified)
8. Footer

### 3.4 Contact Page
Sections in order:
1. H1 "Contact Siflon Group" + lede
2. By purpose: 5 cards (General enquiry, Exports, Careers, Partner with us, Adverse event reporting)
3. Registered office: Plot No.76-77, Phase-1, Mythrinagar, Madinaguda, Hyderabad-500050; email info@siflonpharma.com; phone +91 9618828282
4. Manufacturing sites: Anantapur (Drugs), Kothur (Pharma)
5. Contact form: Name, Email, Division, Purpose, Message, Consent
6. Footer

### 3.5 Careers Landing
Sections in order:
1. H1 "Build a career across Siflon Group" + promise paragraph (verified scope only)
2. Our employee promise: 3 pillars (defined with HR; do not invent)
3. Open roles: filter (Division | Function | Location) + job rows; if no openings, expression-of-interest form
4. Anti-scam notice: Siflon never asks for payment during recruitment
5. Footer

### 3.6 Facility Detail
Sections in order:
1. Breadcrumb
2. H1 facility name + location
3. Address, certifications (WHO-GMP), capacity, products manufactured
4. Place schema with verified address
5. Footer

---

## 4. Component Inventory

All components are structural HTML patterns. Visual styling deferred to brand-identity audit. No specific hex values, font families, or motion timings specified.

| Component | Variants | Implementation note |
| :--- | :--- | :--- |
| Global header | Default, scrolled, mobile-collapsed | Server-side include; vanilla JS for mobile toggle |
| Mega-menu | Single-column dropdown | CSS hover + ARIA expanded; no framework |
| Breadcrumb | Text-only with separators | Hand-coded or SSI per template |
| Footer | Default, minimal-legal | Server-side include |
| Hero band | Promise-led, division-led, stat-led | CSS grid |
| Statistic block | Default, compact, hero | `<strong>` + `<span>` pattern |
| Category card | Icon-led, image-led, divider | CSS grid; inline SVG icons |
| Facility card | Default, with certifications | Image + address + bullet list |
| Press release row | Default, featured | HTML table or semantic `<ul>` |
| Cookie consent bar | Bottom-anchored | Vanilla JS; localStorage; respects Do Not Track |
| Contact form | Default, division-specific | Static HTML + Formspree/Basin handler |
| Job application form | Single-page, multi-step | Static HTML + multi-step JS or separate pages |
| FAQ accordion | Default, with schema | `<details>` + `<summary>` no-JS fallback |
| Last-updated stamp | Default | Per-template variable; auto-update on publish |

### 4.1 Component Contract: Statistic Block
- **Purpose:** Display one verified material fact about Siflon Group or a division.
- **Required slots:** numeral (string), label (string)
- **Optional slots:** unit, year, source, comparison value
- **Variants:** default (large numeral), compact (inline numeral + label), hero (numeral + label + supporting paragraph)
- **Accessibility:** Numeral in `<strong>`, label in `<span>`, combined aria-label; trend icon (if used) has aria-label
- **SEO/GEO:** Wrap in `<data value="...">` element; emit Dataset schema when grouped
- **Content rules:** Only verified statistics; cite source for each; year required for time-sensitive figures
- **Verified statistics available:** Founded 1996; 60+ export countries; 350 MT/year veterinary API capacity (expanding to 1000 MT); WHO-certified facilities; Siflon Drugs founded 1999; Siflon Pharma founded 2006

---

## 5. Technology Stack

### 5.1 Existing Stack (Verified)
- Static HTML pages with `.html` file extensions in URLs
- Internal links use query-string identifiers (id=N convention)
- No evidence of JavaScript framework (React, Vue, Angular, Next.js)
- Traditional server-rendered or static HTML

### 5.2 Recommended Stack (Additive Only)

| Layer | Existing (verified) | Recommendation | Migration risk |
| :--- | :--- | :--- | :--- |
| Page rendering | Static HTML with .html extensions | Keep static HTML; introduce build step (Eleventy or Astro in static-output mode) only if template reuse becomes painful | Low |
| URL pattern | .html extensions + id=N query strings | Migrate id=N URLs to descriptive slugs (.html retained) over 6-12 months via 301 redirects | Low |
| Styling | Not verified (CSS not exposed) | Audit existing CSS; consolidate to small token set without forcing Tailwind migration | Low |
| Component reuse | Likely server-side includes or copy-paste HTML | Introduce SSI or lightweight templating (PHP includes, Eleventy layouts) for header, footer, sidebar | Low |
| CMS | Not verified; sites appear hand-edited | Optional: flat-file CMS (Decap CMS, Statamic) for press releases and product updates only if content volume justifies | Medium |
| Search | Not observed on existing site | Add client-side search (Lunr.js or Pagefind) over generated JSON index; no server required | Low |
| Analytics | Not verified | Add Plausible or GoatCounter (cookieless, privacy-first) sitewide | Low |
| SEO tooling | Not verified | Add per-page title and meta description tags manually; generate XML sitemap and robots.txt by script | Low |
| Schema markup | Not verified | Add JSON-LD blocks per template (see Section 6); hand-author for static pages | Low |
| Forms | Not verified | Use serverless form handler (Formspree, Basin) for contact and adverse-event forms | Low |
| Hosting | Not verified | Keep existing hosting; optionally front with Cloudflare for CDN and bot protection | Low |

### 5.3 Rejected Technologies
- Next.js, React, Vue, Angular, Svelte — no framework migration
- Headless CMS (Contentful, Sanity, Strapi) as default — optional flat-file only
- Algolia, Elasticsearch — client-side search only if justified
- Tailwind CSS as forced migration — audit existing CSS first

---

## 6. SEO and GEO Specification

### 6.1 Schema Markup Appropriateness Audit

| Schema type | Appropriate for Siflon? | Action |
| :--- | :--- | :--- |
| Organization | Yes — verified entity | Implement on all pages with verified org data |
| WebPage | Yes — generic | Implement on all pages |
| WebSite | Yes — generic | Implement on homepage only |
| BreadcrumbList | Yes — supports navigation | Implement on all sub-pages |
| Drug | No — veterinary, not human | Do NOT use |
| MedicalWebPage | No — not human clinical | Remove from proposal |
| NewsArticle | Yes — when press releases published | Implement only after press-release section is live |
| JobPosting | Yes — if structured job listings | Implement only after careers section is live |
| FAQPage | Yes — if FAQ blocks published | Implement only after FAQ content is written |
| Place | Yes — Anantapur and Kothur verified | Implement on facility pages with verified addresses |
| Dataset | Premature | Defer until sustainability data is collected and published |
| FinancialProduct | No — Siflon is private | Remove from proposal |
| Product | Yes — for PTFE components and Pipes products (when content exists) | Implement on Polymers product pages; defer Pipes until division verified |
| Person | Yes — Mr. R. Ananthaiah verified as MD | Implement on leadership page with verified person data |
| ItemList | Yes — for category pages with multiple products | Implement on category index pages |

### 6.2 Per-Template SEO Cards

**Homepage**
- URL: /
- H1: Siflon Group
- Meta title (proposed): Siflon Group | Veterinary APIs, Pharma, Polymers and Pipes
- Meta description (proposed): Siflon Group, founded 1996 in Hyderabad, manufactures veterinary APIs, animal healthcare products, PTFE components, and reactor engineering. WHO-certified facilities, exporting to 60+ countries.
- Schema: Organization, WebSite, WebPage, BreadcrumbList
- Primary keyword (proposed): Siflon Group
- Statistics to surface (verified): Founded 1996; 60+ export countries; 350 MT/year veterinary API capacity (expanding to 1000 MT); WHO-certified facilities
- Note: Pipes division included in meta title only if verified by Siflon before launch

**Pharma Division Landing**
- URL: /pharma/
- H1: Siflon Pharma Pvt Ltd: Animal Healthcare Products
- Meta title (proposed): Animal Healthcare Products | Siflon Pharma Pvt Ltd
- Meta description (proposed): Siflon Pharma Pvt Ltd, founded 2006, manufactures animal healthcare products for farm animals including sheep, goat, cattle, and swine. Part of Siflon Group, Hyderabad.
- Schema: Organization (subOrganization of Siflon Group), WebPage, BreadcrumbList
- Primary keyword (proposed): animal healthcare products India

**Drugs Division Landing**
- URL: /drugs/
- H1: Siflon Drugs: Veterinary APIs
- Meta title (proposed): Veterinary APIs Manufacturer | Siflon Drugs
- Meta description (proposed): Siflon Drugs, founded 1999, manufactures veterinary Active Pharmaceutical Ingredients at WHO-certified facilities in Anantapur, Andhra Pradesh. Current capacity 350 MT per annum, expanding to 1000 MT. Exports to 60+ countries.
- Schema: Organization (subOrganization of Siflon Group), WebPage, BreadcrumbList, Place (for facility)
- Primary keyword (proposed): veterinary API manufacturer India

**Polymers Division Landing**
- URL: /polymers/
- H1: Siflon Polymers: PTFE Components
- Meta title (proposed): PTFE Components Manufacturer | Siflon Polymers
- Meta description (proposed): Siflon Polymers manufactures PTFE components for industrial applications. Part of Siflon Group, Hyderabad, founded 1996.
- Schema: Organization (subOrganization of Siflon Group), WebPage, BreadcrumbList
- Primary keyword (proposed): PTFE components manufacturer India
- Note: Additional product detail (grades, applications) to be added only when verified by Siflon Polymers

**Pipes Division Landing** ⚠️ UNVERIFIED
- URL: /pipes/
- H1: [Confirm division existence before publishing]
- Meta title (proposed): [Pending verification of Pipes division]
- Meta description (proposed): [Pending verification — do not publish invented content]
- Schema: Organization (subOrganization of Siflon Group), WebPage, BreadcrumbList
- Status: UNVERIFIED — the existence of a Siflon Pipes division could not be confirmed via public web research. Confirm with Siflon leadership before implementing this page.

**Press Release**
- URL pattern: /media/press-releases/<yyyy>/<mm>/<slug>.html (respect existing .html convention)
- H1: <Press release headline>
- Meta title: <Headline> | Siflon Group News
- Meta description: <Lead sentence, 140-160 characters, ending with a call-to-action verb>
- Schema: NewsArticle, BreadcrumbList
- Required slots: Headline, dateline, body, contact, datePublished, dateModified, author
- Note: Implement only after Siflon begins publishing press releases in structured format

**Career Listing**
- URL pattern: /careers/<function>/<job-slug>.html
- H1: <Job title> - <Location>
- Meta title: <Job title> | Siflon Careers
- Meta description: Apply for <job title> at Siflon <division> in <location>. <One-sentence role summary>.
- Schema: JobPosting, BreadcrumbList
- Required slots: Title, location, function, division, summary, responsibilities, requirements, apply CTA, datePosted, validThrough
- Note: Implement only after Siflon has a structured job-listings workflow

### 6.3 URL Migration Plan

Migrate id=N URLs to descriptive slugs (.html retained) over 6-12 months:
- Create redirect map: old id=N URL → new descriptive slug URL
- Implement 301 redirects at server/hosting level
- Update internal links to new slugs
- Submit updated sitemap to Google Search Console and Bing Webmaster Tools
- Monitor 404s for 90 days post-migration

---

## 7. Accessibility Baseline

WCAG 2.1 AA compliance from day one. All items achievable within static-HTML stack.

### 7.1 P0 Accessibility (Launch Blockers)
| Item | Implementation |
| :--- | :--- |
| Semantic HTML5 landmarks | `<header>`, `<nav>`, `<main>`, `<aside>`, `<footer>` on every template |
| Skip-to-main-content link | First focusable element on every page |
| One H1 per page; no skipped heading levels | Audit + fix per page |
| Descriptive alt text on content images; empty alt on decorative | Per-image content effort |
| aria-label on icon-only buttons (search, social, close) | Per-template audit |
| Visible focus indicator (2px outline, 3:1 contrast) | Single CSS rule |
| Cookie consent with category granularity | 5 categories: Necessary, Functional, Analytics, Performance, Advertisement |

### 7.2 P1 Accessibility
| Item | Implementation |
| :--- | :--- |
| Roving tabindex on dropdown menus | Vanilla JS per component |
| Focus trap in modals (cookie consent, video players) | Vanilla JS per modal |
| Closed captions and transcripts for all video | Per-video content effort |
| Colour contrast audit (4.5:1 body, 3:1 large) | Per-template audit |
| aria-expanded and aria-controls on dropdowns/accordions | Per-component |
| `<details>` + `<summary>` for FAQ (no-JS fallback) | Per FAQ block |
| axe-core or Lighthouse audit in CI | CI integration |

### 7.3 P2 Accessibility
| Item | Implementation |
| :--- | :--- |
| High-contrast mode toggle | CSS theme |
| Text alternatives for audio content | Per-audio-file |
| Keyboard-only navigation testing | Manual QA per release |

---

## 8. Implementation Roadmap

### 8.1 P0 — Trust Foundations (0-3 months)
- Audit every existing page on siflondrugs.com and siflonpharma.com for broken links, missing titles, and missing meta descriptions. Add a unique title and meta description to every page.
- Add semantic HTML5 landmarks (header, nav, main, aside, footer) to every template.
- Add a skip-to-main-content link to every template.
- Add descriptive alt text to every content image; empty alt for decorative images.
- Add aria-label to every icon-only button (search, social, close).
- Add visible focus indicators (CSS rule).
- Fix heading hierarchy: one H1 per page; no skipped levels.
- Add a robots.txt and an XML sitemap; submit to Google Search Console and Bing Webmaster Tools.
- Add Plausible or GoatCounter (cookieless analytics) sitewide.
- Add a "Last updated" stamp to every page footer.
- Migrate the highest-traffic id=N URLs to descriptive slugs (.html retained); 301-redirect the old URLs.
- Verify the existence of the Siflon Pipes division with Siflon leadership; either publish a Pipes landing page (if the division exists) or remove Pipes from the public sitemap (if it does not).

### 8.2 P1 — Content Structure (3-6 months)
- Publish a Group-level About page with verified facts: founding year 1996, founder Mr. R. Ananthaiah, HQ address, leadership.
- Publish four division landing pages (Pharma, Drugs, Polymers, Pipes) using the Division Landing template (Section 3.2). Only verified statistics per division are surfaced.
- Publish facility detail pages for Anantapur (Drugs) and Kothur (Pharma) with verified addresses, certifications (WHO-GMP), and capacities.
- Implement the Statistic Block, Category Card, Facility Card, and Press Release Row components as reusable HTML patterns (server-side includes or copy-paste templates).
- Establish a press-release workflow: each release gets its own page with a descriptive slug, a dateline, and a contact. Add NewsArticle schema when published.
- Add a Contact page using the Contact Page template (Section 3.4) with the registered office address and verified contact details.
- Add a Careers landing page using the Careers Landing template (Section 3.5). If no current openings exist, surface an expression-of-interest form.
- Add Organization JSON-LD sitewide with verified entity data (name, founding date, founder, address, contact email, same-as links to LinkedIn).
- Add Person JSON-LD to the leadership page for Mr. R. Ananthaiah (and any other named executives once verified).
- Implement BreadcrumbList schema on every sub-page.

### 8.3 P2 — Generative-Engine Readiness (6-12 months)
- Add FAQ blocks to every division landing page and every product page. Each FAQ must answer a real, frequent question in under 50 words. Add FAQPage schema.
- Audit every press release for quotable sentences: subject + predicate + number + unit + time frame + source. Rewrite where needed.
- Add Place schema to facility detail pages with verified addresses.
- Add ItemList schema to product category index pages.
- Run a quarterly content audit: every claim links to a source; every number has a year; every page has a last-reviewed date.
- Submit the site to Google Search Console "Insights" and Bing "Webmaster URL Inspection" tools.
- Monitor generative-engine mentions (Perplexity, Bing Chat, Google SGE) for the Siflon brand and key products; log which sentences are quoted and which are not.
- Implement JobPosting schema if Siflon begins publishing structured job listings.

### 8.4 P3 — Optional Enhancements (12+ months)
- Client-side search (Lunr.js or Pagefind) over a generated JSON index, if the site exceeds ~100 pages.
- Flat-file CMS (Decap CMS or Statamic) if the content team cannot maintain static HTML efficiently.
- Sustainability metrics dashboard (with Dataset schema) only after Siflon has collected and published structured EHS data.
- Multi-division localisation (language switching) only if Siflon expands into markets that require non-English content.
- Investor microsite only if Siflon begins publishing regular investor disclosures beyond the existing ICRA rating reports.
- Migration to a static-site generator (Eleventy, Astro) only if template reuse becomes painful in raw HTML.
- Full design-token system and component library only after a brand-identity audit formalises Siflon's colours, typography, and motion language.

---

## 9. Success Metrics

| Metric | Baseline | Target (12 months) | Measurement |
| :--- | :--- | :--- | :--- |
| Pages with unique title + meta description | Unknown (audit) | 100% | Manual audit + crawl |
| Pages passing axe-core with 0 critical issues | Unknown | 100% | CI gate |
| Verified statistics surfaced on homepage | 0 | 4 (founded 1996, 60+ countries, 350 MT/year, WHO-GMP) | Manual review |
| id=N URLs remaining | Unknown | 0 (all migrated with 301s) | Crawl |
| Press releases published with NewsArticle schema | 0 | ≥1 per quarter (when Siflon begins) | Manual review |
| Generative-engine citations of Siflon facts | 0 | ≥1 verified citation | Manual monitoring |
| Last-reviewed stamp on every page | 0% | 100% | Manual audit |

---

## 10. Scope and Limitations

- This is a research and blueprint document. It does not modify any website source file, stylesheet, asset, or configuration. No packages were installed. No commits, pushes, or deploys were made.
- No proprietary source code, marketing copy, imagery, or branding from any competitor was reproduced; observations describe structural patterns only.
- The Siflon Pipes division remains unverified. All Pipes content slots are flagged and must not be published until Siflon leadership confirms the division exists.
- Verified Siflon facts are drawn from public marketing pages (siflondrugs.com, siflonpharma.com) and a LinkedIn description; re-verify against internal records before commercial decisions.
- Accessibility recommendations are general best practice, not framed as competitor observations.
- Brand identity (colours, typography, motion) is not specified; deferred to brand-identity audit.

---

*Report path: `docs/implementation/FINAL-SIFLON-WEBSITE-DESIGN-BLUEPRINT.md`*
*Companion: `SIFLON-GROUP-CONSOLIDATED-DESIGN-STRATEGY.md`*
*Source reports: 6 (Cipla, Dr. Reddy's, Pfizer, Reliance, Sun Pharma, Competitor Matrix)*