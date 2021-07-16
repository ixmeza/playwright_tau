// code copied & pasted from codegen
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext();

  // Open new page
  const page = await context.newPage();

  // Go to https://www.saucedemo.com/
  await page.goto('https://www.saucedemo.com/');

  // Click [data-test="username"]
  await page.click('[data-test="username"]');

  // Fill [data-test="username"]
  await page.fill('[data-test="username"]', 'standard_user');

  // Click [data-test="password"]
  await page.click('[data-test="password"]');

  // Fill [data-test="password"]
  await page.fill('[data-test="password"]', 'secret_sauce');

  // Click [data-test="login-button"]
  await page.click('[data-test="login-button"]');
  // assert.equal(page.url(), 'https://www.saucedemo.com/inventory.html');

  // Click [data-test="add-to-cart-sauce-labs-backpack"]
  await page.click('[data-test="add-to-cart-sauce-labs-backpack"]');

  // Click text=1
  await page.click('text=1');
  // assert.equal(page.url(), 'https://www.saucedemo.com/cart.html');

  // Click [data-test="checkout"]
  await page.click('[data-test="checkout"]');
  // assert.equal(page.url(), 'https://www.saucedemo.com/checkout-step-one.html');

  // Click [data-test="firstName"]
  await page.click('[data-test="firstName"]');

  // Fill [data-test="firstName"]
  await page.fill('[data-test="firstName"]', 'Air');

  // Click [data-test="lastName"]
  await page.click('[data-test="lastName"]');

  // Fill [data-test="lastName"]
  await page.fill('[data-test="lastName"]', 'Frier');

  // Click [data-test="postalCode"]
  await page.click('[data-test="postalCode"]');

  // Fill [data-test="postalCode"]
  await page.fill('[data-test="postalCode"]', '28202');

  // Click form:has-text("CancelContinue")
  await page.click('form:has-text("CancelContinue")');

  // Click form div >> :nth-match(div, 4)
  await page.click('form div >> :nth-match(div, 4)');

  // Click [data-test="continue"]
  await page.click('[data-test="continue"]');
  // assert.equal(page.url(), 'https://www.saucedemo.com/checkout-step-two.html');

  // Click [data-test="finish"]
  await page.click('[data-test="finish"]');
  // assert.equal(page.url(), 'https://www.saucedemo.com/checkout-complete.html');

  // ---------------------
  await context.close();
  await browser.close();
})();