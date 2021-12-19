import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import ProfilePage from "../../pages/profile.page.js"
import RegistrationViaApi from "../../api/registration.api.js";

describe('Editing profile info testing ', async () => {
    it('updating user\'s username', async () => {
        // Precondition -> Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({
            timeout: 10000
        });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login(user.email, user.password);
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.navigateToProfile();

        // set username and verify it is there
        await ProfilePage.setUsernameAndVerify('SuperUser');
    });
});
