# Cloudflare Deployment Readiness — Siflon Group Website

**Project:** Siflon Group website redesign  
**Batch:** Phase 3 Batch 2 — Cloudflare Runtime and Deployment Readiness  
**Date:** 2026-11-24  
**Status:** Draft (pre-launch review)

---

## 1. Executive Summary

This report documents the Cloudflare runtime and deployment readiness audit for the Siflon Group website. The project is a Next.js 15 App Router application packaged with OpenNext (`@opennextjs/cloudflare ^1.20.16`) targeting Cloudflare Workers via `wrangler.jsonc`.

The local OpenNext build completes successfully, the worker entrypoint exists at `.open-next/worker.js`, assets are emitted to `.open-next/assets`, and all 13 public routes return HTTP 200 under the local Cloudflare preview on `localhost:8787`. Static assets (logo, robots.txt, sitemap.xml) serve correctly, and the contact form degrades gracefully to an unconfigured state when no Formspree endpoint is set.

**Deployment readiness classification: NEEDS CONFIGURATION.** Several production-critical items remain unverified or unconfigured and must be resolved before go-live. No deployment was performed per instructions.

---

## 2. Configuration Inventory

### wrangler.jsonc (root)

| Field | Value |
|---|---|
| name | `siflon-websites` |
| main | `.open-next/worker.js` |
| compatibility_date | `2025-06-15` |
| compatibility_flags | `["nodejs_compat"]` |
| assets.directory | `.open-next/assets` |
| assets.binding | `ASSETS` |
| services[0].binding | `WORKER_SELF_REFERENCE` |
| services[0].service | `siflon-websites` |
| previews | `{}` (empty) |

### open-next.config.ts

| Field | Value |
|---|---|
| buildCommand | `next build` |

### package.json scripts

| Script | Command |
|---|---|
| dev | `next dev` |
| build | `next build && opennextjs-cloudflare build` |
| start | `next start` |
| preview | `opennextjs-cloudflare build && opennextjs-cloudflare preview` |
| deploy | `opennextjs-cloudflare build && opennextjs-cloudflare deploy` |

### Environment bindings observed

- `NEXT_PUBLIC_FORMSPREE_ENDPOINT`: **not set** (no `.env`, `env.local`, or `dev.vars` present) → contact form shows unconfigured state.
- `NEXT_PUBLIC_SITE_URL`: fallback `https://siflon-group.com` used in `app/api/robots/route.ts` when unset.

### Absent configuration

No `wrangler.toml`, no `cloudflare/` directory, no `.env` files, no secrets configuration, and no production domain/DNS configuration were found in the repository. Production deployment target (Pages vs Workers), custom domain, DNS records, and production environment variables could not be confirmed from repository configuration alone.

---

## 3. Local Cloudflare Preview Verification

The local Cloudflare OpenNext preview was started on `localhost:8787` and all public routes were tested.

### Route results (all HTTP 200)

| Route | Type | Status |
|---|---|---|
| `/` | Static | ✅ 200 |
| `/about` | Static | ✅ 200 |
| `/contact` | Static | ✅ 200 |
| `/products` | Static | ✅ 200 |
| `/gallery` | Static | ✅ 200 |
| `/resources` | Static | ✅ 200 |
| `/quality` | Static | ✅ 200 |
| `/robots.txt` | Generated | ✅ 200 |
| `/sitemap.xml` | Generated | ✅ 200 |
| `/businesses/siflon-pharma` | SSG | ✅ 200 |
| `/businesses/siflon-drugs` | SSG | ✅ 200 |
| `/businesses/siflon-polymers` | SSG | ✅ 200 |
| `/businesses/siflon-pipes` | SSG (pending) | ✅ 200 |

### Static assets (all HTTP 200)

| Asset | Status |
|---|---|
| `/images/siflon-gemini-logo.png` | ✅ 200 |
| `/robots.txt` | ✅ 200 |
| `/sitemap.xml` | ✅ 200 |

### Build artifacts

