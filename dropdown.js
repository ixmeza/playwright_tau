const { chromium } = require('playwright');
// https://playwright.dev/docs/input#select-options

(async () => {
    // function code
    const browser = await chromium.launch({ headless: false, slowMo: 300 });
    const page = await browser.newPage();
    await page.goto('https://the-internet.herokuapp.com/dropdown');
    const dropdown = await page.$('#dropdown');
    // value 
    await dropdown.selectOption({ value: '1' });
    // label
    await dropdown.selectOption({ label: 'Option 2' });
    // index
    await dropdown.selectOption({ index: 1 });
    // values inside this select
    const availableOptions = await dropdown.$$('option');
    for (let i = 0; i < availableOptions.length; i++) {
        console.log(await availableOptions[i].innerText());
    }

    await browser.close();
})();
