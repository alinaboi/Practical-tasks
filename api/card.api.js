import baseApi from "../base/base.api.js";

class CardApi {
    constructor() {}

    async addCard(cardData) {
        await allure.addStep(`POST Card`);
        return await baseApi.post("api/Cards/", {
            fullName: cardData.personName,
            cardNum: cardData.cardNumber,
            expMonth: cardData.expieryM,
            expYear: cardData.expieryY
        });
    }

} export default new CardApi();