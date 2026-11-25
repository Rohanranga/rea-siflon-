import re

p = r'C:\Users\uniqu\Downloads\wetransfer_siflon_2026-10-31_0646\website\siflon-group-website-new\app\globals.css'
s = open(p).read()

# Drop the first two import-ish lines? They are the font import and tailwind import.
# We'll rebuild them in the prefix.
lines = s.splitlines(keepends=True)
# Remove first 2 lines (font import, tailwind import)
body = ''.join(lines[2:])

prefix = r'''@import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Manrope:wght@400;500;600;700;800&display=swap');
@import "tailwindcss";

/* ==========================================================================
   SIFLON DESIGN SYSTEM — TOKENS
   ========================================================================== */

:root {
  --color-navy:        #102A43;
  --color-navy-2:      #0D2030;
  --color-charcoal:    #202B36;
  --color-blue:        #477A9E;
  --color-logo-blue:   #253C80;
  --color-cyan:        #4FB7E8;
  --color-paper:       #F4F6F8;
  --color-white:       #FFFFFF;
  --color-muted:       #647482;
  --color-line:        #DCE3E8;
  --color-amber:       #B58B4A;

  --color-bg:          var(--color-white);
  --color-bg-alt:      var(--color-paper);
  --color-fg:          var(--color-charcoal);
  --color-fg-muted:    var(--color-muted);
  --color-border:      var(--color-line);
  --color-accent:      var(--color-logo-blue);
  --color-accent-2:    var(--color-blue);
  --color-focus:       var(--color-cyan);

  --font-display: "Manrope", Arial, sans-serif;
  --font-body:    "DM Sans", Arial, sans-serif;
  --font-mono:    ui-monospace, SFMono-Regular, Menlo, monospace;

  --text-xs: 0.75rem; --text-sm: 0.875rem; --text-base: 1rem; --text-md: 1.125rem;
  --text-lg: 1.25rem; --text-xl: 1.5rem; --text-2xl: 2rem; --text-3xl: 2.5rem;
  --text-4xl: 3.5rem; --text-5xl: 4.5rem;

  --leading-tight: 1.05; --leading-snug: 1.12; --leading-normal: 1.5;
  --leading-relaxed: 1.8; --leading-loose: 1.9;
  --tracking-tight: -0.03em; --tracking-wide: 0.05em;
  --tracking-wider: 0.12em; --tracking-widest: 0.22em;

  --space-1: 0.25rem; --space-2: 0.5rem; --space-3: 0.75rem; --space-4: 1rem;
  --space-5: 1.25rem; --space-6: 1.5rem; --space-8: 2rem; --space-10: 2.5rem;
  --space-12: 3rem; --space-16: 4rem; --space-20: 5rem; --space-24: 6rem;

  --container-sm: 640px; --container-md: 768px; --container-lg: 1024px;
  --container-xl: 1280px; --container-2xl: 1440px;
  --gutter: var(--space-4); --gutter-lg: var(--space-8);

  --radius-xs: 2px; --radius-sm: 4px; --radius-md: 6px; --radius-lg: 10px;
  --radius-xl: 12px; --radius-2xl: 16px; --radius-full: 9999px;

  --shadow-xs: 0 1px 2px rgba(16,42,67,0.05);
  --shadow-sm: 0 4px 12px rgba(16,42,67,0.06);
  --shadow-md: 0 12px 30px rgba(16,42,67,0.08);
  --shadow-lg: 0 18px 40px rgba(16,42,67,0.10);
  --shadow-xl: 0 24px 60px rgba(16,42,67,0.14);

  --ease-out: cubic-bezier(0.2,0.7,0.2,1);
  --ease-in-out: cubic-bezier(0.4,0,0.2,1);
  --ease-standard: cubic-bezier(0.4,0,0.2,1);
  --dur-fast: 180ms; --dur-base: 250ms; --dur-card: 300ms;
  --dur-hero: 650ms; --dur-slow: 900ms;

  --focus-ring-width: 2px; --focus-ring-offset: 2px;
  --focus-ring-color: var(--color-focus);
  --focus-ring: 0 0 0 var(--focus-ring-offset) var(--color-bg),
               0 0 0 calc(var(--focus-ring-offset) + var(--focus-ring-width)) var(--color-focus);

  --z-base: 0; --z-raised: 10; --z-sticky: 100; --z-overlay: 1000;
  --z-modal: 2000; --z-toast: 3000;
}

@media (prefers-color-scheme: dark) {
  :root:not([data-theme="light"]) {
    --color-bg: #0B1622; --color-bg-alt: #111F2E; --color-fg: #E6EDF3;
    --color-fg-muted: #9FB0C0; --color-border: #1F3348;
    --color-accent: var(--color-cyan); --color-accent-2: var(--color-blue);
    --color-focus: var(--color-cyan);
  }
}
:root[data-theme="dark"] {
  --color-bg: #0B1622; --color-bg-alt: #111F2E; --color-fg: #E6EDF3;
  --color-fg-muted: #9FB0C0; --color-border: #1F3348;
  --color-accent: var(--color-cyan); --color-accent-2: var(--color-blue);
  --color-focus: var(--color-cyan);
}

/* Legacy token aliases */
:root {
  --navy: var(--color-navy); --navy-2: var(--color-navy-2);
  --charcoal: var(--color-charcoal); --blue: var(--color-blue);
  --logo-blue: var(--color-logo-blue); --cyan: var(--color-cyan);
  --paper: var(--color-paper); --white: var(--color-white);
  --muted: var(--color-muted); --line: var(--color-line);
  --ease-out: var(--ease-out); --ease-in-out: var(--ease-in-out);
  --dur-fast: var(--dur-fast); --dur-card: var(--dur-card); --dur-hero: var(--dur-hero);
}

* { box-sizing: border-box; }
html { scroll-behavior: smooth; }
body { margin:0; background: var(--color-bg); color: var(--color-fg);
  font-family: var(--font-body); font-size: var(--text-base);
  line-height: var(--leading-normal); -webkit-font-smoothing: antialiased; }
a { color: inherit; text-decoration: none; }
button { font: inherit; }
img, svg { display: block; max-width: 100%; }

/* Shared utilities */
.container { width:100%; max-width: var(--container-xl); margin-inline:auto; padding-inline: var(--gutter); }
@media (min-width:768px){ .container { padding-inline: var(--gutter-lg); } }
.section { padding-block: var(--space-16); }
.eyebrow { font-family: var(--font-body); font-size: var(--text-xs); font-weight:700;
  letter-spacing: var(--tracking-widest); text-transform: uppercase; color: var(--color-accent-2); }
.eyebrow.light { color: rgba(255,255,255,0.85); }
.btn { display:inline-flex; align-items:center; justify-content:center; gap: var(--space-2);
  padding: var(--space-3) var(--space-5); font-family: var(--font-display); font-size: var(--text-sm);
  font-weight:700; border-radius: var(--radius-md); border:1px solid transparent; cursor:pointer;
  transition: all var(--dur-base) var(--ease-out); }
.btn-primary { background: var(--color-accent); color: var(--color-white); }
.btn-primary:hover { background: var(--color-navy); transform: translateY(-1px); box-shadow: var(--shadow-sm); }
.btn-secondary { background: transparent; color: var(--color-accent); border-color: var(--color-border); }
.btn-secondary:hover { background: var(--color-bg-alt); border-color: var(--color-accent); }
.card { background: var(--color-bg); border:1px solid var(--color-border); border-radius: var(--radius-xl);
  padding: var(--space-6); box-shadow: var(--shadow-xs); transition: all var(--dur-card) var(--ease-out); }
.card:hover { box-shadow: var(--shadow-md); transform: translateY(-2px); border-color: var(--color-accent-2); }
.skip-link { position:absolute; left:-9999px; top: var(--space-2); z-index: var(--z-toast);
  padding: var(--space-2) var(--space-4); background: var(--color-accent); color: var(--color-white);
  border-radius: var(--radius-md); font-weight:700; }
.skip-link:focus { left: var(--space-2); outline:none; box-shadow: var(--focus-ring); }
.focus-ring:focus-visible { outline:none; box-shadow: var(--focus-ring); }
.pending-badge { display:inline-flex; align-items:center; gap: var(--space-2); padding: var(--space-1) var(--space-3);
  font-size: var(--text-xs); font-weight:700; letter-spacing: var(--tracking-wide); text-transform: uppercase;
  color: var(--color-amber); background:#FBF3E6; border:1px solid #E8D2A0; border-radius: var(--radius-sm); }
.sr-only { position:absolute; width:1px; height:1px; padding:0; margin:-1px; overflow:hidden; clip:rect(0,0,0,0); white-space:nowrap; border:0; }
.sr-only.focus-visible:focus, .sr-only:focus { position:static; width:auto; height:auto; margin:0; overflow:visible; clip:auto; white-space:normal; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation-duration:0.001ms !important; animation-iteration-count:1 !important;
    transition-duration:0.001ms !important; scroll-behavior:auto !important; }
}

/* ==========================================================================
   LEGACY / EXISTING COMPONENT STYLES (preserved)
   ========================================================================== */

'''

open(p, 'w').write(prefix + body)
print('done')
PY