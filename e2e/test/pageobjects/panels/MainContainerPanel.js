import BasePageObject from "../base/BasePageObject.js";


export default class MainContainerPanel extends BasePageObject{

    get mainContainer () { return this.$(`//div[@id='maincontainer']`);}

    constructor() {
        super();
        this.pageObjectName = 'Main container';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.mainContainer.waitForDisplayed()
        ])
    }


}