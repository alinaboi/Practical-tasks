import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Dropdown from "../elements/dropdown.js";
import Label from "../elements/label.js";

class BasketPage extends BasePage {
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
    get removeStrawberryJuiceBtn() {
        return new Button($('(//mat-cell[@class="mat-cell cdk-cell cdk-column-remove mat-column-remove ng-star-inserted"])[8]'), "Remove the ithem from Basket")
    }
    get removeApplePomaceBtn() {
        return new Button($('(//mat-cell[@class="mat-cell cdk-cell cdk-column-remove mat-column-remove ng-star-inserted"])[7]'), "Remove the ithem from Basket")
    }
    get removeBananaJuiceBtn() {
        return new Button($('(//mat-cell[@class="mat-cell cdk-cell cdk-column-remove mat-column-remove ng-star-inserted"])[5]'), "Remove the ithem from Basket")
    }
    get removeEggfruitJuiceBtn() {
        return new Button($('(//mat-cell[@class="mat-cell cdk-cell cdk-column-remove mat-column-remove ng-star-inserted"])[3]'), "Remove the ithem from Basket")
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
    ////button[@id="checkoutButton"]
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
    // async changeIthemsQuantity(text) {
    //     await this.ithemsPerPageDropdown.select(text);
    // }
    async openBasket() {
        await allure.addStep(`Click on the Basket Button`);
        await this.basketBtn.click();
    }
    async removeStrawberryJuice() {
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
        await this.removeEggfruitJuiceBtn.click();
    }
    async checkout() {
        await allure.addStep(`Click on Checkout Button`);
        await this.checkoutBtn.wdioElement.waitForClickable({ timeout: 10000 })
        await this.checkoutBtn.click();
    }

}
export default new BasketPage();
