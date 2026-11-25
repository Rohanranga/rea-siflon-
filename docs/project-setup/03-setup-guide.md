---
name: setup-guide
description: Step-by-step installation, development, and build guide for the Siflon Group website
metadata:
  type: reference
---

# Siflon Group Website - Setup & Development Guide

## Prerequisites
- Node.js 18+ installed
- npm, pnpm, or yarn package manager

## Installation Steps

1. **Navigate to project directory**:
   ```bash
   cd website/siflon-group-website-new
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

4. **Build for production**:
   ```bash
   npm run build
   ```

5. **Cloudflare Workers preview / deploy (optional)**:
   ```bash
   npm run preview
   # or deploy via wrangler
   npx wrangler deploy
   ```
