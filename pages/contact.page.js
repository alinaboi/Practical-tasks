import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Dropdown from "../elements/dropdown.js";


class ContactPage extends BasePage{
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
        return new Input($('#comment'),"Type a comment here");
    }
    get submitBtn() {
        return new Button($('(//span[contains(text(), "Submit")])'), "Submit Button")
    }
    

    async open() {
        await allure.startStep(`Navigation to the Contact Page`);
        await super.open(`http://localhost:3000/#/contact`);
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
    async fillFeedbackFields(comment, value, capchaResult ) {
        await allure.startStep(`Adding Feedback : ${comment}/ ${value}/ ${capchaResult}`);
        await this.commentInput.setValue(comment);
        
        await this.submitBtn.wdioElement.waitForClickable({
            timeout: 5000
        });
        await this.submitBtn.click();
        await allure.endStep(`passed`);

    }

    
}export default new ContactPage();