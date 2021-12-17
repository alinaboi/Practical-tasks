import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import SearchPage from "../../pages/search.page.js"
import BasketPage from "../../pages/basket.page.js"
import AdressSelectPage from "../../pages/adress-select.page.js"
import DeliveryMethodPage from "../../pages/delivery-method.page.js"
import PaymentShopPage from "../../pages/payment-shop.page.js"
import OrderSummaryPage from "../../pages/order-summary.page.js"
import OrderCompletionPage from "../../pages/order-completion.page.js"

describe('Full purchase flow testing ', async () => {
    it('adding and removing items to the basket, completing purchase flow', async () => {
        
        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login('Funtic@gmail.com', 'Useruser1');

        //Search Page ->adding items
        await SearchPage.open();
        await SearchPage.waitForScreenToBeAvailable();
        //await SearchPage.footer.wdioElement.scrollIntoView();
        //await SearchPage.ithemsPerPageDropdown.wdioElement.waitForClickable({ timeout: 5000 });
        
        await SearchPage.changeIthemsQuantity("36");
        await SearchPage.addAppleJuice();
        await SearchPage.addApplePomace();
        await SearchPage.addBananaJuice();
        await SearchPage.addCarrotJuiceBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await SearchPage.addCarrotJuice();
        await SearchPage.addEggfruitJuice();
        await SearchPage.addGreenSmoothieBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await SearchPage.addGreenSmoothie();
        await SearchPage.addLemonJuice();
        await SearchPage.addOrangeJuice();
        await SearchPage.addStrawberryJuice();
        await SearchPage.openBasket();

        //Basket Page ->removing items, changing the quantity ->verify if the order correct
        await BasketPage.waitForScreenToBeAvailable();
        await BasketPage.removeStrawberryJuiceBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await BasketPage.removeStrawberryJuice();
        await BasketPage.removeApplePomace();
        await BasketPage.removeBananaJuice();
        await BasketPage.removeEggfruitJuice();
        await expect(BasketPage.appleJuiceText.wdioElement).toBeDisplayed();
        await expect(BasketPage.carrotJuiceText.wdioElement).toBeDisplayed();
        await expect(BasketPage.greenSmoothieText.wdioElement).toBeDisplayed();
        await expect(BasketPage.lemonJuiceText.wdioElement).toBeDisplayed();
        await expect(BasketPage.orangeJuiceText.wdioElement).toBeDisplayed();
        await BasketPage.checkout();

        //Adress Select Page ->adding an adress and selecting it
        await AdressSelectPage.waitForScreenToBeAvailable();
        await AdressSelectPage.addNewAddress();
        await AdressSelectPage.waitForScreenToBeAvailable();
        await AdressSelectPage.fillAddressFields("Ukraine", "Test User", "0633330000", "79000", "Rynok Square, 1", "Lviv", "Lvivs'ka");
        await AdressSelectPage.waitForScreenToBeAvailable();
        await AdressSelectPage.selectTheAddress();
        await AdressSelectPage.continue();


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
        await expect(OrderSummaryPage.appleJuiceText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.carrotJuiceText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.greenSmoothieText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.lemonJuiceText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.orangeJuiceText.wdioElement).toBeDisplayed();
        await expect(OrderSummaryPage.customerPhoneNumber.wdioElement).toBeDisplayed();
        await OrderSummaryPage.submitOrder();

        //Order Completion Page ->verify if the order is complete
        await OrderCompletionPage.waitForScreenToBeAvailable();
        await expect(OrderCompletionPage.thankYouMsg.wdioElement).toBeDisplayed();
        
    });
});