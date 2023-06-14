import basketApi from "./basket.api.js";
import addressApi from "./address.api.js";
import cardApi from "./card.api.js";
import captchaApi from "./captcha.api.js";
import feadbackApi from "./feadback.api.js";
import loginApi from "./login.api.js";
import registrationApi from "./registration.api.js";
import checkoutApi from "./checkout.api.js";

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

}

export default new Api();