import RegistrationViaApi from "../../../api/registration.api.js";
import LoginViaApi from "../../../api/login.api.js";
import FeadbackApi from "../../../api/feadback.api.js";
import chai from "chai";
import UserApi from "../../../api/user.api.js";
import CaptchaApi from "../../../api/captcha.api.js"

describe('API testing', async () => {
    it('adding Feadback via API', async () => {

        //Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        //Login
        const response = await LoginViaApi.loginAndSetToken(user.email, user.password);
        chai.expect(response.status).to.be.equal(200);

        //Getting UserID
        const userId = await UserApi.getMyUserId();
        console.log('My userId is: ' + userId);

        //Getting Captcha ID and Answer
        const captchaObject = await CaptchaApi.getCaptchaObject();
        console.log("Captcha ID is: " + captchaObject.captchaId);
        console.log("Captcha Answer is: " + captchaObject.answer);

        //Sending Feadback
        const feadbackResponse = await FeadbackApi.sendFeadback(userId, captchaObject.captchaId, captchaObject.answer, "some comment", 4);

        //Verifying
        chai.expect(feadbackResponse.status).to.be.equal(201);
    });
});
