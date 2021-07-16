const { webkit } = require('playwright');
// https://playwright.dev/docs/api/class-frame#frame-page

(async () => { // anonymous arrow function
  // function code

  // launching browser
  const browser = await webkit.launch({ headless: false, slowMo: 100 });
  // creating a page inside browser
  const page = await browser.newPage();
  // navigating to site
  await page.goto('https://www.demoqa.com/frames');

  // logic to handle the iframe
  const frame1 = await page.frame({ url: /\/sample/ }); //regex
  // locating h1 element handle inside frame 
  const heading1 = await frame1.$('h1');
  console.log(await heading1.innerText());

  // closing browser
  await browser.close();

})(); // function calls itself
