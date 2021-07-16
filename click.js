const { chromium } = require('playwright');
// https://playwright.dev/docs/api/class-page#page-click
// https://playwright.dev/docs/api/class-elementhandle#element-handle-click

(async () => {
    // function code
    // launching browser
    const browser = await chromium.launch({ headless: false, slowMo: 100 });
    const page = await browser.newPage();
    await page.goto('https://www.apronus.com/music/lessons/unit01.htm');
    // click on  the keynotes
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');

    /*
    Code for my musical "Master piece"
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(3) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(10) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(8) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(6) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(5) > button');
    await page.click('#t1 > table > tr:nth-child(1) > td:nth-child(1) > button');
    */

    await browser.close();


})();
