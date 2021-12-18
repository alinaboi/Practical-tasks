import AboutPage from "../../pages/about.page.js"
import MainPage from "../../pages/main.page.js"

describe('Navigation testing', async () => {
    it('test switching to social media pages through About page', async () => {

        //Main Page
        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openSideNavMenu();
        await MainPage.navigateToAboutPage();

        //About Page
        await AboutPage.navigateToFacebook();
        await browser.waitUntil(
            async () => {
                try {
                    await browser.switchWindow('facebook.com/owasp.juiceshop');
                } catch (e) {
                    return false;
                }
                return true;
            },
            {
                timeout: 5000,
                interval: 1000,
                timeoutMsg: 'expected Facebook Page is opened'
            }
        );
        
        //Verify the page is opened
        await expect ($('//span[text()="OWASP Juice Shop"]')).toBeDisplayed();
    });
});