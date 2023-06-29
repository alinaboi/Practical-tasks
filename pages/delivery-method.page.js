import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Label from "../elements/label.js";

class DeliveryMethodPage extends BasePage {
    constructor() {
        super();
    }
    static getBaseElement() {
        return new BaseElement($(''), "");
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
    get footer() {
        return new Label($('.mat-paginator.mat-elevation-z6'), "The footer ")
    }
    get basketBtn() {
        return new Button($('[aria-label="Show the shopping cart"]'), "Navigate to Basket")
    }
    get standardDeliveryBtn() {
        return new Button($('(//mat-cell[contains(text(), "Standard Delivery")])'), "Standard Delivery 5 days")
    }
    get continueBtn() {
        return new Button($('(//button[@aria-label="Proceed to delivery method selection"])'), "Navigate to delivery method selection")
    }

    async open() {
        await allure.startStep(`Navigation to the Search Page`);
        await super.open(`${global.baseUrl}#/delivery-method`);
        /*if (await this.closePopupBtn.isExisting())
            await this.closePopupBtn.click();
        if (await this.closeCookieBtn.isExisting())
            await this.closeCookieBtn.click();*/
        await allure.endStep(`passed`);
    }
    async waitForScreenToBeAvailable() {
        await this.accountMenuBtn.waitForDisplayed();
        await this.sideNavMenuBtn.waitForDisplayed();
    }
    async standardDelivery() {
        await allure.addStep(`Click on Standard Delivery`);
        await this.standardDeliveryBtn.waitForDisplayed();
        await this.standardDeliveryBtn.click();
    }
    async clickContinue() {
        await allure.addStep(`Click on Continue Button`);
        await this.continueBtn.click();
    }

}
export default new DeliveryMethodPage();
