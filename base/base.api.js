import superagent from "superagent";

const baseUrl = "http://localhost:3000/api";

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

}
export default new BaseApi();