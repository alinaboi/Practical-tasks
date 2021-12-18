import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import SavedPaymentMethodsPage from "../../pages/saved-payment-methods.page.js"
import RegistrationViaApi from "../../api/registration.api.js";
import chai from "chai";

describe('Negative Card creation testing ', async () => {
    it('adding new card with incorrect card number input', async () => {
         //Precondition ->Registration via API
         let registrationApi = new RegistrationViaApi('AUser112@gmail.com', 'Useruser1');
         const response = await registrationApi.register();
         chai.expect(response.status).to.equal(201);
 
        
        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login('AUser112@gmail.com', 'Useruser1');

        //Search Page ->Address Saved Page
        await MainPage.openAccountMenu();
        await expect(MainPage.loggedInAccountMenu.wdioElement).toBeDisplayed();
        await MainPage.ordersAndPayment();
        await MainPage.navigateToPayment();

        //Payment Shop Page ->adding a card and selecting it
        await SavedPaymentMethodsPage.waitForScreenToBeAvailable();
        await SavedPaymentMethodsPage.addNewCard();
        await SavedPaymentMethodsPage.waitForScreenToBeAvailable();
        await SavedPaymentMethodsPage.fillCardFields("Test User", "E", "1", "2080");
        
        //verify if Error massege displayed
        await expect (SavedPaymentMethodsPage.invalidCardNumberMsg.wdioElement).toBeDisplayed();
        
    });
});