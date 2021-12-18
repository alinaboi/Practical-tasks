import baseApi from "../base/base.api.js";

export default  class RegistrationViaApi {
    constructor(email, password) {
        this.email= email;
        this.password= password;
    }
  
    async register() {
        return await baseApi.post("/Users", {
            "email": this.email,
            "password": this.password,
            "passwordRepeat": this.password,
            "securityQuestion": {
                "id": 1,
                "question": "Your eldest siblings middle name?",
                "createdAt": "2021-12-11T10:11:06.058Z",
                "updatedAt": "2021-12-11T10:11:06.058Z"
            },
            "securityAnswer": "Funtic"
        });
    }
  
  }
  