import registrationPage from "../../pages/registration.page.js";

describe('Negative registration testing', () => {
    it('registration with empty password test', async () => {

        //Registration Page
        await registrationPage.open();
        await registrationPage.waitForScreenToBeAvailable();
        await registrationPage.createLogin("abc..de@mail.com", "Superpass1");
        await registrationPage.selectQuestion("What's your favorite place to go hiking?");
        await registrationPage.createSecurityAnswer("Carpathians");
        await registrationPage.waitForScreenToBeAvailable();

        //Verify warning displayed
        await expect(registrationPage.invalidEmailMsg.wdioElement).toBeDisplayed();
    })
})