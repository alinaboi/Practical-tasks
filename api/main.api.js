import basketApi from "./basket.api.js";
import addressApi from "./address.api.js";
import cardApi from "./card.api.js";
import captchaApi from "./captcha.api.js";
import feadbackApi from "./feadback.api.js";
import loginApi from "./login.api.js";
import registrationApi from "./registration.api.js";
import checkoutApi from "./checkout.api.js";

import chai from "chai";

class Api {
    constructor() {
    }

    async addressApi() {
        return addressApi;
    }

    async cardApi() {
        return cardApi;
    }

    async captchaApi() {
        return captchaApi;
    }

    async feadbackApi() {
        return feadbackApi;
    }

    async loginApi() {
        return loginApi;
    }

    async registrationApi() {
        return registrationApi;
    }

    async basketApi() {
        return basketApi;
    }

    async checkoutApi() {
        return checkoutApi;
    }

    async verifyStatusCode(response, expectedCode = 200) {
        return chai.expect(response.status).to.be.equal(expectedCode);
    }

    async verifyStatusIsSuccess(response) {
        let status = await JSON.parse(response.text).status;
        chai.expect(status, "Response status doesn't match expected: success").equals('success');
    }
}

export default new Api();