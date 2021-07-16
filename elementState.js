const { chromium } = require('playwright');
// https://playwright.dev/docs/actionability
// https://playwright.dev/docs/api/class-elementhandle#element-handle-wait-for-element-state

(async () => { // anonymous arrow function
  // function code

  // launching browser
  const browser = await chromium.launch();
  // creating a page inside browser
  const page = await browser.newPage();
  // navigating to site
  await page.goto('https://demoqa.com/automation-practice-form');

  // element handles
  const firstName = await page.$('#firstName');
  const sportsCheck = await page.$('#hobbies-checkbox-1');
  const submitBtn = await page.$('#submit');
  
  // print the element state
  console.log(await firstName.isDisabled());
  console.log(await firstName.isEnabled());
  console.log(await firstName.isEditable());
  console.log(await sportsCheck.isChecked());
  console.log(await sportsCheck.isVisible());
  console.log(await submitBtn.isHidden());
  console.log(await submitBtn.isVisible());
  // closing browser
  await browser.close();

})(); // function calls itself
