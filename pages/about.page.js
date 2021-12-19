import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
class AboutPage extends BasePage {
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
    get sideNavMenuBtn() {
        return new Button($('.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base:first-of-type'), "Open Side Navigation Menu");
    }
    get aboutUsBtn() {
        return new Button($('[routerlink="/about"]'), "Move to About Us Page");
    }
    get twitterBtn() {
        return new Button($('[aria-label="Button for the Twitter page of the shop"]'), "Open Twitter Page");
    }
    get facebookBtn() {
        return new Button($('[aria-label="Button for the Facebook page of the shop"]'), "Open Facebook Page");
        //return new Button($('.svg-inline--fa.fa-facebook.fa-w-16.fa-lg'), "Open Facebook Page");
    }
    get slackBtn() {
        return new Button($('[aria-label="Button for the Slack page of the shop"]'), "Open Slack Page");
    }
    get redditBtn() {
        return new Button($('[aria-label="Button for the Reddit page of the shop"]'), "Open Reddit Page");
    }
    get pressKitBtn() {
        return new Button($('[aria-label="Button for the PressKit page of the shop"]'), "Open Press Kit Page");
    }
    get backToHomePageBtn() {
        return new Button($('[aria-label="Back to homepage"]'), "Move back to Home Page");
    }

    async open() {
        await allure.startStep(`Navigation to the About Page`);
        await super.open(`http://localhost:3000/#/about`);
        if (await this.closePopupBtn.isExisting())
            await this.closePopupBtn.click();
        if (await this.closeCookieBtn.isExisting())
            await this.closeCookieBtn.click();
            await allure.endStep(`passed`);
    }
    async navigateToTwitter() {
        await allure.addStep(`Navigation to company's Twitter Page`);
        await this.twitterBtn.click();
    }
    async navigateToFacebook() {
        await allure.addStep(`Navigation to company's Facebook Page`);
        await this.facebookBtn.wdioElement.waitForClickable({ timeout: 10000 });
        await this.facebookBtn.click();
    }
    async navigateToSlack() {
        await allure.addStep(`Navigation to company's Slack Page`);
        await this.slackBtn.click();
    }
    async navigateToReddit() {
        await allure.addStep(`Navigation to company's Reddit Page`);
        await this.redditBtn.click();
    }
    async navigateToPressKit() {
        await allure.addStep(`Navigation to company's Press Kit Page`);
        await this.pressKitBtn.click();
    }
    async waitForScreenToBeAvailable() {
        await this.accountMenuBtn.waitForDisplayed();
        await this.redditBtn.waitForDisplayed();
    }

}
export default new AboutPage();
