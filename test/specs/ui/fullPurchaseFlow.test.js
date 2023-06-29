import LoginPage from "../../../pages/login.page.js";
import MainPage from "../../../pages/main.page.js";
import SearchPage from "../../../pages/search.page.js";
import BasketPage from "../../../pages/basket.page.js";
import AddressSelectPage from "../../../pages/address-select.page.js";
import AddressCreatePage from "../../../pages/address-create.page.js";
import DeliveryMethodPage from "../../../pages/delivery-method.page.js";
import PaymentShopPage from "../../../pages/payment-shop.page.js";
import OrderSummaryPage from "../../../pages/order-summary.page.js";
import OrderCompletionPage from "../../../pages/order-completion.page.js";
import RegistrationViaApi from "../../../api/registration.api.js";

import { PRODUCTS } from "../../../data/product_data/products.js";

import { data } from "../../../data/test_data/00001_data.js";

describe("Full purchase flow testing ", async () => {
  let user;

  before("Register user using API method", async () => {
    //Precondition -> Registration via API
    user = await RegistrationViaApi.registerAndReturnUser();
  });

  it("Adding and removing items to the basket, completing purchase flow", async () => {
    await MainPage.open();
    await MainPage.waitForScreenToBeAvailable();
    await MainPage.openAccountMenu();
    await MainPage.navigateToLogin();
    await LoginPage.waitForScreenToBeAvailable();
    await LoginPage.login(user.email, user.password);

    //Search Page -> adding items
    await SearchPage.open();
    await SearchPage.waitForScreenToBeAvailable();

    await SearchPage.changeIthemsQuantity("36");
    await SearchPage.clickAddToBasketByIndex(PRODUCTS.appleJuice.searchOrder);
    await SearchPage.clickAddToBasketByIndex(PRODUCTS.applePomace.searchOrder);
    await SearchPage.clickAddToBasketByIndex(PRODUCTS.bananaJuice.searchOrder);
    await SearchPage.clickAddToBasketByIndex(PRODUCTS.carrotJuice.searchOrder);
    await SearchPage.clickAddToBasketByIndex(
      PRODUCTS.eggfruitJuice.searchOrder
    );
    await SearchPage.clickAddToBasketByIndex(
      PRODUCTS.greenSmoothie.searchOrder
    );
    await SearchPage.clickAddToBasketByIndex(PRODUCTS.lemonJuice.searchOrder);
    await SearchPage.clickAddToBasketByIndex(PRODUCTS.orangeJuice.searchOrder);
    await SearchPage.clickAddToBasketByIndex(
      PRODUCTS.strawberryJuice.searchOrder
    );
    await SearchPage.openBasket();

    //Basket Page ->removing items, changing the quantity ->verify if the order correct
    await BasketPage.waitForScreenToBeAvailable();
    await BasketPage.clickRemoveByProductText(PRODUCTS.strawberryJuice.text);
    await BasketPage.clickRemoveByProductText(PRODUCTS.applePomace.text);
    await BasketPage.clickRemoveByProductText(PRODUCTS.bananaJuice.text);
    await BasketPage.clickRemoveByProductText(PRODUCTS.eggfruitJuice.text);
    // await expect(BasketPage.appleJuiceText.wdioElement).toBeDisplayed();
    // await expect(BasketPage.carrotJuiceText.wdioElement).toBeDisplayed();
    // await expect(BasketPage.greenSmoothieText.wdioElement).toBeDisplayed();
    // await expect(BasketPage.lemonJuiceText.wdioElement).toBeDisplayed();
    // await expect(BasketPage.orangeJuiceText.wdioElement).toBeDisplayed();
    await BasketPage.clickCheckout();

    //Address Select Page ->adding an address and selecting it
    await AddressSelectPage.waitForScreenToBeAvailable();
    await AddressSelectPage.clickAddNewAddress();
    await AddressCreatePage.waitForScreenToBeAvailable();
    await AddressCreatePage.fillAddressFields(data.address);
    await AddressCreatePage.clickSubmit();
    await AddressSelectPage.waitForScreenToBeAvailable();
    await AddressSelectPage.clickSelectTheAddress(data.address.fullName);
    await AddressSelectPage.clickContinue();

    //Delivery Method Page ->
    await DeliveryMethodPage.waitForScreenToBeAvailable();
    await DeliveryMethodPage.selectStandardDelivery();
    await DeliveryMethodPage.clickContinue();

    //Payment Shop Page ->adding a card and selecting it
    await PaymentShopPage.waitForScreenToBeAvailable();
    await PaymentShopPage.clickAddNewCard();
    await PaymentShopPage.waitForScreenToBeAvailable();
    await PaymentShopPage.fillCardFields(data.paymentMethod);
    await PaymentShopPage.selectTheCard();
    await PaymentShopPage.clickContinue();

    //Order-Summary Page ->verify if the order and customer's data correct
    await OrderSummaryPage.waitForScreenToBeAvailable();
    await expect(OrderSummaryPage.appleJuiceText.wdioElement).toBeDisplayed();
    await expect(OrderSummaryPage.carrotJuiceText.wdioElement).toBeDisplayed();
    await expect(
      OrderSummaryPage.greenSmoothieText.wdioElement
    ).toBeDisplayed();
    await expect(OrderSummaryPage.lemonJuiceText.wdioElement).toBeDisplayed();
    await expect(OrderSummaryPage.orangeJuiceText.wdioElement).toBeDisplayed();
    await expect(
      await await (await OrderSummaryPage.getCustomerPhoneNumber(data.address.mobileNum)).wdioElement
    ).toBeDisplayed();
    await OrderSummaryPage.submitOrder();

    //Order Completion Page ->verify if the order is complete
    await OrderCompletionPage.waitForScreenToBeAvailable();
    await expect(OrderCompletionPage.thankYouMsg.wdioElement).toBeDisplayed();
  });
});
