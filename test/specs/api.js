import superagent from "superagent";
import chai from "chai";
import RegistrationViaApi from "../../api/registration.api.js";


const expect = chai.expect;

describe('API testing', () => {
    let baseUrl = "http://localhost:3000/";
    it('Checking GET feedbacks', async () => {
        const response = await superagent.get(baseUrl + 'api/Feedbacks/');
        console.log("***RESPONSE***" + JSON.stringify(response));
        console.log("***RESPONSE STATUS CODE***" + response.statusCode);
        expect(response.statusCode).to.equal(200);
    });

    it('Checking Post for user creation', async () => {
        let registrationApi = new RegistrationViaApi("Testuser123@gmail.com", "Testpass1");

        const response = await registrationApi.register();
        expect(response.status).to.equal(201);
    })
});