const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const outDir = 'C:/Users/uniqu/Downloads/wetransfer_siflon_2026-10-31_0646/website/siflon-group-website-new/screenshots';
fs.mkdirSync(outDir, { recursive: true });

const jobs = [
  { url: 'http://localhost:3002/contact', vp: { w: 1440, h: 900 },    file: 'contact-1440px.png' },
  { url: 'http://localhost:3002/contact', vp: { w: 1024, h: 768 },   file: 'contact-1024px.png' },
  { url: 'http://localhost:3002/contact', vp: { w: 768,  h: 1024 },  file: 'contact-768px.png' },
  { url: 'http://localhost:3002/contact', vp: { w: 375,  h: 667 },   file: 'contact-375px.png' },
  { url: 'http://localhost:3002/',        vp: { w: 1440, h: 900 },    file: 'home-1440px.png' },
  { url: 'http://localhost:3002/',        vp: { w: 375,  h: 667 },   file: 'home-375px.png' },
];

(async () => {
  const browser = await chromium.launch({ headless: true, args: ['--no-sandbox'] });
  for (const job of jobs) {
    const page = await browser.newPage({ viewport: job.vp, ignoreHTTPSErrors: true });
    await page.route('**/*', route => {
      route.continue({
        headers: {
          ...route.request().headers(),
          'Cache-Control': 'no-store',
          'Pragma': 'no-cache',
        },
      });
    });
    await page.goto(job.url, { waitUntil: 'networkidle', timeout: 30000 });
    // Scroll to bottom to ensure full render
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await page.screenshot({ path: path.join(outDir, job.file), fullPage: false }).catch(async () => {
      // fallback: screenshot visible region only
      await page.screenshot({ path: path.join(outDir, job.file), clip: job.vp });
    });
    const sz = fs.statSync(path.join(outDir, job.file)).size;
    console.log(`${job.file}: ${sz} bytes`);
    await page.close();
  }
  await browser.close();
  console.log('Done.');
})();
