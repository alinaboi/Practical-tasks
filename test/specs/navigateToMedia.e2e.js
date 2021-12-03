import AboutPage from "../../pages/about.page.js"
import MainPage from "../../pages/main.page.js"

describe('Navigation testing', async () => {
    it('test switching to social media pages through About page', async () => {
        //Main Page
        await browser.pause(5000);
        await MainPage.open();
        await MainPage.openSideNavMenu();
        await browser.pause(3000);
        await MainPage.navigateToAboutPage();

        //About Page
        await browser.pause(5000);
        await AboutPage.navigateToFacebook();
        await browser.pause(4000);

        //Social Media Page
        await browser.switchWindow('facebook.com/owasp.juiceshop')
        await browser.pause(5000);
        //await browser.switchWindow('OWASP Juice Shop - Главная | Facebook');

        //Verify the page is opened
        await expect ($('//span[text()="OWASP Juice Shop"]')).toBeDisplayed();

        /*try {if (await $('//span[text()="OWASP Juice Shop"]').isDisplayed() === false) {
            throw new Error;
        }else{
            console.log("You are successfully moved to the Facebook page!");
        } }catch (error) {
            console.log("Oops. Something went wrong. "+ error);
        }
        await browser.pause(2000);*/
    });
});