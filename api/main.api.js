import baseApi from "../base/base.api.js";
import addressApi from "./address.api.js";
import cardApi from "./card.api.js";
import captchaApi from "./captcha.api.js";
import feadbackApi from "./feadback.api.js";
import loginApi from "./login.api.js";
import registrationApi from "./registration.api.js";

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


    async addToBasket(bId, productId, quantity) {
        await allure.addStep(`POST add product ${productId} *${quantity} to the basket ${bId}`);
        let response = await baseApi.post("/api/BasketItems/", {
            "ProductId": productId,
            "BasketId": `${bId}`,
            "quantity": quantity
        });
        console.log(`RESPONSE ===>>> ${response}`)
        return response;
    }
}

export default new Api();