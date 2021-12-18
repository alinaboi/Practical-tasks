import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import SearchPage from "../../pages/search.page.js"
import BasketPage from "../../pages/basket.page.js"
import AddressSelectPage from "../../pages/adress-select.page.js"
import AddressCreatePage from "../../pages/address-create.page.js"
import DeliveryMethodPage from "../../pages/delivery-method.page.js"
import PaymentShopPage from "../../pages/payment-shop.page.js"
import OrderSummaryPage from "../../pages/order-summary.page.js"
import OrderCompletionPage from "../../pages/order-completion.page.js"
import RegistrationViaApi from "../../api/registration.api.js";
import chai from "chai";

describe('Full purchase flow testing ', async () => {
    it('adding and removing items to the basket, completing purchase flow', async () => {
        //Precondition ->Registration via API
        let registrationApi = new RegistrationViaApi("Testuser9@gmail.com", "Testpass1");
        const response = await registrationApi.register();
        chai.expect(response.status).to.equal(201);

        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login("Testuser9@gmail.com", "Testpass1");

        //Search Page ->adding items
        await SearchPage.open();
        await SearchPage.waitForScreenToBeAvailable();
        //await SearchPage.footer.wdioElement.scrollIntoView();
        //await SearchPage.ithemsPerPageDropdown.wdioElement.waitForClickable({ timeout: 5000 });
        
        await SearchPage.addSalesmanArtworkBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await SearchPage.addSalesmanArtwork();
        await SearchPage.addPermafrost2020Edition();
        await SearchPage.addMelonBikeBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await SearchPage.addMelonBike();
        await SearchPage.openBasket();

        //Basket Page ->removing items, changing the quantity ->verify if the order correct
        await BasketPage.waitForScreenToBeAvailable();
        await expect(BasketPage.salesmanArtworkText.wdioElement).toBeDisplayed();
        await expect(BasketPage.permafrost2020EditionText.wdioElement).toBeDisplayed();
        await expect(BasketPage.melonBikeText.wdioElement).toBeDisplayed();
        await BasketPage.checkoutBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await BasketPage.checkout();

        //Adress Select Page ->adding an adress and selecting it
        await AddressSelectPage.waitForScreenToBeAvailable();
        await AddressSelectPage.addNewAddress();
        await AddressCreatePage.waitForScreenToBeAvailable();
        await AddressCreatePage.fillAddressFields("Ukraine", "Test User", "0633330000", "79000", "Rynok Square, 1", "Lviv", "Lvivs'ka");
        await AddressSelectPage.waitForScreenToBeAvailable();
        await AddressSelectPage.selectTheAddress();
        await AddressSelectPage.continue();


        //Delivery Method Page ->
        await DeliveryMethodPage.waitForScreenToBeAvailable();
        await DeliveryMethodPage.standardDelivery();
        await DeliveryMethodPage.continue();

        //Payment Shop Page ->adding a card and selecting it
        await PaymentShopPage.waitForScreenToBeAvailable();
        await PaymentShopPage.addNewCard();
        await PaymentShopPage.waitForScreenToBeAvailable();
        await PaymentShopPage.fillCardFields("Test User", "4953011022334455", "1", "2099");
        await PaymentShopPage.selectTheCard();
        await PaymentShopPage.continue();


        //Order-Summary Page ->verify if the order and customer's data correct
        await OrderSummaryPage.waitForScreenToBeAvailable();
        await expect(OrderSummaryPage.salesmanArtworkText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.permafrost2020EditionText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.melonBikeText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.customerPhoneNumber.wdioElement).toBeDisplayed();
        await OrderSummaryPage.submitOrder();

        //Order Completion Page ->verify if the order is complete
        await OrderCompletionPage.waitForScreenToBeAvailable();
        await expect(OrderCompletionPage.thankYouMsg.wdioElement).toBeDisplayed();

        //Search Page ->verify if the ithems marked as sold
        await SearchPage.open();
        await SearchPage.waitForScreenToBeAvailable();
        await SearchPage.soldOutLabel.waitForDisplayed();
        const countSoldOut = await SearchPage.soldOutLabel.wdioElement;
        console.log(JSON.stringify(countSoldOut) +"!!!!!!!!!!!!!!!!!!!!!!!!!!");
        //console.log(countSoldOut.length +"!!!!!!!!!!!!!!!!!!!!!!!!!!");
        
    });
});