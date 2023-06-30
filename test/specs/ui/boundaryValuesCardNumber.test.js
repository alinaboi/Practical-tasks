import LoginPage from "../../../pages/login.page.js";
import MainPage from "../../../pages/main.page.js";
import SearchPage from "../../../pages/search.page.js";
import PaymentShopPage from "../../../pages/payment-shop.page.js";
import RegistrationViaApi from "../../../api/registration.api.js";

import { data } from "../../../data/test_data/00002_data.js";

describe("Boundary Values. Card Number field", async () => {
  let user;

  before("Register user and log in", async () => {
    //Precondition -> Registration via API & UI Login
    user = await RegistrationViaApi.registerAndReturnUser();
    await MainPage.open();
    await MainPage.waitForScreenToBeAvailable();
    await MainPage.openAccountMenu();
    await MainPage.navigateToLogin();
    await LoginPage.waitForScreenToBeAvailable();
    await LoginPage.login(user.email, user.password);
  });

  it("Try fifteen digits card number", async () => {
    //Navigating to Payment Page
    await SearchPage.open();
    await SearchPage.waitForScreenToBeAvailable();
    await MainPage.openAccountMenu();
    await MainPage.navigateToOrdersAndPayment();
    await MainPage.navigateToPayment();

    await PaymentShopPage.waitForScreenToBeAvailable();
    await PaymentShopPage.clickAddNewCard();
    await PaymentShopPage.waitForScreenToBeAvailable();

    //Try fifteen digits card number
    await PaymentShopPage.fillName(data.fullName);
    await PaymentShopPage.fillCardNumber(data.fifteenDigitsCard);
    await PaymentShopPage.selectExpiryMonth(data.expMonth);
    await PaymentShopPage.selectExpiryYear(data.expYear);

    //Verify Error is displayed
    await expect(
      PaymentShopPage.wrongCardNumberLengthMsg.wdioElement
    ).toBeDisplayed();
  });

  it("Try seventeen digits card number", async () => {
    await allure.addIssue(
      `!Bug found : System allows to add card with 17 digits lenght!`
    );

    //Try seventeen digits card number
    await PaymentShopPage.fillCardNumber(data.seventeenDigitsCard);
    await PaymentShopPage.personNameInput.click();

    //Verify Error is displayed
    await expect(
      PaymentShopPage.wrongCardNumberLengthMsg.wdioElement
    ).toBeDisplayed();
  });

  it("Try sixteen digits card number", async () => {
    //Try sixteen digits card number
    await PaymentShopPage.fillCardNumber(data.sixteenDigitsCard);
    await PaymentShopPage.personNameInput.click();

    //Verify Error is NOT displayed and Submit button is clickable
    await expect(
      PaymentShopPage.wrongCardNumberLengthMsg.wdioElement
    ).not.toBeDisplayed();
    await expect(PaymentShopPage.submitBtn.wdioElement).toBeEnabled();
    await expect(PaymentShopPage.submitBtn.wdioElement).toBeClickable();
  });
});
