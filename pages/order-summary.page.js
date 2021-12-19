import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Label from "../elements/label.js";

class OrderSummaryPage extends BasePage {
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
    get appleJuiceText() {
        return new Label($('(//mat-cell[contains(text(),"Apple Juice")])'), "Apple Juice Text");
    }
    get carrotJuiceText() {
        return new Label($('(//mat-cell[contains(text(),"Carrot Juice")])'), "Carrot Juice Text");
    }
    get greenSmoothieText() {
        return new Label($('(//mat-cell[contains(text(),"Green Smoothie")])'), "Green Smoothie Text");
    }
    get lemonJuiceText() {
        return new Label($('(//mat-cell[contains(text(),"Lemon Juice")])'), "Lemon Juice Text");
    }
    get orangeJuiceText() {
        return new Label($('(//mat-cell[contains(text(),"Orange Juice")])'), "Orange Juice Text");
    }
    get salesmanArtworkText() {
        return new Label($('(//mat-cell[contains(text(),"Salesman Artwork")])'), "Salesman Artwork Text");
    }
    get permafrost2020EditionText() {
        return new Label($('(//mat-cell[starts-with(text()," Juice Shop")])'), "Permafrost 2020 Edition Text");
    }
    get melonBikeText() {
        return new Label($('(//mat-cell[contains(text(),"Melon Bike")])'), "Melon Bike Text");
    }
    get customerPhoneNumber() {
        return new Label($('(//div[contains(text()," 633330000")])'), "Customer's Phone Number");
    }
    get totalPrice() {
        return new Label($('//td[@class="mat-footer-cell price"]'), "Total Price")
    }
    get submitOrderBtn() {
        return new Button($('(//span[contains(text(), "Place your order and pay")])'), "Submit Order Button")
    }


    async open() {
        await allure.startStep(`Navigation to the Search Page`);
        await super.open(`${global.baseUrl}#/order-summary`);
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
    async submitOrder() {

        await allure.addStep(`Click on Place your order and pay Button`);
        await this.submitOrderBtn.click();

    }
}
export default new OrderSummaryPage();
