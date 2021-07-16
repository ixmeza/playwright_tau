const { chromium } = require('playwright');
https://playwright.dev/docs/dialogs#alert-confirm-prompt-dialogs

(async() => { // anonymous arrow function
    // function code
  
  	// launching browser
    const browser = await chromium.launch({headless:false, slowMo:400});
  	// creating a page inside browser
  	const page = await browser.newPage();
   	// navigating to site
    await page.goto('https://www.demoqa.com/alerts');
    // code to handle the alerts

    // use once to only use the listener once
    // accept dialog
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.click('#confirmButton');
    
    // enter text and accept dialog
    page.once('dialog', async dialog =>{
        console.log(dialog.message());
        await dialog.accept('my text is this');
    });
    await page.click('#promtButton');

  	// closing browser
    await browser.close();
  
})(); // function calls itself
