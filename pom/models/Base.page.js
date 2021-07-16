// https://playwright.dev/docs/pom
class BasePage{
    constructor(page){
        this.page = page;
    }
    /**
     * Method to navigate to path passed
     * @param {string} path 
     */
    async navigate(path){
        await this.page.goto(`https://demo.applitools.com/${path}`)
    }
}
module.exports = BasePage;
