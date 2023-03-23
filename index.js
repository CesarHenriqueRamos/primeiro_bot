const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.goto("https://cursos.dankicode.com/");

  await page.screenshot({ path: "teste.png" });

  await browser.close();
})();
