import LoginPage from "../LoginPage.js";
import BasePageObject from "../base/BasePageObject.js";


export default class MainNavigationPanel extends BasePageObject{

    get logoImage () { return this.$(`.//a[@class='logo']`);}
    get loginRegisterButton () { return this.$(`.//ul[@id='customer_menu_top']/li/a`);}
    get specialsButton () { return this.$(`.//li[@data-id='menu_specials']/a`);}
    get accountButton () { return this.$(`.//li[@data-id='menu_account']/a`);}
    get cartButton () { return this.$(`.//li[@data-id='menu_cart']/a`);}
    get checkoutButton () { return this.$(`.//li[@data-id='menu_checkout']/a`);}
    get searchBar () { return this.$(`.//form[@id='search_form']`);}

    constructor() {
        super();
        this.pageObjectName = 'Main navigation';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.logoImage.waitForClickable(),
            this.loginRegisterButton.waitForClickable(),
            this.specialsButton.waitForClickable(),
            this.accountButton.waitForClickable(),
            this.cartButton.waitForClickable(),
            this.checkoutButton.waitForClickable(),
            this.searchBar.waitForClickable()
        ])
    }

    async clickLoginRegisterButton(){
        await this.loginRegisterButton.click();
        return await LoginPage.init();
    }

}