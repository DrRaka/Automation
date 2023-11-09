
export default class BasePageObject {

    pageObjectName = 'Base Page';
    pageObjectType = 'object';
    root = browser;

    constructor(root) {
        this.root = root;
    }

    static async init(...args) {
        const instance = new this(
            ...args);
        if(arguments.length > 0) {
            instance.root = arguments[0];
        }
        if(instance.isLoaded) {
            await instance.isLoaded();
        }
        return instance;
    }

    $ = (...args) => {
        if (this.root) { return this.root.$(...args); }
        else { return $(...args); }
    };

    $$ = (...args) => {
        if (this.root) { return this.root.$$(...args); }
        else { return $$(...args); }
    };

    async getPageObjectOrNull(pageObject) {
        try {
            return await pageObject.init();
        } catch (e) {
            console.log('Page object is not visible: ', pageObject);
            return null;
        }
    }

    async getElementsText(element) {
        return (await element.getText()).trim();
    }

    // logClickButton(name) {
    //     this.logClick(name, 'button');
    // }
    //
    // logClick(name, type) {
    //     const message = 'Click on the \"' + name + '\" ' + type + ' on the \"' + this.pageObjectName + '\" ' + this.pageObjectType;
    //     this.logStep(message);
    // }
    //
    // logEnter(name) {
    //     const message = 'Enter text into the \"' + name + '\" field on the \"' + this.pageObjectName + '\" ' + this.pageObjectType;
    //     this.logStep(message);
    // }
    //
    // logStep(step) {
    //     console.debug(getLogPrefix() + 'DEBUG - '+ step);
    //     getLogger().debug(step);
    // }

    async isElementPresent(element) {
        let isPresent = false;
        let i = 20;
        while(!isPresent && (i > 0)) {
            isPresent = await this.$(element).isExisting();
            await browser.pause(200);
            i--;
        }
        return isPresent;
    }

    async isElementPresentOnBase(element) {
        let isPresent = false;
        let i = 20;
        while(!isPresent && (i > 0)) {
            isPresent = await $(element).isExisting();
            await browser.pause(200);
            i--;
        }
        return isPresent;
    }

    async isPageObjectPresent(pageObject) {
        try {
            await pageObject.init();
            return true;
        } catch (e) {
            return false;
        }
    }

    async clearInput(element) {
        const wordArray = (await element.getAttribute('value')).split('');
        const counter = 2 * wordArray.length - 1;
        for(let i = 0; i <= counter; i++) {
            await element.doubleClick(); //selects the text written in the input
            await browser.keys('Backspace'); //removes old value
        }
    }

    async enterTextIntoInput(element, text) {
        await this.clearInput(element);
        await element.setValue(text);
    }


}
