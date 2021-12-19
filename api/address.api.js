import baseApi from "../base/base.api.js";

class AddressViaApi {
    constructor() {}

    async addAddress(contry, personName, mobileNum, zipCode, address) {
        return await baseApi.post("api/Addresss/", {
            country: contry,
            fullName: personName,
            mobileNum: mobileNum,
            zipCode: zipCode,
            streetAddress: address,
        });
    }

}

export default new AddressViaApi();