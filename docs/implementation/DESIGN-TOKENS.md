# Design Tokens — Siflon Group

**Source:** `app/globals.css` `:root` block. Structural, brand-neutral tokens. Hex values are placeholders pending a brand-identity audit; replace values only, never token names.

## Colour

| Token | Value | Usage |
|---|---|---|
| `--color-navy` | #102A43 | Primary dark (hero bg, headings) |
| `--color-navy-2` | #0D2030 | Deeper navy |
| `--color-charcoal` | #202B36 | Body text |
| `--color-blue` | #477A9E | Secondary accent |
| `--color-logo-blue` | #253C80 | Brand accent (buttons, links) |
| `--color-cyan` | #4FB7E8 | Highlight / focus |
| `--color-paper` | #F4F6F8 | Alt background |
| `--color-white` | #FFFFFF | Surface |
| `--color-muted` | #647482 | Muted text |
| `--color-line` | #DCE3E8 | Borders |
| `--color-amber` | #B58B4A | Pending-verification accent only |
| `--color-bg` | white (dark: #0B1622) | Page background |
| `--color-fg` | charcoal (dark: #E6EDF3) | Foreground text |
| `--color-border` | line (dark: #1F3348) | Borders |
| `--color-accent` | logo-blue (dark: cyan) | Primary accent |
| `--color-focus` | cyan | Focus ring |

Dark-mode overrides activate under `@media (prefers-color-scheme: dark)` guarded by `:root:not([data-theme="light"])` and `:root[data-theme="dark"]`.

## Typography

- Display: `--font-display` = Manrope
- Body: `--font-body` = DM Sans
- Mono: `--font-mono`
- Scale: `--text-xs` (12px) … `--text-5xl` (72px)
- Leading: `--leading-tight/snug/normal/relaxed/loose`
- Tracking: `--tracking-tight/wide/wider/widest`

## Spacing (4-based)

`--space-1` (4px) … `--space-24` (96px).

## Layout

- Containers: `--container-sm` (640) … `--container-2xl` (1440)
- Gutters: `--gutter` (16px), `--gutter-lg` (32px)
- `.container` utility class provided.

## Radius / Shadows / Motion

- Radius: `--radius-xs` … `--radius-full`
- Shadows: `--shadow-xs` … `--shadow-xl`
- Motion: `--ease-out`, `--ease-in-out`, `--ease-standard`, `--dur-fast` (180ms) … `--dur-slow` (900ms)

## Focus

- `--focus-ring` composite for visible focus indicators (WCAG 2.1 AA).
- `.skip-link`, `.focus-ring` utility classes.

## Z-index

`--z-base` (0), `--z-raised` (10), `--z-sticky` (100), `--z-overlay` (1000), `--z-modal` (2000), `--z-toast` (3000).

## Legacy aliases

Legacy `--navy`, `--blue`, `--paper`, etc. are aliased to the new tokens so existing components continue to render during migration.

## Pending-verification

`.pending-badge` class + `--color-amber` for the unverified Siflon Pipes division. Do not use amber for any other purpose.
