import baseApi from "../base/base.api.js";

class Api {
    constructor() {
        this.token = '';
    }

    async login(email, password) {
        await allure.addStep(`POST User Login with ${email}`);
        return await baseApi.post("rest/user/login", {
            "email": email,
            "password": password
        });
    }

    async loginAndSetToken(email, password) {
        await allure.addStep(`POST User Login with ${email} and recive token`);
        const response = await this.login(email, password)
        this.token = JSON.parse(response.text).authentication.token;
        return response;
    }

    async addToBasket(bId, productId, quantity) {
        await allure.addStep(`POST add product ${productId} *${quantity} to the basket ${bId}`);
        return await baseApi.post("/api/BasketItems/", {
            "ProductId": productId,
            "BasketId": `${bId}`,
            "quantity": quantity
        });
        return response;
    }

    async addAddress(address) {
        await allure.addStep(`POST Address`);
        return await baseApi.post("api/Addresss/", {
            country: address.country,
            fullName: address.personName,
            mobileNum: address.mobileNum,
            zipCode: address.zipCode,
            streetAddress: address.address
        });
        return response;
    }
    
    async addCard(cardData) {
        await allure.addStep(`POST Card`);
        return await baseApi.post("api/Cards/", {
            fullName: cardData.personName,
            cardNum: cardData.cardNumber,
            expMonth: cardData.expieryM,
            expYear: cardData.expieryY
        });
        return response;
    }
}

export default new Api();