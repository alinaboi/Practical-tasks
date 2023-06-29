import LoginPage from "../../../pages/login.page.js";
import MainPage from "../../../pages/main.page.js";
import SearchPage from "../../../pages/search.page.js";
import PaymentShopPage from "../../../pages/payment-shop.page.js";
import OrderCompletionPage from "../../../pages/order-completion.page.js";
import RegistrationViaApi from "../../../api/registration.api.js";

import { data } from "../../../data/test_data/00002_data.js";

describe("Full purchase flow testing ", async () => {
  let user;

  before("Register user using API method", async () => {
    //Precondition -> Registration via API
    user = await RegistrationViaApi.registerAndReturnUser();
    await MainPage.open();
    await MainPage.waitForScreenToBeAvailable();
    await MainPage.openAccountMenu();
    await MainPage.navigateToLogin();
    await LoginPage.waitForScreenToBeAvailable();
    await LoginPage.login(user.email, user.password);

});

it("15", async () => {
    //
    await SearchPage.open();
    await SearchPage.waitForScreenToBeAvailable();
    await MainPage.openAccountMenu();
    await MainPage.navigateToOrdersAndPayment();
    await MainPage.navigateToPayment();

    //
    await PaymentShopPage.waitForScreenToBeAvailable();
    await PaymentShopPage.clickAddNewCard();
    await PaymentShopPage.waitForScreenToBeAvailable();

    //
    await PaymentShopPage.fillName(data.fullName);
    await PaymentShopPage.fillCardNumber(data.fifteenDigitsCard);
    await PaymentShopPage.selectExpiryMonth(data.expMonth);
    await PaymentShopPage.selectExpiryYear(data.expYear);

    //
    await expect(PaymentShopPage.wrongCardNumberLengthMsg.wdioElement).toBeDisplayed();
  });
});
