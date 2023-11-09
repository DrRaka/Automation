import BasePageObject from "../base/BasePageObject.js";


export default class FooterPanel extends BasePageObject{

    get footer () { return this.$(`//div[@id='footer']`);}

    constructor() {
        super();
        this.pageObjectName = 'Main container';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.footer.waitForDisplayed()
        ])
    }


}