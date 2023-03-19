import RegistrationViaApi from "../../api/registration.api.js";
import chai from "chai";

describe('API testing', async () => {
    it('Registration via API ', async () => {

        //Registration via API
        const email = await RegistrationViaApi.generateEmail(5);
        const response = await RegistrationViaApi.register(email, "password");
        chai.expect(response.status).to.be.equal(201);
    });

    it('Negative registration via API / The user is already exist', async () => {

        //Registration via API
        const email = await RegistrationViaApi.generateEmail(5);
        const response = await RegistrationViaApi.register(email, "password");
        chai.expect(response.status).to.be.equal(201);

        const wrongResponse = await RegistrationViaApi.register(email, "password");
        chai.expect(wrongResponse.status).to.be.equal(400);
    });
});
