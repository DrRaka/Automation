import BasePageObject from "../base/BasePageObject.js";

export default class CategoryNavigationPanel extends BasePageObject{

    get homeCategory () { return this.$(`.//section[@id='categorymenu']/nav/ul/li[1]`);}
    get apparelCategory () { return this.$(`.//section[@id='categorymenu']/nav/ul/li[2]`);}
    get makeupCategory () { return this.$(`.//section[@id='categorymenu']/nav/ul/li[3]`);}
    get skincareCategory () { return this.$(`.//section[@id='categorymenu']/nav/ul/li[4]`);}
    get fragranceCategory () { return this.$(`.//section[@id='categorymenu']/nav/ul/li[5]`);}
    get menCategory () { return this.$(`.//section[@id='categorymenu']/nav/ul/li[6]`);}
    get hairCategory () { return this.$(`.//section[@id='categorymenu']/nav/ul/li[7]`);}
    get booksCategory () { return this.$(`.//section[@id='categorymenu']/nav/ul/li[8]`);}

    constructor() {
        super();
        this.pageObjectName = 'Category navigation';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        await Promise.all([
            this.homeCategory.waitForClickable(),
            this.apparelCategory.waitForClickable(),
            this.makeupCategory.waitForClickable(),
            this.skincareCategory.waitForClickable(),
            this.fragranceCategory.waitForClickable(),
            this.menCategory.waitForClickable(),
            this.hairCategory.waitForClickable(),
            this.booksCategory.waitForClickable(),
        ])
    }


}