import BaseApi from "../base/base.api.js";

class CaptchaApi {
    constructor() {}

    async getCaptcha() {
        return await BaseApi.get("rest/captcha/");
    }

    async getCaptchaObject() {
        const response = await this.getCaptcha();
        
        return JSON.parse(response.text);
        
    }
}

export default new CaptchaApi();