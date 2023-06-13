import baseApi from "../base/base.api.js";

class LoginViaApi {

    constructor() {
        this.token = '';
    }


    async loginAndSetToken(email, password) {
        await allure.addStep(`POST User Login with ${email} and recive token`);
        const response = await baseApi.post("rest/user/login", {
            "email": email,
            "password": password
        });

        this.token = JSON.parse(response.text).authentication.token;
        return response;
    }

    async login(email, password) {
        await allure.addStep(`POST User Login with ${email}`);
        return await baseApi.post("rest/user/login", {
            "email": email,
            "password": password
        });
    }
} export default new LoginViaApi();