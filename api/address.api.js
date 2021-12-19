import baseApi from "../base/base.api.js";

class AddressViaApi {
    constructor() {}

    async addAddress(userId, captchaId, captchaAnsw, comment, rating) {
        return await baseApi.post("api/Feedbacks/", {
            "UserId": userId,
            "captchaId": captchaId,
            "captcha": captchaAnsw,
            "comment": comment,
            "rating": rating
        });
    }

}

export default new AddressViaApi();