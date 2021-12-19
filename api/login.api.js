import baseApi from "../base/base.api.js";

class LoginViaApi {
    constructor() {
        this.token = '';
    }


    async loginAndSetToken(email, password) {
        const response = await baseApi.post("rest/user/login", {
            "email": email,
            "password": password
        });
        await console.log('ALinaaaaao6 ' + JSON.stringify(JSON.parse(response.text)));


        this.token = JSON.parse(response.text).authentication.token;
        await console.log('Tooooooken' + this.token)
        return response;
    }

    async login(email, password) {
        return await baseApi.post("rest/user/login", {
            "email": email,
            "password": password
        });
    }
}

export default new LoginViaApi();