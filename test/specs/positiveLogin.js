import LoginPage from "../../pages/login.page.js";
import MainPage from "../../pages/main.page.js";
import RegistrationViaApi from "../../api/registration.api.js";
import chai from "chai";


describe('Login testing', async () => {
    it('positive login test using PageObject', async () => {
        //Precondition ->Registration via API
        let registrationApi = new RegistrationViaApi("Testuser@gmail.com", "Testpass1");
        const response = await registrationApi.register();
        chai.expect(response.status).to.equal(201);


        //Main Page
        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await MainPage.navigateToLogin();

        //Login Page
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login("Testuser@gmail.com", "Testpass1");

        //Positive -> After login page
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();


        //Verify Logout Button is displayed
        await MainPage.waitForAccountMenuDropdownDisplated();
        await expect(MainPage.loggedInAccountMenu.wdioElement).toBeDisplayed();
        await expect(MainPage.logoutBtn.wdioElement).toBeDisplayed();
        

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