import baseApi from "../base/base.api.js";

class UserApi {
    constructor() { }

    async getMyself() {
        await allure.addStep(`GET whoami data`);
        return await baseApi.get("rest/user/whoami");
    }

    async getMyUserId() {
        await allure.addStep(`Get User ID`);
        const userResponse = await this.getMyself();
        return JSON.parse(userResponse.text).user.id;
    }
} export default new UserApi();
