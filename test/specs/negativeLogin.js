import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import RegistrationViaApi from "../../api/registration.api.js";

describe('Login testing', async () => {
    it('negative login test using PageObject', async () => {
        //Precondition -> Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        //Main Page await MainPage.open();
        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.navigateToLogin();

        //Login Page
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login(user.email, user.password);

        //Negative -> Login page
        //Verify the message is displayed
        await MainPage.waitForScreenToBeAvailable();
        await expect(LoginPage.notloggedError.wdioElement).toBeDisplayed();
    });
});
