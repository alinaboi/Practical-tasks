import baseApi from "../base/base.api.js";

class FeadbackViaApi {
    constructor() {}

    async sendFeadback(userId, captchaId, captchaAnsw, comment, rating) {
        await allure.addStep(`POST Feedback`);
        return await baseApi.post("api/Feedbacks/", {
            "UserId": userId,
            "captchaId": captchaId,
            "captcha": captchaAnsw,
            "comment": comment,
            "rating": rating
        });
    }

} export default new FeadbackViaApi();