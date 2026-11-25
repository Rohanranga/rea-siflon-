const { chromium } = require('playwright');
const path = require('path');
const fs = require('fs');

const SCREENSHOTS_DIR = path.join(__dirname, '../screenshots-pw');
if (!fs.existsSync(SCREENSHOTS_DIR)) fs.mkdirSync(SCREENSHOTS_DIR, { recursive: true });

const WIDTHS = [1920, 1440, 1024, 768, 375, 320];
const URLS = [
  { name: 'home', url: 'http://localhost:3002/' },
  { name: 'contact', url: 'http://localhost:3002/contact' },
];

(async () => {
  const browser = await chromium.launch({ headless: true });
  console.log('Browser launched');

  for (const { name: pageName, url } of URLS) {
    for (const width of WIDTHS) {
      const context = await browser.newContext({ viewport: { width, height: 900 }, deviceScaleFactor: 1 });
      const page = await context.newPage();
      try {
        await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
        // Wait extra for any lazy-loaded or client-rendered content
        await page.waitForTimeout(2000);
        const filename = `${pageName}-${width}.png`;
        await page.screenshot({ path: path.join(SCREENSHOTS_DIR, filename), fullPage: false });
        console.log(`OK  ${filename}  (${width}px wide)`);
      } catch (e) {
        console.error(`FAIL ${pageName} @${width}px : ${e.message}`);
      } finally {
        await context.close();
      }
    }
  }

  await browser.close();
  console.log('Done — all screenshots saved to', SCREENSHOTS_DIR);
})().catch(err => { console.error(err); process.exit(1); });
