
import RegistrationPage from "../../pages/registration.page.js";

describe('Negative registration testing', () => {
    it('registration with empty password test', async () => {

        //Registration Page
        await RegistrationPage.open();
        await RegistrationPage.waitForScreenToBeAvailable();
        await RegistrationPage.createLogin("NewUser2@gmail.com", "");
        await RegistrationPage.selectQuestion("What's your favorite place to go hiking?");
        await RegistrationPage.createSecurityAnswer("Carpathians");
        await RegistrationPage.waitForScreenToBeAvailable();

        //Verify warning displayed
        await expect(RegistrationPage.providePasswordMsg.wdioElement).toBeDisplayed();
        await expect(RegistrationPage.repeatPasswordMsg.wdioElement).toBeDisplayed();
    })
})