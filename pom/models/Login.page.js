// https://playwright.dev/docs/pom
const BasePage = require('./Base.page');
class LoginPage extends BasePage {
    constructor(page){
        super(page);

        // selectors
        this.userNameTxt =  '#username';
        this.passwordTxt =  '#password';
        this.loginBtn = '#log-in';
    }
    /**
     * Method to navigate to Login page using parent's method
     */
    async navigate(){
       await super.navigate('index.html'); 
    }
    /**
     * Method to login using username and password
     * @param {string} username 
     * @param {string} password 
     */
    async login(username, password){
        await this.page.fill(this.userNameTxt,username);
        await this.page.fill(this.passwordTxt,password);
        await this.page.click(this.loginBtn);
    }
}
module.exports = LoginPage;
