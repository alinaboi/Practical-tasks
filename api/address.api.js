import baseApi from "../base/base.api.js";

class AddressViaApi {
    constructor() {}

    async addAddress(address) {
        await allure.addStep(`POST Address`);
        return await baseApi.post("api/Addresss/", {
            country: address.country,
            fullName: address.personName,
            mobileNum: address.mobileNum,
            zipCode: address.zipCode,
            streetAddress: address.address
        });
        return response;
    }

} export default new AddressViaApi();