import RegistrationViaApi from "../../../api/registration.api.js";
import Api from "../../../api/main.api.js";
import chai from "chai";
import { PRODUCTS } from "../../../data/product_data/products.js";
import { ADDRESSES, CARD } from "../../../data/user_data/user_data.js";

describe('API testing', async () => {
    let user;
    let response;
    let bId;

    before('Registration via API', async () => {

        user = await RegistrationViaApi.registerAndReturnUser();
    });

    it('Login via API', async () => {

        response = await Api.loginAndSetToken(user.email, user.password);
        chai.expect(response.status).to.be.equal(200);
        //Set basket Id
        bId = await JSON.parse(response.text).authentication.bid
    });

    it('Add to basket via API', async () => {

        let addToBasket = await Api.addToBasket(bId, PRODUCTS.appleJuice.id, 1); //TODO : move hardcoded value to data file
        let addToBasketStatus = await JSON.parse(addToBasket.text).status;
        chai.expect(addToBasketStatus, "Adding product to the basket failed").equals('success');
    });

    it('Add delivery address via API', async () => {

        let addAddress = await Api.addAddress(ADDRESSES._1); //TODO : move hardcoded value to data file
        let addAddressStates = await JSON.parse(addAddress.text).status;
        chai.expect(addAddressStates, "Adding delivery address failed").equals('success');
    });

    it('Add payment card via API', async () => {

        let addCard = await Api.addCard(CARD.monoBank); //TODO : move hardcoded value to data file
        let addCardStatus = await JSON.parse(addCard.text).status;
        chai.expect(addCardStatus, "Adding payment card failed").equals('success');
    });
});
