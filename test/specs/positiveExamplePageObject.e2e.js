import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"

describe('Login testing', async () => {
    it('positive login test using PageObject', async () => {
        //Main Page
        await browser.pause(5000);
        await MainPage.open();
        await MainPage.openAccountMenu();
        await MainPage.navigateToLogin();

        //Login Page
        await LoginPage.login('testemail@gmail.com', 'Testuserpass1');
        await browser.pause(3000);

        //Positive -> After login page
        await browser.pause(5000);
        await MainPage.openAccountMenu();


        //Verify Logout Button is displayed
        await expect(MainPage.logoutBtn).toBeDisplayed();

        /*try {
            if (await MainPage.isLogoutBtnDisplayed() === false) {
                throw new Error;
            } else {
                console.log("You are successfully logged in!");
            }
        } catch (error) {
            console.log("Oops. Something went wrong. " + error);
        }
        await browser.pause(2000);*/

    });
});