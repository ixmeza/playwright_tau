const { chromium } = require('playwright');

describe(`UI tests for bookstore using playwright`, () => {
    // jest timeout is by default 5000ms to run tests, with this we override this value
    jest.setTimeout(10000);
    
    let browser = null;
    let page = null;
    let context = null;
    // array to store element handles of the cells on the first row
    let firstRowCells = null;

    // runs before all tests
    beforeAll(async() =>{
      browser = await chromium.launch();
      context = await browser.newContext();
      page = await context.newPage();
      await page.goto('https://demoqa.com/books');
    });

    // runs after all tests
    afterAll(async() =>{
       await browser.close();
    });
    
    test(`Should load page`, async() =>{
        // assertions
        expect(page).not.toBeNull();
        expect(await page.title()).not.toBeNull();
    });

    test(`Should be able to search for eloquent javascript`, async() =>{
        await page.fill('#searchBox','eloquent');
        // an assertion could go here
    });

    test(`Should check if book image is okay`, async() =>{
        // array  element handle to store all cell element handles
        firstRowCells = await page.$$('.ReactTable  .rt-tr-group:nth-child(1) .rt-td');
        // retrieving the element handle with img tag in the first element on the array
        let imgUrl = await firstRowCells[0].$('img');
        // assertion
        expect(await imgUrl.getAttribute('src')).not.toBeNull();
    });

    test(`Should check if title is okay`, async() =>{
        // assertion
        expect(await firstRowCells[1].innerText()).toBe('Eloquent JavaScript, Second Edition');
    });

    test(`Should check if author is okay`, async() =>{
        // assertion
        expect(await firstRowCells[2].innerText()).toBe('Marijn Haverbeke');
    });

    test(`Should check if publisher is okay`, async() =>{
        // assertion
        expect(await firstRowCells[3].innerText()).toBe('No Starch Press');
    });

});