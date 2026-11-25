import { chromium } from 'playwright';

const jobs = [
  { url: 'http://localhost:3001/contact', width: 1440, height: 900,   file: 'contact-1440px.png' },
  { url: 'http://localhost:3001/contact', width: 1024, height: 768,  file: 'contact-1024px.png' },
  { url: 'http://localhost:3001/contact', width: 768,  height: 1024, file: 'contact-768px.png' },
  { url: 'http://localhost:3001/contact', width: 375,  height: 667,  file: 'contact-375px.png' },
  { url: 'http://localhost:3001/',        width: 1440, height: 900,  file: 'home-1440px.png' },
  { url: 'http://localhost:3001/',        width: 375,  height: 667,  file: 'home-375px.png' },
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

for (const job of jobs) {
  await page.setViewportSize({ width: job.width, height: job.height });
  await page.goto(job.url, { waitUntil: 'networkidle', timeout: 30000 });
  await page.waitForTimeout(1000);
  await page.screenshot({ path: `screenshots/${job.file}`, fullPage: true });
  console.log(`Captured ${job.file} @ ${job.width}x${job.height}`);
}

await browser.close();
console.log('\nAll screenshots captured successfully.');
