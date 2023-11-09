import BasePageObject from "./base/BasePageObject.js";
import MainNavigationPanel from "./panels/MainNavigationPanel.js";
import CategoryNavigationPanel from "./panels/CategoryNavigationPanel.js";
import InfoPanel from "./panels/InfoPanel.js";
import SliderPanel from "./panels/SliderPanel.js";
import MainContainerPanel from "./panels/MainContainerPanel.js";
import FooterPanel from "./panels/FooterPanel.js";

export default class LandingPage extends BasePageObject{

    mainNavigationPanel= null;
    infoPanel = null;
    categoryNavigationPanel = null;
    sliderPanel = null;
    mainContainerPanel = null;
    footerPanel = null;

    constructor() {
        super();
        this.pageObjectName = 'Landing';
        this.pageObjectType = 'page';
    }

    async isLoaded (){
        this.mainNavigationPanel = await MainNavigationPanel.init();
        this.infoPanel = await InfoPanel.init();
        this.categoryNavigationPanel = await CategoryNavigationPanel.init();
        this.sliderPanel = await SliderPanel.init();
        this.mainContainerPanel = await MainContainerPanel.init();
        this.footerPanel = await FooterPanel.init();
    }

    async getMainNavigationPanel(){
        return await MainNavigationPanel.init();
    }

}