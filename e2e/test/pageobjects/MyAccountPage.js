import BasePageObject from "./base/BasePageObject.js";
import MainNavigationPanel from "./panels/MainNavigationPanel.js";
import CategoryNavigationPanel from "./panels/CategoryNavigationPanel.js";
import InfoPanel from "./panels/InfoPanel.js";
import FooterPanel from "./panels/FooterPanel.js";
import MainContainerAccountPanel from "./panels/MainContainerAccountPanel.js";
import MainContainerMyAccountPanel from "./panels/MainContainerMyAccountPanel.js";

export default class MyAccountPage extends BasePageObject{

    mainNavigationPanel= null;
    infoPanel = null;
    categoryNavigationPanel = null;
    mainContainerMyAccountPanel = null;
    footerPanel = null;

    constructor() {
        super();
        this.pageObjectName = 'Login';
        this.pageObjectType = 'page';
    }

    async isLoaded (){
        this.mainNavigationPanel = await MainNavigationPanel.init();
        this.infoPanel = await InfoPanel.init();
        this.categoryNavigationPanel = await CategoryNavigationPanel.init();
        this.mainContainerMyAccountPanel = await MainContainerMyAccountPanel.init();
        this.footerPanel = await FooterPanel.init();
    }

    async getMainNavigationPanel(){
        return await MainNavigationPanel.init();
    }

    async getCategoryNavigationPanel(){
        return await CategoryNavigationPanel.init();
    }

}