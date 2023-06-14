import baseApi from "../base/base.api.js";

class BasketApi {
    constructor() { }

    async addToBasket(bId, productId, quantity) {
        await allure.addStep(`POST add product ${productId} *${quantity} to the basket ${bId}`);
        let response = await baseApi.post("/api/BasketItems/", {
            "ProductId": productId,
            "BasketId": `${bId}`,
            "quantity": quantity
        });
        return response;
    }

} export default new BasketApi();