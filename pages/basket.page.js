import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Label from "../elements/label.js";

const NAV_BAR_LOCATOR = '#navbarAccount';
const CLOSE_POP_UP_LOCATOR = 'button.close-dialog';
const CLOSE_COOKIE_LOCATOR = '.cc-btn';
const OPEN_SIDE_NAV_LOCATOR = 'button[aria-label="Open Sidenav"]';
const FOOTER_LOCATOR = '.mat-paginator[role]';
const BASKET_BTN_LOCATOR = '[aria-label="Show the shopping cart"]';
const PRODUCT_TEXT_LOCATOR = (text) => `//mat-cell[contains(text(),${text})]`;
const PRODUCT_STARTS_WITH_TEXT_LOCATOR = (text) => `//mat-cell[starts-with(text(),${text})])`;
const REMOVE_BTN_LOCATOR = '/following-sibling::mat-cell[@class="mat-cell cdk-cell cdk-column-remove mat-column-remove ng-star-inserted"]';

class BasketPage extends BasePage {
    constructor() {
        super();
    }
    static getBaseElement() {
        return new BaseElement($(''), "");
    }

    get accountMenuBtn() {
        return new Button($(NAV_BAR_LOCATOR), "Account Menu");
    }

    get closePopupBtn() {
        return new Button($(CLOSE_POP_UP_LOCATOR), "Close dialog message");
    }
    
    get closeCookieBtn() {
        return new Button($(CLOSE_COOKIE_LOCATOR), "Closse cookie message");
    }

    get sideNavMenuBtn() {
        return new Button($(OPEN_SIDE_NAV_LOCATOR), "Open Side Navigation Menu");
    }

    get footer() {
        return new Label($(FOOTER_LOCATOR), "The footer ")
    }

    get basketBtn() {
        return new Button($(BASKET_BTN_LOCATOR), "Navigate to Basket")
    }

    async getProductByText(productText) {
        return new Label($(PRODUCT_TEXT_LOCATOR(productText)), `${productText} Text`);
    }

    async getProductByBegianningOfText(productText) {
        return new Label($(PRODUCT_STARTS_WITH_TEXT_LOCATOR(productText)), `${productText} Text`);
    }

    get checkoutBtn() {
        return new Button($('(//button[@id="checkoutButton"]/*[1])'), "Checkout Button");
    }

    async open() {
        await allure.startStep(`Navigation to the Search Page`);
        await super.open(`${global.baseUrl}#/basket`);
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

    async openBasket() {
        await allure.addStep(`Click on the Basket Button`);
        await this.basketBtn.click();
    }
    
    async clickRemoveByProductText(productText) {
        let removeButton = new Button($(PRODUCT_TEXT_LOCATOR(productText) + REMOVE_BTN_LOCATOR), "Remove the ithem from Basket");
        await removeButton.click();
    }

    async removeStrawberryJuice() { //TODO : remove by text
        await allure.addStep(`Click on Remove the item from Basket Button`);
        await this.removeStrawberryJuiceBtn.click();
    }

    async removeApplePomace() {
        await allure.addStep(`Click on Remove the item from Basket Button`);
        await this.removeApplePomaceBtn.click();
    }

    async removeBananaJuice() {
        await allure.addStep(`Click on Remove the item from Basket Button`);
        await this.removeBananaJuiceBtn.click();
    }

    async removeEggfruitJuice() {
        await allure.addStep(`Click on Remove the item from Basket Button`);
        await this.getRemoveBtn(this.eggfruitJuiceText()).click();
    }

    async checkout() {
        await allure.addStep(`Click on Checkout Button`);
        await this.checkoutBtn.wdioElement.waitForClickable({ timeout: 10000 })
        await this.checkoutBtn.click();
    }

}
export default new BasketPage();
