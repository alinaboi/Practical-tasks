import RegistrationViaApi from "../../api/registration.api.js";
import LoginViaApi from "../../api/login.api.js";
import CardApi from "../../api/card.api.js";
import chai from "chai";

describe('API testing', async () => {
    it('Adding New Card via API ', async () => {
        //Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        //Login
        const response = await LoginViaApi.loginAndSetToken(user.email, user.password);
        chai.expect(response.status).to.be.equal(200);

        //Adding Card
        const cardResponse = await CardApi.addCard("Person Name", "1987654321234567", "1", "2090");

        //Verifying
        chai.expect(cardResponse.status).to.be.equal(201);
    });
    it('Adding Empty Card via API ', async () => {
        //Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        //Login
        const response = await LoginViaApi.loginAndSetToken(user.email, user.password);
        chai.expect(response.status).to.be.equal(200);

        //Adding Empty Card
        const cardResponse = await CardApi.addCard("", "", "", "");

        //Verifying
        chai.expect(cardResponse.status).to.be.equal(400);
    })

});