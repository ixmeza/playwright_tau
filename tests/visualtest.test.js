const { chromium } = require('playwright');
// required to use applitools API
// must have set up environmental variable APPLITOOLS_API_KEY
const { ClassicRunner, Eyes, Target, RectangleSize } = require('@applitools/eyes-playwright');

describe(`UI tests for dynamic content using playwright and applitools`, () => {
    // jest timeout is by default 5000ms to run tests, with this we override this value
    jest.setTimeout(30000);
    let browser = null;
    let page = null;
    let context = null;
    // visual testing eyes
    const eyes = new Eyes(new ClassicRunner());

    beforeAll(async () => {
        browser = await chromium.launch();
        context = await browser.newContext();
        page = await context.newPage();
        await page.goto('https://the-internet.herokuapp.com/dynamic_content');
    });

    afterAll(async () => {
        await context.close();
        await browser.close();
    });

    test(`Should look okay`, async () => {
        await page.waitForSelector('h3', { state: 'attached' });
        // visual testing logic
        await eyes.open(page, 'The internet', 'Dynamic content', new RectangleSize(800, 600));
        await eyes.check(Target.window().fully());
        await eyes.close();
    });
});