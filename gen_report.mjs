import fs from 'fs';
import path from 'path';

const scrDir = 'C:/Users/uniqu/Downloads/wetransfer_siflon_2026-10-31_0646/website/siflon-group-website-new/screenshots';
const outPath = 'C:/Users/uniqu/Downloads/wetransfer_siflon_2026-10-31_0646/website/siflon-group-website-new/verification-report.html';

function b64(file) {
  return fs.readFileSync(path.join(scrDir, file)).toString('base64');
}

const imgs = [
  'contact-1440px.png',
  'contact-1024px.png',
  'contact-768px.png',
  'contact-375px.png',
  'home-1440px.png',
  'home-375px.png'
];

const data = {};
for (const f of imgs) {
  data[f] = `data:image/png;base64,${b64(f)}`;
}

const html = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Siflon 视觉 QA 验证报告</title>
<style>
  :root { --navy: #102A43; --sky: #4FB7E8; --bg: #f5f7fa; --card: #fff; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { background: var(--bg); font-family: -apple-system, "PingFang SC", "Microsoft YaHei", sans-serif; color: #1e2d3d; line-height: 1.6; }
  .header { background: var(--navy); color: #fff; padding: 32px 40px; }
  .header h1 { font-size: 24px; font-weight: 700; letter-spacing: 0.02em; }
  .header p { font-size: 14px; color: rgba(255,255,255,0.7); margin-top: 4px; }
  .summary { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; padding: 24px 40px; }
  .summary-card { background: var(--card); border-radius: 10px; padding: 20px; box-shadow: 0 1px 4px rgba(16,42,67,0.08); }
  .summary-card h3 { font-size: 13px; color: #8899a6; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 8px; }
  .summary-card .val { font-size: 22px; font-weight: 700; color: var(--navy); }
  .summary-card .val.green { color: #16a34a; }
  .section { padding: 0 40px 32px; }
  .section-title { font-size: 18px; font-weight: 700; color: var(--navy); margin-bottom: 16px; padding-bottom: 8px; border-bottom: 2px solid var(--sky); display: inline-block; }
  .screenshot-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 20px; margin-top: 16px; }
  .screenshot-card { background: var(--card); border-radius: 10px; overflow: hidden; box-shadow: 0 1px 4px rgba(16,42,67,0.08); }
  .screenshot-card .tag { padding: 8px 16px; font-size: 13px; font-weight: 600; color: var(--navy); background: #e8f4fc; border-bottom: 1px solid #d0e8f5; }
  .screenshot-card img { width: 100%; height: auto; display: block; }
  .note { padding: 16px 40px; font-size: 13px; color: #8899a6; background: #fff; border-top: 1px solid #eef3f6; }
  code { background: #eef3f6; padding: 2px 6px; border-radius: 3px; font-size: 13px; }
</style>
</head>
<body>

<div class="header">
  <h1>🔍 Siflon Group Website — Visual QA Verification Report</h1>
  <p>Bug fixes for Contact Form & Homepage Quality Section · Build passed · Browser verified</p>
</div>

<div class="summary">
  <div class="summary-card">
    <h3>TypeScript Check</h3>
    <div class="val green">✓ PASS</div>
  </div>
  <div class="summary-card">
    <h3>Production Build</h3>
    <div class="val green">✓ PASS</div>
  </div>
  <div class="summary-card">
    <h3>Screenshots Captured</h3>
    <div class="val">6 / 6</div>
  </div>
  <div class="summary-card">
    <h3>Files Modified</h3>
    <div class="val">1 (globals.css)</div>
  </div>
</div>

<!-- BUG 1: Contact Form -->
<div class="section">
  <div class="section-title">BUG 1 — Contact Enquiry Form (contact page)</div>
  <p style="font-size:13px;color:#8899a6;margin-bottom:12px;">Viewports: 1440px · 1024px · 768px · 375px</p>
  <div class="screenshot-grid">
    <div class="screenshot-card">
      <div class="tag">1440px Desktop</div>
      <img src="${data['contact-1440px.png']}" alt="contact-1440" />
    </div>
    <div class="screenshot-card">
      <div class="tag">1024px Tablet</div>
      <img src="${data['contact-1024px.png']}" alt="contact-1024" />
    </div>
    <div class="screenshot-card">
      <div class="tag">768px Tablet Portrait</div>
      <img src="${data['contact-768px.png']}" alt="contact-768" />
    </div>
    <div class="screenshot-card">
      <div class="tag">375px Mobile</div>
      <img src="${data['contact-375px.png']}" alt="contact-375" />
    </div>
  </div>
</div>

<!-- BUG 2: Homepage Quality Section -->
<div class="section">
  <div class="section-title">BUG 2 — Homepage Quality Section</div>
  <p style="font-size:13px;color:#8899a6;margin-bottom:12px;">Viewports: 1440px · 375px</p>
  <div class="screenshot-grid">
    <div class="screenshot-card">
      <div class="tag">1440px Desktop</div>
      <img src="${data['home-1440px.png']}" alt="home-1440" />
    </div>
    <div class="screenshot-card">
      <div class="tag">375px Mobile</div>
      <img src="${data['home-375px.png']}" alt="home-375" />
    </div>
  </div>
</div>

<div class="note">
  <strong>Note:</strong> Dev server running on http://localhost:3002 · Compiled CSS confirmed via curl to /_next/static/css/app/layout.css — all Phase 2 Batch 2 selectors present inside <code>@layer components</code>. Webpack runtime error resolved after cache clear.
</div>

</body>
</html>`;

fs.writeFileSync(outPath, html, 'utf8');
console.log(`Written ${outPath} (${html.length} bytes)`);
