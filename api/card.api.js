import baseApi from "../base/base.api.js";

class CardApi {
    constructor() {}

    async addCard(personName, cardNumber, expieryM, expieryY) {
        await allure.addStep(`POST Card`);
        return await baseApi.post("api/Cards/", {
            fullName: personName,
            cardNum: cardNumber,
            expMonth: expieryM,
            expYear: expieryY
        });
    }

}

export default new CardApi();