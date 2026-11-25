---
name: project-overview
description: Overview of the Siflon Group website project structure and architecture
metadata:
  type: project
---

# Siflon Group Website - Project Overview

**Path**: `C:\Users\uniqu\Downloads\wetransfer_siflon_2026-10-31_0646\website\siflon-group-website-new`  
**Tech Stack**: Next.js 15 (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons.

## Architecture & Directory Structure

- **`app/`**: Next.js App Router pages and routes
  - `page.tsx`: Homepage with hero, business selector, tilt stack, exhibition gallery, industries marquee, contact form
  - `businesses/`: Business sector pages
  - `products/`: Product catalog and detail views
  - `gallery/`: Exhibition and manufacturing gallery
  - `resources/`: Downloads and documentation
  - `components-demo/`: UI component showcase
- **`components/`**: Reusable React components
  - `hero.tsx`, `business-selector.tsx`, `business-ttilt-stack.tsx`, `exhibition-gallery.tsx`, `industries-marquee.tsx`
  - `site-header.tsx`, `expanded-footer.tsx`, `mobile-nav.tsx`, `contact-form.tsx`
- **`data/`**: Static datasets for businesses, exhibitions, timeline, resources, gallery
- **`lib/`**: Utility functions (`utils.ts` with `cn` helper)
- **`public/`**: Static images and media assets
- **`internal-assets/`**: Unprocessed internal assets, documents, and high-res images
- **`docs/`**: Project documentation (setup, audit, research)

## Key Design System Principles
- **Theme**: Premium industrial / life sciences aesthetic with dark and light mode support.
- **Typography**: Inter / sans-serif with clear heading hierarchy.
- **Component Design**: Modular, accessible, and responsive components built on Tailwind CSS.
