import superagent from "superagent";
import loginApi from "../api/main.api.js";

class BaseApi {
  constructor() {}

  async post(url, body) {
    const finalUrl = global.baseUrl + url;
    return await superagent
      .post(finalUrl)
      .set('Cookie', `token=${loginApi.token}`)
      .set("Authorization", `Bearer ${loginApi.token}`)
      .send(body)
      .then(response => {
        console.info(`Received successful response during POST request to ${finalUrl}. Response: ${JSON.stringify(response)}`);
        return response;
      })
      .catch(error => {
        console.error(`Received failed response during POST request to ${finalUrl}. Error: ${JSON.stringify(error)}`);
        return error;
      })
  }
  async get(url) {
    const finalUrl = global.baseUrl + url;
    return await superagent
      .get(finalUrl)
      .set('accept', 'application/json, text/plain, */*')
      .set('Cookie', `token=${loginApi.token}`)
      .set("Authorization", `Bearer ${loginApi.token}`)
      .then(response => {
        console.info(`Received successful response during GET request to ${finalUrl}. Response: ${JSON.stringify(response)}`);
        return response;
      })
      .catch(error => {
        console.error(`Received failed response during GET request to ${finalUrl}. Error: ${JSON.stringify(error)}`);
        return error;
      })
  }

}
export default new BaseApi();