- `.open-next/worker.js`: present (worker entrypoint)
- `.open-next/assets/`: present (asset directory)
- `.next/server/vendor-chunks/`: present and includes `motion-dom.js` (the earlier root-route 500 caused by a missing `motion-dom.js` vendor chunk was resolved by a clean `rm -rf .next && npm run build`)

### Contact form — unconfigured behaviour (verified)

When `NEXT_PUBLIC_FORMSPREE_ENDPOINT` is unset:
- Submission halts gracefully and the form renders the `unconfigured` state panel.
- The panel directs users to email `info@siflonpharma.com` or call `+91 9618828282`.
- **No real enquiry is sent** and no fake success message is displayed. This meets the security and UX constraints.

### Navigation and responsive

- Desktop navigation renders all links (Home, About, Divisions mega-menu, Products, Gallery, Resources, Quality, Contact).
- Mobile hamburger menu button present (`aria-controls="mobile-nav"`).
- Siflon Pipes division link is marked `(pending verification)` in footer and navigation.
- No console errors were introduced by the build; the earlier `site-header.tsx` `"use client"` directive fix is in place.

---

## 4. Production Domain Confirmation (NOT VERIFIED)

The domain `https://siflon-group.com` is used as a fallback origin in:
- `lib/site.ts` (`SITE.url`)
- `app/api/robots/route.ts` (`NEXT_PUBLIC_SITE_URL || 'https://siflon-group.com'`)
- `app/sitemap.ts` (via `siteUrl()`)
- JSON-LD Organization/WebSite structured data

**This domain has NOT been confirmed from actual production deployment configuration.** There is no `wrangler.toml`, no Cloudflare Pages custom-domain config, and no DNS configuration in the repository. Per project boundaries, production access was not assumed and the domain was not verified against a live deployment.

**Required before launch:** Confirm `https://siflon-group.com` (or the correct production URL) from the actual Cloudflare hosting environment / custom-domain settings, and align `lib/site.ts`, `app/api/robots/route.ts`, and `app/sitemap.ts` accordingly.

---

## 5. Deployment Readiness Classification

| Category | Status | Detail |
|---|---|---|
| Build (`npm run build`) | ✅ READY | OpenNext build completes; worker at `.open-next/worker.js`; assets at `.open-next/assets` |
| Local Cloudflare preview | ✅ READY | All 13 routes return 200 on `localhost:8787` |
| Static assets | ✅ READY | Logo, robots.txt, sitemap.xml serve correctly |
| Contact form (unconfigured) | ✅ READY | Graceful unconfigured state; no real submission; no fake success |
| Production domain | ❌ NOT VERIFIED | `https://siflon-group.com` unconfirmed from deployment config |
| DNS / custom domain | ❌ NOT VERIFIED | No Pages/Workers domain config found in repo |
| Production env vars | ❌ NEEDS CONFIGURATION | `NEXT_PUBLIC_FORMSPREE_ENDPOINT` unset; no `.env` present |
| Secrets | ❌ NEEDS CONFIGURATION | No secrets configuration found |
| Compatibility date/flags | ✅ READY | `2025-06-15`, `nodejs_compat` set in `wrangler.jsonc` |

**Overall classification: NEEDS CONFIGURATION**

The application builds and runs correctly under the local Cloudflare preview, but production deployment is blocked pending:
1. Confirmation of the production domain from actual deployment configuration.
2. Production environment variable configuration (notably `NEXT_PUBLIC_FORMSPREE_ENDPOINT`).
3. DNS / custom-domain setup (Pages vs Workers target decision).

No deployment, DNS change, or commit/push was performed per instructions.

---

## 6. Boundary Compliance

- ❌ No deployment performed (`opennextjs-cloudflare deploy` not run).
- ❌ No DNS or domain configuration changed.
- ❌ No production access assumed.
- ❌ No secrets exposed or committed.
- ❌ No real enquiry submitted through the contact form.
- ❌ No design or verified content altered.
- ✅ Production domain treated as unconfirmed (not assumed correct).
