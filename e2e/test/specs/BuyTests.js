import MyAccountPage from "../pageobjects/MyAccountPage.js";
import {loginWithData} from "../pageobjects/base/TestBase.js";

describe('Login tests', () => {

    let myAccountPage;
    const username = 'test_99';
    const password = 'test99';

    beforeEach(async () => {
        await browser.url(`https://automationteststore.com/`);
        await browser.maximizeWindow();
        myAccountPage = await loginWithData(username, password);
    })

    it('Buy happy case', async () => {
        let homePage = await (await myAccountPage.getCategoryNavigationPanel()).clickHomeButton();
        let productPage = await homePage.clickProductCard('Acqua Di Gio Pour Homme');

        console.info('Verify that my account page is loaded');
        await expect(MyAccountPage);
    })

})

