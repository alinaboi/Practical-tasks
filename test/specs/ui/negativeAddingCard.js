import LoginPage from "../../../pages/login.page.js"
import MainPage from "../../../pages/main.page.js"
import SavedPaymentMethodsPage from "../../../pages/saved-payment-methods.page.js"
import RegistrationViaApi from "../../../api/registration.api.js";

describe('Negative Card creation testing ', async () => {
    it('adding new card with incorrect card number input', async () => {
        //Precondition -> Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({ timeout: 10000 });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login(user.email, user.password);

        //Search Page -> Address Saved Page
        await MainPage.openAccountMenu();
        await expect(MainPage.loggedInAccountMenu.wdioElement).toBeDisplayed();
        await MainPage.navigateToOrdersAndPayment();
        await MainPage.navigateToPayment();

        //Payment Shop Page -> adding a card and selecting it
        await SavedPaymentMethodsPage.waitForScreenToBeAvailable();
        await SavedPaymentMethodsPage.clickAddNewCard();
        await SavedPaymentMethodsPage.waitForScreenToBeAvailable();
        await SavedPaymentMethodsPage.fillCardFields("Test User", "E", "1", "2080");

        //verify if Error massage displayed
        await expect(SavedPaymentMethodsPage.invalidCardNumberMsg.wdioElement).toBeDisplayed();
    });
});
