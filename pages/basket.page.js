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

    get appleJuiceText() {
        return new Label($(PRODUCT_TEXT_LOCATOR("Apple Juice")), "Apple Juice Text");
    }

    get carrotJuiceText() {
        return new Label($(PRODUCT_TEXT_LOCATOR("Carrot Juice")), "Carrot Juice Text");
    }

    get greenSmoothieText() {
        return new Label($(PRODUCT_TEXT_LOCATOR("Green Smoothie")), "Green Smoothie Text");
    }

    get lemonJuiceText() {
        return new Label($(PRODUCT_TEXT_LOCATOR("Lemon Juice")), "Lemon Juice Text");
    }

    get orangeJuiceText() {
        return new Label($(PRODUCT_TEXT_LOCATOR("Orange Juice")), "Orange Juice Text");
    }

    get eggfruitJuiceText() {
        return new Label($(PRODUCT_TEXT_LOCATOR(" Eggfruit Juice")), " Eggfruit Juice Text");
    }

    get salesmanArtworkText() {
        return new Label($(PRODUCT_TEXT_LOCATOR("Salesman Artwork")), "Salesman Artwork Text");
    }

    get permafrost2020EditionText() {
        return new Label($('//mat-cell[starts-with(text()," Juice Shop")])'), "Permafrost 2020 Edition Text");
    }

    get melonBikeText() {
        return new Label($(PRODUCT_TEXT_LOCATOR("Melon Bike")), "Melon Bike Text");
    }

    get checkoutBtn() {
        return new Button($('(//button[@id="checkoutButton"]/*[1])'), "Checkout Button");
    }
    
    async getRemoveBtn(product) {
        return new Button($( product.wdioElement + '/following-sibling::mat-cell[@class="mat-cell cdk-cell cdk-column-remove mat-column-remove ng-star-inserted"]'), "Remove the ithem from Basket")
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
