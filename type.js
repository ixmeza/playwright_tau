const { chromium } = require('playwright');
// https://playwright.dev/docs/api/class-elementhandle#element-handle-type

( async () => {
    // function code
    // launching browser
    const browser = await chromium.launch({ headless: false, slowMo: 100});
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/forgot_password');
    // code to type in email textbox
    const email = await page.$('#email');
    // delaying typing 50 ms to simulate real user speed typing
    await email.type('ixchel@mail.com', { delay : 50});
    await browser.close();
})();
