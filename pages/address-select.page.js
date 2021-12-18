import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Label from "../elements/label.js";

class AddressSelectPage extends BasePage {
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
    get addNewAddressBtn() {
        return new Button($('(//button[@aria-label="Add a new address"])'), "Add New Address")
    }
   

    async open() {
        await allure.startStep(`Navigation to the Search Page`);
        await super.open(`http://localhost:3000/#/address/select`);
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
    async addNewAddress() {
        await allure.addStep(`Click on Add New Address Button`);
        await this.addNewAddressBtn.click();
    }
    async selectTheAddress() {
        await allure.addStep(`Click on User's Address`);
        await this.selectTheAddressBtn.click();
    }
    async continue() {
        await allure.addStep(`Click on Continue Button`);
        await this.continueBtn.click();
    }

}
export default new AddressSelectPage();