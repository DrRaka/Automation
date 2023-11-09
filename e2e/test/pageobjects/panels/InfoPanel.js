import BasePageObject from "../base/BasePageObject.js";


export default class InfoPanel extends BasePageObject{

    get currencyButton () { return this.$(`//div[ul[contains(@class,'language')]]`);}
    get itemsButton () { return this.$(`//div[ul[contains(@class,'topcart')]]`);}

    constructor() {
        super();
        this.pageObjectName = 'Info';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.currencyButton.waitForClickable(),
            this.itemsButton.waitForClickable()
        ])
    }


}