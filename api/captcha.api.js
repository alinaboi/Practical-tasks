import BaseApi from "../base/base.api.js";

class CaptchaApi {
    constructor() {}

    async getCaptcha() {
        await allure.addStep(`GET Captcha`);
        return await BaseApi.get("rest/captcha/");
    }

    async getCaptchaObject() {
        await allure.addStep(`Get Captcha Obdject`);
        const response = await this.getCaptcha();
        return JSON.parse(response.text);
        
    }
} export default new CaptchaApi();