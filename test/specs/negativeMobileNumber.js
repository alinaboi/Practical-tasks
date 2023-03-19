import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import AddressCreatePage from "../../pages/address-create.page.js"
import AddressSavedPage from "../../pages/address-saved.page.js"
import addressCreatePage from "../../pages/address-create.page.js";
import RegistrationViaApi from "../../api/registration.api.js";

describe('Negative Address creation testing ', async () => {
    it('adding new address with wrong mobile number input', async () => {
        //Precondition ->Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({ timeout: 10000 });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login(user.email, user.password);

        //Search Page ->Address Saved Page
        await MainPage.openAccountMenu();
        await expect(MainPage.loggedInAccountMenu.wdioElement).toBeDisplayed();
        await MainPage.ordersAndPayment();
        await MainPage.navigateToAddress();

        //Address Saved Page ->Address Create Page ->adding new address with wrong mobile number input
        await AddressSavedPage.waitForScreenToBeAvailable();
        await AddressSavedPage.addNewAddress();
        await AddressCreatePage.waitForScreenToBeAvailable();
        await AddressCreatePage.fillAddressFields("Ukraine", "Test User", "063,3330", "79000", "Rynok Square, 1", "Lviv", "Lvivs'ka");
        await addressCreatePage.submit();

        //verify if Error message displayed
        await expect(addressCreatePage.invalidMobileNumberMsg.wdioElement).toBeDisplayed();
    });
});
