import loginPage from "../../pages/login.page.js";
import registrationPage from "../../pages/registration.page.js";
import registrationApi from "../../api/registration.api.js";

describe ('Registration testing', () => {
    it ('positive registration test', async () => {

        //Registration Page
        await registrationPage.open();
        await registrationPage.waitForScreenToBeAvailable();
        await registrationPage.createLogin(await registrationApi.generateEmail(10), "Q1w2E3r40m");
        await registrationPage.selectQuestion("What's your favorite place to go hiking?");
        await registrationPage.createSecurityAnswer("Carpathians");
        await registrationPage.waitForScreenToBeAvailable();
        await registrationPage.registerBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await registrationPage.finishRegistration();

        //Verify Login Page is open
        await loginPage.waitForScreenToBeAvailable();
        await expect(loginPage.emailInput.wdioElement).toBeDisplayed();
    })
})