import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";


class ContactPage extends BasePage {
    constructor() {
        super();
    }

    static getBaseElement() {
        return new BaseElement($('#navbarAccount'), "Account Menu");
    }

    get accountMenuBtn() {
        return new Button($('#navbarAccount'), "Account Menu");
    }

    get closePopupBtn() {
        return new Button($('button.close-dialog'), "Close dialog message");
    }

    get closeCookieBtn() {
        return new Button($('.cc-btn'), "Closse cookie message");
    }

    get sideNavMenuBtn() {
        return new Button($('.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base:first-of-type'), "Open Side Navigation Menu");
    }

    get commentInput() {
        return new Input($('#comment'), "Type a comment here");
    }

    get captchaInput() {
        return new Input($('#captchaControl'), "Type a captcha result here");
    }

    get ratingElement() {
        return $('#rating');
    }

    get captchaElement() {
        return $('#captcha');
    }

    get submitBtn() {
        return new Button($('(//span[contains(text(), "Submit")])'), "Submit Button")
    }

    get successfulFeedbackMessageElement() {
        return $('//span[contains(text(),"Thank you for your feedback.")]');
    }

    async open() {
        await allure.startStep(`Navigation to the Contact Page`);
        await super.open(`${global.baseUrl}#/contact`);
        // if (await this.closePopupBtn.isExisting())
        //     await this.closePopupBtn.click();
        // if (await this.closeCookieBtn.isExisting())
        //     await this.closeCookieBtn.click();
        await allure.endStep(`passed`);
    }

    async openAccountMenu() {
        await allure.addStep(`Click on Account Menu Button`);
        await this.accountMenuBtn.click();
    }

    async openSideNavMenu() {
        await allure.addStep(`Click on the Side Navigation Menu Button`);
        await this.sideNavMenuBtn.click();
    }

    async waitForScreenToBeAvailable() {
        await this.accountMenuBtn.waitForDisplayed();
        await this.sideNavMenuBtn.waitForDisplayed();
    }

    async fillFeedbackFields(comment, value) {
        await allure.startStep(`Adding Feedback : ${comment}/ ${value}`);
        // Set comment
        await this.commentInput.setValue(comment);

        // Set feedback star
        await this.ratingElement.click()

        // Calculate and set captcha
        await this.captchaElement.waitForDisplayed({timeout: 10000});
        await console.log('Captcha: ' + await this.captchaElement.getText());
        const captchaResult = eval(await this.captchaElement.getText());
        await console.log('Captcha result: ' + captchaResult);
        await this.captchaInput.setValue(captchaResult);

        await this.submitBtn.wdioElement.waitForClickable({timeout: 10000});
        await this.submitBtn.click();
        await allure.endStep(`passed`);
    }
}

export default new ContactPage();
