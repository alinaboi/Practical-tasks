import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import ContactPage from "../../pages/contact.page.js"
import RegistrationViaApi from "../../api/registration.api.js";

describe('Leaving customer feedback ', async () => {
    it('leaving a feedback with rating 3', async () => {
        //Precondition -> Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({timeout: 5000});
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login(user.email, user.password);
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openSideNavMenu();
        await MainPage.navigateToContactPage();

        //Contact Page -> leaving a feedback
        await ContactPage.waitForScreenToBeAvailable();
        await ContactPage.fillFeedbackFields('some comment', 3);

        //Verify successful message is displayed
        await expect(ContactPage.successfulFeedbackMessageElement).toBeDisplayed();
    });
});
