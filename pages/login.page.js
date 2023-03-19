import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";
import Label from "../elements/label.js";

class LoginPage extends BasePage {
    constructor() {
        super();
    }

    static getBaseElement() {
        return new BaseElement($('#navbarAccount'), "Account Menu");
    }
    get closePopupBtn() {
        return new Button($('button.close-dialog'), "Close dialog message");
    }
    get closeCookieBtn() {
        return new Button($('.cc-btn'), "Closse cookie message");
    }
    get accountMenuBtn() {
        return new Button($('#navbarAccount'), "Account Menu");
    }
    get emailInput() {
        return new Input($('#email'), "User Email Input")
    }
    get passwordInput() {
        return new Input($('#password'), "User Password Input")
    }
    get loginBtn() {
        return new Button($('button#loginButton'), "Log in the account")
    }
    get notloggedError() {
        return new Label($('.error.ng-star-inserted'), "You are not logged Message");
    }
    get backToHomePageBtn() {
        return new Button($('[aria-label="Back to homepage"]'), "Move back to Home Page");
    }
    get moveToRegistrationPageBtn() {
        return new Button($('[routerlink="/register"]'), "Move to Registration Page");
    }

    async open() {
        await allure.startStep(`Navigation to the Login Page`);
        await super.open(`${global.baseUrl}#/login`);
        if (await this.closePopupBtn.isExisting())
            await this.closePopupBtn.click();
        if (await this.closeCookieBtn.isExisting())
            await this.closeCookieBtn.click();
        await allure.endStep(`passed`);
    }

    async waitForScreenToBeAvailable() {
        await this.accountMenuBtn.waitForDisplayed();
        await this.passwordInput.waitForDisplayed();
    }

    async login(email, password) {
        await allure.startStep(`Logging in with ${email}/ ${password}`);
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
        await allure.endStep(`passed`);

    }

    async addNewUser() {
        await allure.addStep(`Navigation to the Registration Page`);
        await this.moveToRegistrationPageBtn.click();
    }

    async isUnloggedErrorDisplayed() {
        await this.notloggedError.isDisplayed();
    }

}

export default new LoginPage();
