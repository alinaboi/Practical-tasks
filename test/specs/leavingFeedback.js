import LoginPage from "../../pages/login.page.js"
import MainPage from "../../pages/main.page.js"
import ProfilePage from "../../pages/profile.page.js"
import ContactPage from "../../pages/contact.page.js"

describe('Leaving customer feedback ', async () => {
    it('leaving a feedback with rating 3', async () => {
        
        await MainPage.open();
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openAccountMenu();
        await MainPage.loginBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await MainPage.navigateToLogin();
        await LoginPage.waitForScreenToBeAvailable();
        await LoginPage.login('Testuser1234@gmail.com', 'Testpass1');
        await MainPage.waitForScreenToBeAvailable();
        await MainPage.openSideNavMenu();
        await MainPage.navigateToContactPage();


        //Contact Page ->leaving a feedback
        await ContactPage.waitForScreenAvailable();
        await ContactPage.fillFeedbackFields();


        //

        
        

    });
});