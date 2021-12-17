import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import ProfilePage from "../../pages/profile.page.js"
import RegistrationViaApi from "../../api/registration.api.js";
import chai from "chai";
import path from "path"

describe('Editing profile info testing ', async () => {
    it('uploading user\'s profile image', async () => {
        //Precondition ->Registration via API
        let registrationApi = new RegistrationViaApi("Testuser404@gmail.com", "Testuser11");
        const response = await registrationApi.register();
        chai.expect(response.status).to.equal(201);

        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({
            timeout: 5000
        });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login('Testuser404@gmail.com', 'Testuser11');
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.navigateToProfile();

        //Profile Page ->uploading image
        // await ProfilePage.waitForScreenToBeAvailable();
        // await ProfilePage.uploadPic('/image/picture2.jpg');


        // find selectors $('//input[@id="picture"]') $('//button[@aria-label="Button to upload the profile picture"]')
        const input = ProfilePage.choosePicInput.wdioElement;
        const submitBtn = ProfilePage.uploadPicBtn.wdioElement;

        // console.log(path.resolve())
        //store test file path
        const filePath = await path.join(path.resolve(), '/image/picture2.jpg');

        // use browser.uploadFile to upload the test file
        const remoteFilePath = await browser.uploadFile(filePath);

        // access the test page
        // browser.url('/profile');

        // set file path value in the input field
        await input.setValue(remoteFilePath);
        await submitBtn.click(); // click the submit button

        await console.log('aALINAAAAAAA', await JSON.stringify(input));


    });
});