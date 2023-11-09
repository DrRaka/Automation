import BasePageObject from "../base/BasePageObject.js";


export default class SliderPanel extends BasePageObject{

    get slider () { return this.$(`//section[@class='slider']`);}

    constructor() {
        super();
        this.pageObjectName = 'Slider';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.slider.waitForDisplayed()
        ])
    }


}