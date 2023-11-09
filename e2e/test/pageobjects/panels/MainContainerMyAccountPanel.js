import BasePageObject from "../base/BasePageObject.js";
import MainContainerAccountPanel_Content from "./MainContainerAccountPanel_Content.js";
import MainContainerAccountPanel_Navigation from "./MainContainerAccountPanel_Navigation.js";

export default class MainContainerMyAccountPanel extends BasePageObject{

    contentPanel= null;
    navigationPanel = null;


    constructor() {
        super();
        this.pageObjectName = 'Main container - My account';
        this.pageObjectType = 'panel';
    }

    async isLoaded (){
        this.contentPanel = await MainContainerAccountPanel_Content.init();
        this.navigationPanel = await MainContainerAccountPanel_Navigation.init();
    }

}