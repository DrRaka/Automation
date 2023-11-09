import BasePageObject from "../base/BasePageObject.js";

export default class MainContainerAccountPanel_Navigation extends BasePageObject{

    get navigationTitle () { return this.$(`.//h2/span[normalize-space(.)='My Account']`);}
    get dashboardLink () { return this.$(`.//ul[@class='side_account_list']/li[1]/a`);}
    get wishlistLink () { return this.$(`.//ul[@class='side_account_list']/li[2]/a`);}
    get editAccountLink () { return this.$(`.//ul[@class='side_account_list']/li[3]/a`);}
    get changePasswordLink () { return this.$(`.//ul[@class='side_account_list']/li[4]/a`);}
    get addressBookLink () { return this.$(`.//ul[@class='side_account_list']/li[5]/a`);}
    get orderHistoryLink () { return this.$(`.//ul[@class='side_account_list']/li[6]/a`);}
    get transactionHistoryLink () { return this.$(`.//ul[@class='side_account_list']/li[7]/a`);}
    get downloadsLink () { return this.$(`.//ul[@class='side_account_list']/li[8]/a`);}
    get notificationsLink () { return this.$(`.//ul[@class='side_account_list']/li[9]/a`);}
    get logOffLink () { return this.$(`.//ul[@class='side_account_list']/li[10]/a`);}




    constructor() {
        super();
        this.pageObjectName = 'Main container - My account Content';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.navigationTitle.waitForClickable(),
            this.dashboardLink.waitForClickable(),
            this.wishlistLink.waitForClickable(),
            this.editAccountLink.waitForClickable(),
            this.changePasswordLink.waitForClickable(),
            this.addressBookLink.waitForClickable(),
            this.orderHistoryLink.waitForClickable(),
            this.transactionHistoryLink.waitForClickable(),
            this.downloadsLink.waitForClickable(),
            this.notificationsLink.waitForClickable(),
            this.logOffLink.waitForDisplayed()
        ])
    }

}