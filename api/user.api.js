import baseApi from "../base/base.api.js";

class userApi {
    constructor() {}

    async getMyself() {
        return await baseApi.get("rest/user/whoami");
    }
}

export default new userApi();