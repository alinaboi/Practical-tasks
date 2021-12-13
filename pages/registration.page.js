import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Dropdown from "../elements/dropdown.js";
import Input from "../elements/input.js";

class RegistrationPage extends BasePage{
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
    /*get openListBtn() {
        return new Button($('.mat-select-arrow.ng-tns-c131-76'), "Dropdown Question List");
    }*/
    get questionDropdown() {
        return new Dropdown($('[name="securityQuestion"]'), "Security Question");
    }
    get backToHomePageBtn() {
        return new Button($('[aria-label="Back to homepage"]'), "Move back to Home Page");
    }
    get newEmailInput() {
        return new Input($('#emailControl'), "New User Email Input");
    }
    get newPasswordInput() {
        return new Input($('#passwordControl'), "New User Password Input");
    }
    get newPasswordInputRepeat() {
        return new Input($('#repeatPasswordControl'), "New User Password repeat Input");
    }
    get securityAnswer() {
        return new Input($('#securityAnswerControl'), "Security Answer Input");
    }
    get registerBtn() {
        return new Button($('#registerButton'), "Register New User");
    }

    async selectQuestion(text) {
        //await this.openListBtn.click();
        await this.questionDropdown.select(text);
    }

    async open() {
        await super.open(`http://localhost:3000/#/register`);
        if (await this.closePopupBtn.isExisting())
            await this.closePopupBtn.click();
        if (await this.closeCookieBtn.isExisting())
            await this.closeCookieBtn.click();
    }

    async createLogin(email, password) {
        await this.newEmailInput.setValue(email);
        await this.newPasswordInput.setValue(password);
        await this.newPasswordInputRepeat.setValue(password);
    }

    async createSecurityAnswer(answer) {
        await this.securityAnswer.setValue(answer);
    }

    async waitForScreenToBeAvailable() {
        await this.accountMenuBtn.waitForDisplayed();
        await this.newEmailInput.waitForDisplayed();
    }

    async finishRegistration() {
        await this.registerBtn.click();
    }
    
}
export default new RegistrationPage();