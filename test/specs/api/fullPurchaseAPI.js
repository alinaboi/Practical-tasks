import RegistrationViaApi from "../../../api/registration.api.js";
import LoginViaApi from "../../../api/login.api.js";
import chai from "chai";
import { PRODUCTS } from "../../../data/product_data/products.js";

describe('API testing', async () => {
    let user;
    let response;
    let bId;

    it('Login via API', async () => {

        //Registration via API
        user = await RegistrationViaApi.registerAndReturnUser();
        response = await LoginViaApi.loginAndSetToken(user.email, user.password);
        chai.expect(response.status).to.be.equal(200);
        //Set basket Id
        bId = await JSON.parse(response.text).authentication.bid
    });

    it('Add to basket via API', async () => {

        console.log(`!!! ${bId}`);
        let addToBasket = await LoginViaApi.addToBasket(bId, PRODUCTS.appleJuice.id, 1); //TODO : move hardcoded value to data file
        let addToBasketStatus = await JSON.parse(addToBasket.text).status;
        chai.expect(addToBasketStatus, "error").equals('success');
    });
});
