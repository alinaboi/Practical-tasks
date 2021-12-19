import baseApi from "../base/base.api.js";

class UserApi {
    constructor() {}

    async getMyself() {
        return await baseApi.get("rest/user/whoami");
    }

    async getMyUserId() {
        const userResponse = await this.getMyself();
        return JSON.parse(userResponse.text).user.id;
    }
}

export default new UserApi();
