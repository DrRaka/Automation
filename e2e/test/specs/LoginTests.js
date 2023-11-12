import LandingPage from "../pageobjects/LandingPage.js";
import MyAccountPage from "../pageobjects/MyAccountPage.js";
import LoginPage from "../pageobjects/LoginPage.js";
import { expect as expectChai } from 'chai';

describe('Login tests', () => {

    let landingPage;
    const username = 'test_99';
    const password = 'test99';
    const invalidUsername = 'testAUtomation';
    const invalidPassword = 'wrongPassword!1';

    beforeEach(async () => {
        await browser.url(`https://automationteststore.com/`);
        await browser.maximizeWindow();
        landingPage = await LandingPage.init();
    })

    it('Login happy case', async () => {
        let loginPage = await (await landingPage.getMainNavigationPanel()).clickLoginRegisterButton();
        let accountPanel = await loginPage.getAccountPanel();
        await accountPanel.enterUsername(username);
        await accountPanel.enterPassword(password);
        let profilePage = await accountPanel.clickLoginButton();

        console.info('Verify that my account page is loaded');
        await expect(MyAccountPage);
    })
    
})

