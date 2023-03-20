import RegistrationViaApi from "../../../api/registration.api.js";
import Api from "../../../api/login.api.js";
import AddressApi from "../../../api/address.api.js";
import chai from "chai";

describe('API testing', async () => {
    it('Adding Address via API ', async () => {
        //Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        //Login
        const response = await Api.loginAndSetToken(user.email, user.password);
        chai.expect(response.status).to.be.equal(200);

        //Sending Address
        const addressResponse = await AddressApi.addAddress("Ukr", "Person Name", "098765432", "90808", "User's Address");

        //Verifying
        chai.expect(addressResponse.status).to.be.equal(201);
    })

});