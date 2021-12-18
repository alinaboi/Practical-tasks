import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import SearchPage from "../../pages/search.page.js"
import BasketPage from "../../pages/basket.page.js"
import AddressSelectPage from "../../pages/address-select.page.js"
import AddressCreatePage from "../../pages/address-create.page.js"
import DeliveryMethodPage from "../../pages/delivery-method.page.js"
import PaymentShopPage from "../../pages/payment-shop.page.js"
import OrderSummaryPage from "../../pages/order-summary.page.js"
import OrderCompletionPage from "../../pages/order-completion.page.js"
import RegistrationViaApi from "../../api/registration.api.js";
import chai from "chai";

describe('Buying the last item flow testing ', async () => {
    it('adding and removing items to the basket, completing purchase flow', async () => {
        //Precondition -> Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({timeout: 5000});
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login(user.email, user.password);

        //Search Page ->adding items
        await SearchPage.open();
        await SearchPage.waitForScreenToBeAvailable();

        await SearchPage.addSalesmanArtwork();
        await SearchPage.addPermafrost2020Edition();
        await SearchPage.addMelonBike();
        await SearchPage.openBasket();

        //Basket Page -> removing items, changing the quantity ->verify if the order correct
        await BasketPage.waitForScreenToBeAvailable();
        await expect(BasketPage.salesmanArtworkText.wdioElement).toBeDisplayed();
        await expect(BasketPage.permafrost2020EditionText.wdioElement).toBeDisplayed();
        await expect(BasketPage.melonBikeText.wdioElement).toBeDisplayed();
        await BasketPage.checkoutBtn.wdioElement.waitForClickable({timeout: 10000});
        await BasketPage.checkout();

        //Address Select Page -> adding an address and selecting it
        await AddressSelectPage.waitForScreenToBeAvailable();
        await AddressSelectPage.addNewAddress();
        await AddressCreatePage.waitForScreenToBeAvailable();
        await AddressCreatePage.fillAddressFields("Ukraine", "Test User", "0633330000", "79000", "Rynok Square, 1", "Lviv", "Lvivs'ka");
        await AddressCreatePage.submit();
        await AddressSelectPage.waitForScreenToBeAvailable();
        await AddressSelectPage.selectTheAddress();
        await AddressSelectPage.continue();


        //Delivery Method Page ->
        await DeliveryMethodPage.waitForScreenToBeAvailable();
        await DeliveryMethodPage.standardDelivery();
        await DeliveryMethodPage.continue();

        //Payment Shop Page -> adding a card and selecting it
        await PaymentShopPage.waitForScreenToBeAvailable();
        await PaymentShopPage.addNewCard();
        await PaymentShopPage.waitForScreenToBeAvailable();
        await PaymentShopPage.fillCardFields("Test User", "4953011022334455", "1", "2099");
        await PaymentShopPage.selectTheCard();
        await PaymentShopPage.continue();


        //Order-Summary Page -> verify if the order and customer's data correct
        await OrderSummaryPage.waitForScreenToBeAvailable();
        await expect(OrderSummaryPage.salesmanArtworkText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.permafrost2020EditionText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.melonBikeText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.customerPhoneNumber.wdioElement).toBeDisplayed();
        await OrderSummaryPage.submitOrder();

        //Order Completion Page -> verify if the order is complete
        await OrderCompletionPage.waitForScreenToBeAvailable();
        await expect(OrderCompletionPage.thankYouMsg.wdioElement).toBeDisplayed();

        //Search Page -> verify if the items marked as sold
        await SearchPage.open();
        await SearchPage.waitForScreenToBeAvailable();
        const countSoldOut = await SearchPage.soldOutLabel.wdioElement.length;
        chai.expect(countSoldOut).to.equal(3);
    });
});
