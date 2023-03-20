import RegistrationViaApi from "../../../api/registration.api.js";
import Api from "../../../api/login.api.js";
import chai from "chai";

describe('API testing', async () => {
    it('login via API', async () => {

        //Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();
        const response = await Api.login(user.email, user.password);
        chai.expect(response.status).to.be.equal(200);
    });
});
