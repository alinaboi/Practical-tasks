import basketApi from "./basket.api.js";
import addressApi from "./address.api.js";
import cardApi from "./card.api.js";
import captchaApi from "./captcha.api.js";
import feadbackApi from "./feadback.api.js";
import loginApi from "./login.api.js";
import registrationApi from "./registration.api.js";
import checkoutApi from "./checkout.api.js";

import chai from "chai";

class Api {
  constructor() {}

  addressApi() {
    return addressApi;
  }

  cardApi() {
    return cardApi;
  }

  captchaApi() {
    return captchaApi;
  }

  feadbackApi() {
    return feadbackApi;
  }

  loginApi() {
    return loginApi;
  }

  registrationApi() {
    return registrationApi;
  }

  basketApi() {
    return basketApi;
  }

  checkoutApi() {
    return checkoutApi;
  }

  verifyStatusCode(response, expectedCode = 200) {
    return chai.expect(response.status).to.be.equal(expectedCode);
  }

  async verifyStatusIsSuccess(response) {
    let status = await JSON.parse(response.text).status;
    chai
      .expect(status, "Response status doesn't match expected: success")
      .equals("success");
  }
}

export default new Api();
