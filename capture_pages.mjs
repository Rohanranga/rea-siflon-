import { chromium } from 'playwright';

async function capturePages() {
  const browser = await chromium.launch({ headless: true });

  // Viewports to test: 1920px, 1440px, 1024px, 768px, 375px
  const viewports = [
    { width: 1920, height: 1080, name: '1920' },
    { width: 1440, height: 900, name: '1440' },
    { width: 1024, height: 768, name: '1024' },
    { width: 768, height: 1024, name: '768' },
    { width: 375, height: 667, name: '375' },
  ];

  const pages = [
    { url: 'http://localhost:3007/', name: 'homepage' },
    { url: 'http://localhost:3007/contact', name: 'contact' },
    { url: 'http://localhost:3007/quality', name: 'quality' },
  ];

  for (const vp of viewports) {
    const page = await browser.newPage({ viewport: { width: vp.width, height: vp.height } });
    for (const p of pages) {
      await page.goto(p.url, { waitUntil: 'networkidle' });
      await page.screenshot({ path: `${p.name}-${vp.name}.png`, fullPage: true });
      console.log(`Captured ${p.name} at ${vp.width}px`);
    }
    await page.close();
  }

  await browser.close();
}

capturePages().catch(console.error);