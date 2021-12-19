import RegistrationViaApi from "../../api/registration.api.js";
import LoginViaApi from "../../api/login.api.js";
import FeadbackApi from "../../api/feadback.api.js";
import chai from "chai";
import userApi from "../../api/user.api.js";

describe('API testing', async () => {
    it('adding Feadback via API', async () => {
        
        //Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();
        // Login
        const response = await LoginViaApi.loginAndSetToken(user.email, user.password);
        chai.expect(response.status).to.be.equal(200);

        //Getting UserID
        const userResponse = await userApi.getMyself();
        console.log("OOOOAlina" + JSON.stringify(userResponse));
        
        //Sending Feadback
        //const feadbackResponse = await FeadbackApi.sendFeadback()


    });
});
