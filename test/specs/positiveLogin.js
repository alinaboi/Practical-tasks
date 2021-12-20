import LoginPage from "../../pages/login.page.js";
import MainPage from "../../pages/main.page.js";
import RegistrationViaApi from "../../api/registration.api.js";

describe('Login testing', async () => {
    it('positive login test using PageObject', async () => {
        //Precondition ->Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        //Main Page
        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({timeout: 10000});
        await MainPage.navigateToLogin();

        //Login Page
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login(user.email, user.password);

        //Positive -> After login page
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();


        //Verify Logout Button is displayed
        await MainPage.waitForAccountMenuDropdownDisplated();
        await expect(MainPage.loggedInAccountMenu.wdioElement).toBeDisplayed();
        await expect(MainPage.logoutBtn.wdioElement).toBeDisplayed();
    });
});
