import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"

describe('Login testing', async () => {
    it('negative login test using PageObject', async () => {
        //Main Page
        await browser.pause(5000);
        await MainPage.open();
        await MainPage.openAccountMenu();
        await MainPage.navigateToLogin();

        //Login Page
        await LoginPage.login('jvfjkvk@gmail.com', 'cjhedfcbe');
        await browser.pause(3000);

        //Negative -> Login page
        //Verify the message is displayed
        await expect(LoginPage.unloggedError).toBeDisplayed();
        
        /*try {
            if (await LoginPage.isUnloggedErrorDisplayed === false) {
                throw new Error;
            } else {
                console.log("You are not logged into account. Please, check if your email and password correct.");
            }
        } catch (error) {
            console.log("Oops. Something went wrong. " + error);
        }
        await browser.pause(2000);*/

    });
});