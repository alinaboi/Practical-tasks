import LoginPage from "../../../pages/login.page.js"
import MainPage from "../../../pages/main.page.js"
import AddressCreatePage from "../../../pages/address-create.page.js"
import AddressSavedPage from "../../../pages/address-saved.page.js"
import RegistrationViaApi from "../../../api/registration.api.js";
import chai from "chai";

describe('Negative Address creation testing ', async () => {
    it('adding new address with wrong input', async () => {
        //Precondition ->Registration via API
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

        //Search Page ->Address Saved Page
        await MainPage.openAccountMenu();
        await expect(MainPage.loggedInAccountMenu.wdioElement).toBeDisplayed();
        await MainPage.navigateToOrdersAndPayment();
        await MainPage.navigateToAddress();

        //Address Saved Page ->Address Create Page ->adding new address with wrong mobile number input
        await AddressSavedPage.waitForScreenToBeAvailable();
        await AddressSavedPage.clickAddNewAddress();
        await AddressCreatePage.waitForScreenToBeAvailable();
        await AddressCreatePage.fillAddressFields("@#$1.", "@#$1.", "06333330", "@#$1.", "@#$1.", "@#$1.", "@#$1.");

        //verify if Error massage displayed
        await AddressCreatePage.submitBtn.waitForDisplayed();
        chai.expect(await AddressCreatePage.submitBtn.wdioElement.isEnabled()).to.be.false;
    });
});
