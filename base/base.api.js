import superagent from "superagent";
import loginApi from "../api/login.api.js";

const baseUrl = "http://localhost:3000/";

class BaseApi {
  constructor() {}

  async post(url, body) {
    const finalUrl = baseUrl + url;
    return await superagent
      .post(finalUrl)
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
    const finalUrl = baseUrl + url;
    return await superagent
      .get(finalUrl)
      .set('accept', 'json')
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