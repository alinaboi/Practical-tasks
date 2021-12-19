import baseApi from "../base/base.api.js";

class CardApi {
    constructor() {}

    async addCard(personName, cardNumber, expieryM, expieryY) {
        return await baseApi.post("api/Cards/", {
            fullName: personName,
            cardNum: cardNumber,
            expMonth: expieryM,
            expYear: expieryY
        });
    }

}

export default new CardApi();