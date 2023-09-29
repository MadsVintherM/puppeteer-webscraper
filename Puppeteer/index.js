import puppeteer from 'puppeteer';

(async () => {
  // Launch the browser and open a new blank page
  const browser = await puppeteer.launch({
    headless: false
  });
  const page = await browser.newPage();

  await page.goto('https://www.elgiganten.dk/product/outlet/electrolux-vaskemaskine-ew8f8661u1/399017');
  


  const n = await page.$(".attribute-group__wrapper")
  const t = await (await n.getProperty('textContent')).jsonValue()

  console.log(t);
  
  await page.screenshot({ path: 'example.png' });

  await browser.close();
})();