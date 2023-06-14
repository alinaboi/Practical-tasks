import Api from "../../../api/main.api.js";
import chai from "chai";
import { PRODUCTS } from "../../../data/product_data/products.js";
import { ADDRESSES, CARD } from "../../../data/user_data/user_data.js";

describe('API testing', async () => {
    let user;
    let response;
    let bId;
    let addressId;
    let paymentId

    before('Registration via API', async () => {

        user = await (await Api.registrationApi()).registerAndReturnUser();
    });

    it('Login via API', async () => {

        response = await (await Api.loginApi()).loginAndSetToken(user.email, user.password);
        await Api.verifyStatusCode(response);
        //Set basket Id
        bId = await JSON.parse(response.text).authentication.bid
    });

    it('Add to basket via API', async () => {

        let addToBasket = await (await Api.basketApi()).addToBasket(bId, PRODUCTS.appleJuice.id, 1); //TODO : move hardcoded value to data file, basketApi Component
        await Api.verifyStatusIsSuccess(addToBasket);
    });

    it('Add delivery address via API', async () => {

        let addAddress = await (await Api.addressApi()).addAddress(ADDRESSES._1); //TODO : move hardcoded value to data file
        addressId = await JSON.parse(addAddress.text).data.id;
        await Api.verifyStatusIsSuccess(addAddress);
    });

    it('Add payment card via API', async () => {

        let addCard = await (await Api.cardApi()).addCard(CARD.monoBank); //TODO : move hardcoded value to data file
        paymentId = await JSON.parse(addCard.text).data.id;
        await Api.verifyStatusIsSuccess(addCard);
    });

    it('Final checkout via API', async () => {

        let deliveryMethodId = "1"//TODO: move hardcoded deliveryMethodId
        let checkoutResponse = await (await Api.checkoutApi()).checkout(bId, addressId, deliveryMethodId, paymentId);
        await Api.verifyStatusCode(checkoutResponse);
        let orderConfirmation = await JSON.parse(checkoutResponse.text).orderConfirmation
        chai.expect(orderConfirmation, "Order confirmation should be present").is.not.undefined;
    });
});
