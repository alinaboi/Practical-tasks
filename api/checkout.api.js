import baseApi from "../base/base.api.js";

class CheckoutApi {
    constructor() {}

    async checkout(bId, addressId, deliveryMethodId, paymentId) {
        await allure.addStep(`POST checkout ${addressId} ${deliveryMethodId} ${paymentId}`);
        let response = await baseApi.post(`/rest/basket/${bId}/checkout`, {
            "couponData": "",
            "orderDetails": {
                "addressId": addressId,
                "deliveryMethodId": deliveryMethodId,
                "paymentId": paymentId
            }
        });
        return response;
    }

} export default new CheckoutApi();