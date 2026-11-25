import { chromium } from 'playwright';

const urls = [
  'http://localhost:3002/',
  'http://localhost:3002/contact',
];

const browser = await chromium.launch({ headless: true });
const page = await browser.newPage();

const consoleLogs = [];
page.on('console', msg => consoleLogs.push({ type: msg.type(), text: msg.text(), location: msg.location() }));
page.on('pageerror', err => consoleLogs.push({ type: 'error', text: err.message, stack: err.stack }));
page.on('requestfailed', req => consoleLogs.push({ type: 'requestfailed', url: req.url(), failure: req.failure() }));

for (const url of urls) {
  consoleLogs.length = 0;
  console.log(`\n=== ${url} ===`);
  await page.goto(url, { waitUntil: 'networkidle', timeout: 60000 });
  await page.waitForTimeout(3000);
  
  consoleLogs.forEach(log => {
    if (log.type === 'requestfailed') {
      console.log(`[${log.type}] ${log.url} - ${JSON.stringify(log.failure)}`);
    } else {
      console.log(`[${log.type}] ${log.text}`);
      if (log.stack) console.log(`  Stack: ${log.stack}`);
    }
  });
}

await browser.close();
