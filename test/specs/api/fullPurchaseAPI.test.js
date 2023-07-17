import Api from "../../../api/main.api.js";
import chai from "chai";
import { data } from "../../../data/test_data/00001_data.js";

describe("API testing", async () => {
  let user;
  let response;
  let bId;
  let addressId;
  let paymentId;

  before("Registration via API", async () => {
    user = await Api.registrationApi().registerAndReturnUser();
  });

  it("Login via API", async () => {
    response = await Api.loginApi().loginAndSetToken(user.email, user.password);
    Api.verifyStatusCode(response);
    //Set basket Id
    bId = await JSON.parse(response.text).authentication.bid;
  });

  it("Add to basket via API", async () => {
    let addToBasket = await Api.basketApi().addToBasket(
      bId,
      data.productId,
      data.productQuantity
    );
    await Api.verifyStatusIsSuccess(addToBasket);
  });

  it("Add delivery address via API", async () => {
    let addAddress = await Api.addressApi().addAddress(data.address);
    addressId = await JSON.parse(addAddress.text).data.id;
    await Api.verifyStatusIsSuccess(addAddress);
  });

  it("Add payment card via API", async () => {
    let addCard = await Api.cardApi().addCard(data.paymentMethod);
    paymentId = await JSON.parse(addCard.text).data.id;
    await Api.verifyStatusIsSuccess(addCard);
  });

  it("Final checkout via API", async () => {
    let checkoutResponse = await Api.checkoutApi().checkout(
      bId,
      addressId,
      data.deliveryMethod,
      paymentId
    );
    Api.verifyStatusCode(checkoutResponse);
    let orderConfirmation = await JSON.parse(checkoutResponse.text)
      .orderConfirmation;
    chai.expect(orderConfirmation, "Order confirmation should be present").is
      .not.undefined;
  });
});
