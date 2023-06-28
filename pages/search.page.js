import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Dropdown from "../elements/dropdown.js";
import Label from "../elements/label.js";\

ADD_TO_BASKET_LOCATOR = (index = 1) => `(//button[@aria-label="Add to Basket"])[${index}]`;

class SearchPage extends BasePage {
  constructor() {
    super();
  }

  static getBaseElement() {
    return new BaseElement($(""), "");
  }

  get accountMenuBtn() {
    return new Button($("#navbarAccount"), "Account Menu");
  }

  get closePopupBtn() {
    return new Button($("button.close-dialog"), "Close dialog message");
  }

  get closeCookieBtn() {
    return new Button($(".cc-btn"), "Closse cookie message");
  }

  get sideNavMenuBtn() {
    return new Button(
      $(
        ".mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base:first-of-type"
      ),
      "Open Side Navigation Menu"
    );
  }

  async clickAddToBasketByIndex(index = 1) {
    let addButton = new Button(
      $(ADD_TO_BASKET_LOCATOR(index)),
      "Add the product to Basket"
    );
    await addButton.waitForClickable(10000);
    await addButton.click();
  }

  get ithemsPerPageDropdown() {
    return new Dropdown(
      $("//div[starts-with(@class,'mat-select-value')]"),
      "Change the quantity of items on the page"
    );
  }

  get footer() {
    return new Label($(".mat-paginator.mat-elevation-z6"), "The footer ");
  }

  get soldOutLabel() {
    return new Label(
      $$(".ribbon.ribbon-top-left.ribbon-sold.ng-star-inserted"),
      "Sold Out Mark "
    );
  }

  get onlyThreeLeftLabel() {
    return new Label(
      $('(//span[contains(text(), "Only 3 left")])'),
      "Only 3 Left Mark "
    );
  }

  get onlyTwoLeftLabel() {
    return new Label(
      $('(//span[contains(text(), "Only 2 left")])'),
      "Only 2 Left Mark "
    );
  }

  get basketBtn() {
    return new Button(
      $('[aria-label="Show the shopping cart"]'),
      "Navigate to Basket"
    );
  }

  //action methods
  async open() {
    await allure.startStep(`Navigation to the Search Page`);
    await super.open(`${global.baseUrl}#/search`);
    /*if (await this.closePopupBtn.isExisting())
            await this.closePopupBtn.click();
        if (await this.closeCookieBtn.isExisting())
            await this.closeCookieBtn.click();*/
    await allure.endStep(`passed`);
  }

  async waitForScreenToBeAvailable() {
    await this.accountMenuBtn.waitForDisplayed();
    await this.sideNavMenuBtn.waitForDisplayed();
    await this.footer.waitForDisplayed();
    await this.addMelonBikeBtn.waitForDisplayed();
  }

  async addAppleJuice() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addAppleJuiceBtn.click();
  }

  async addApplePomace() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addApplePomaceBtn.click();
  }

  async addBananaJuice() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addBananaJuiceBtn.click();
  }

  async addCarrotJuice() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addCarrotJuiceBtn.click();
  }

  async addEggfruitJuice() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addEggfruitJuiceBtn.click();
  }

  async addGreenSmoothie() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addGreenSmoothieBtn.click();
  }

  async addLemonJuice() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addLemonJuiceBtn.click();
  }

  async addOrangeJuice() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addOrangeJuiceBtn.click();
  }

  async addStrawberryJuice() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addStrawberryJuiceBtn.click();
  }

  async addSalesmanArtwork() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addSalesmanArtworkBtn.wdioElement.waitForClickable({
      timeout: 10000,
    });
    await this.addSalesmanArtworkBtn.click();
  }

  async addPermafrost2020Edition() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addPermafrost2020EditionBtn.wdioElement.waitForClickable({
      timeout: 10000,
    });
    await this.addPermafrost2020EditionBtn.click();
  }

  async addMelonBike() {
    await allure.addStep(`Click on Add to Basket Button`);
    await this.addMelonBikeBtn.wdioElement.waitForClickable({ timeout: 10000 });
    await this.addMelonBikeBtn.click();
  }

  async changeIthemsQuantity(text) {
    await allure.addStep(`Change the quantity of items on the page`);
    await this.ithemsPerPageDropdown.wdioElement.waitForClickable({
      timeout: 10000,
    });
    await this.ithemsPerPageDropdown.select(text);
  }

  async openBasket() {
    await allure.addStep(`Click on the Basket Button`);
    await this.basketBtn.click();
  }
}
export default new SearchPage();
