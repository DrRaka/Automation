import LandingPage from "../LandingPage.js";

export async function loginWithData(username, password){
        let landingPage = await LandingPage.init();
        let loginPage = await (await landingPage.getMainNavigationPanel()).clickLoginRegisterButton();
        let accountPanel = await loginPage.getAccountPanel();
        await accountPanel.enterUsername(username);
        await accountPanel.enterPassword(password);
        return await accountPanel.clickLoginButton();
}