import BasePageObject from "../base/BasePageObject.js";
import MyAccountPage from "../MyAccountPage.js";

export default class MainContainerAccountPanel extends BasePageObject{

    get newCustomerTitle () { return this.$(`.//h2[normalize-space(.)='I am a new customer.']`);}
    get newCustomerSubtitle () { return this.$(`.//h4[normalize-space(.)='Checkout Options:']`);}
    get formOption () { return this.$(`.//label[@for='accountFrm_accountregister']`);}
    get registerCopy () { return this.$(`.//div[contains(text(), 'keep track of the orders you have previously made.')]`);}
    get continueButton () { return this.$(`.//button[@title='Continue']`);}
    get oldCustomerTitle () { return this.$(`.//h2[normalize-space(.)='Returning Customer']`);}
    get oldCustomerSubtitle () { return this.$(`.//h4[normalize-space(.)='I am a returning customer.']`);}
    get nameLabel () { return this.$(`.//label[normalize-space(.)='Login Name:']`);}
    get nameInput () { return this.$(`.//input[@id='loginFrm_loginname']`);}
    get passwordLabel () { return this.$(`.//label[normalize-space(.)='Password:']`);}
    get passwordInput () { return this.$(`.//input[@id='loginFrm_password']`);}
    get forgotPasswordButton () { return this.$(`.//a[normalize-space(.)='Forgot your password?']`);}
    get forgotLoginButton () { return this.$(`.//a[normalize-space(.)='Forgot your login?']`);}
    get loginButton () { return this.$(`.//button[@title='Login']`);}



    constructor() {
        super();
        this.pageObjectName = 'Main container - Account';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.newCustomerTitle.waitForDisplayed(),
            this.newCustomerSubtitle.waitForDisplayed(),
            this.formOption.waitForDisplayed(),
            this.registerCopy.waitForDisplayed(),
            this.continueButton.waitForClickable(),
            this.oldCustomerTitle.waitForDisplayed(),
            this.oldCustomerSubtitle.waitForDisplayed(),
            this.nameLabel.waitForDisplayed(),
            this.nameInput.waitForDisplayed(),
            this.passwordLabel.waitForDisplayed(),
            this.passwordInput.waitForDisplayed(),
            this.forgotPasswordButton.waitForClickable(),
            this.forgotLoginButton.waitForClickable(),
            this.loginButton.waitForClickable(),

        ])
    }

    async enterUsername(username){
        await this.enterTextIntoInput(this.nameInput, username);
    }

    async enterPassword(password){
        await this.enterTextIntoInput(this.passwordInput,password);
    }

    async clickLoginButton(){
        await this.loginButton.click();
        return MyAccountPage.init();
    }

}