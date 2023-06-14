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
        chai.expect(response.status).to.be.equal(200); //TODO : move verifications to mainApi
        //Set basket Id
        bId = await JSON.parse(response.text).authentication.bid
    });

    it('Add to basket via API', async () => {

        let addToBasket = await (await Api.basketApi()).addToBasket(bId, PRODUCTS.appleJuice.id, 1); //TODO : move hardcoded value to data file, basketApi Component
        let addToBasketStatus = await JSON.parse(addToBasket.text).status; //TODO : create status parser in helpers and reuse
        chai.expect(addToBasketStatus, "Adding product to the basket failed").equals('success');
    });

    it('Add delivery address via API', async () => {

        let addAddress = await (await Api.addressApi()).addAddress(ADDRESSES._1); //TODO : move hardcoded value to data file
        addressId = await JSON.parse(addAddress.text).data.id;
        let addAddressStates = await JSON.parse(addAddress.text).status;
        chai.expect(addAddressStates, "Adding delivery address failed").equals('success');
    });

    it('Add payment card via API', async () => {

        let addCard = await (await Api.cardApi()).addCard(CARD.monoBank); //TODO : move hardcoded value to data file
        paymentId = await JSON.parse(addCard.text).data.id;
        let addCardStatus = await JSON.parse(addCard.text).status;
        chai.expect(addCardStatus, "Adding payment card failed").equals('success');
    });

    it('Final checkout via API', async () => {
        
        let deliveryMethodId = "1"//TODO: move hardcoded deliveryMethodId
        let checkoutResponse = await (await Api.checkoutApi()).checkout(bId, addressId, deliveryMethodId, paymentId);  
        let checkoutStatus = await checkoutResponse.status
        chai.expect(checkoutStatus, "Checkout failed").equals(200);
        let orderConfirmation = await JSON.parse(checkoutResponse.text).orderConfirmation
        chai.expect(orderConfirmation, "Order confirmation should be present").is.not.undefined;
    });
});
