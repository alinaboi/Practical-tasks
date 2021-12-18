import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import ProfilePage from "../../pages/profile.page.js"
import RegistrationViaApi from "../../api/registration.api.js";
import chai from "chai";
import path from "path"

describe('Editing profile info testing ', async () => {
    it('uploading user\'s profile image', async () => {
        // Precondition -> Registration via API
        const user = await RegistrationViaApi.registerAndReturnUser();

        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({
            timeout: 5000
        });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login(user.email, user.password);
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.navigateToProfile();

        // Profile Page -> uploading image

        const input = await ProfilePage.choosePicInput.wdioElement;
        const submitBtn = await ProfilePage.uploadPicBtn.wdioElement;

        // store test file path
        const filePath = await path.join(path.resolve(), '/image/picture2.jpg');

        // use browser.uploadFile to upload the test file
        const remoteFilePath = await browser.uploadFile(filePath);

        await input.setValue(remoteFilePath);
        await submitBtn.click();

        await browser.waitUntil(
            async () => '/assets/public/images/uploads/default.svg' !== await ProfilePage.pictureElement.getAttribute('src'), {
                timeout: 3000
            });
        const srcElement = await ProfilePage.pictureElement.getAttribute('src');
        await chai.expect(srcElement).to.not.equal('/assets/public/images/uploads/default.svg');
        // set username
        await ProfilePage.setUserName('SuperUser');
    });
});
