import BasePageObject from "../base/BasePageObject.js";

export default class MainContainerAccountPanel_Content extends BasePageObject{

    get panelTitle () { return this.$(`.//h1/span[normalize-space(.)='My Account']`);}
    get editAccountIconButton () { return this.$(`.//li/a[@data-original-title='Edit account details']`);}
    get changePasswordIconButton () { return this.$(`.//li/a[@data-original-title='Change password']`);}
    get manageAddressIconButton () { return this.$(`.//li/a[@data-original-title='Manage Address Book']`);}
    get wishListIconButton () { return this.$(`.//li/a[@data-original-title='My wish list']`);}
    get orderHistoryIconButton () { return this.$(`.//li/a[@data-original-title='Order history']`);}
    get transactionHistoryIconButton () { return this.$(`.//a[@data-original-title='Transaction history']`);}
    get downloadsIconButton () { return this.$(`.//a[@data-original-title='Downloads']`);}
    get notificationsIconButton () { return this.$(`.//li/a[@data-original-title='Notifications']`);}
    get logOffIconButton () { return this.$(`.//a[@data-original-title='Logoff']`);}
    get manageAddressBookCard () { return this.$(`.//div[contains(@class, 'ocean')]`);}
    get orderHistoryCard () { return this.$(`.//div[contains(@class, 'flower')]`);}
    get downloadsCard () { return this.$(`.//div[contains(@class, 'oil')]`);}
    get transactionHistoryCard () { return this.$(`.//div[contains(@class, 'balloon')]`);}


    constructor() {
        super();
        this.pageObjectName = 'Main container - My account Content';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.panelTitle.waitForClickable(),
            this.editAccountIconButton.waitForClickable(),
            this.changePasswordIconButton.waitForClickable(),
            this.manageAddressIconButton.waitForClickable(),
            this.wishListIconButton.waitForClickable(),
            this.orderHistoryIconButton.waitForClickable(),
            this.transactionHistoryIconButton.waitForClickable(),
            this.downloadsIconButton.waitForClickable(),
            this.notificationsIconButton.waitForClickable(),
            this.logOffIconButton.waitForClickable(),
            this.manageAddressBookCard.waitForDisplayed(),
            this.orderHistoryCard.waitForDisplayed(),
            this.downloadsCard.waitForDisplayed(),
            this.transactionHistoryCard.waitForDisplayed(),
        ])
    }

}