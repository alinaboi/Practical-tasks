import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Dropdown from "../elements/dropdown.js";
import Label from "../elements/label.js";
import Input from "../elements/input.js";

class AdressSelectPage extends BasePage {
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
    get contryInput() {
        return new Input($('(//input[@data-placeholder="Please provide a country."])'), "Contry Input")
    }
    get nameInput() {
        return new Input($('(//input[@data-placeholder="Please provide a name."])'), "Name Input")
    }
    get mobileNumberInput() {
        return new Input($('(//input[@data-placeholder="Please provide a mobile number."])'), "Mobile number Input")
    }
    get zipCodeInput() {
        return new Input($('(//input[@data-placeholder="Please provide a ZIP code."])'), "ZIP code Input")
    }
    get addressInput() {
        return new Input($('(//textarea[@data-placeholder="Please provide an address."])'), "Address Input")
    }
    get cityInput() {
        return new Input($('(//input[@data-placeholder="Please provide a city."])'), "City Input")
    }
    get stateInput() {
        return new Input($('(//input[@data-placeholder="Please provide a state."])'), "State Input")
    }
    get submitBtn() {
        return new Button($('(//span[contains(text(), "Submit")])'), "Submit Button")
    }
    get selectTheAddressBtn() {
        return new Button($('(//mat-cell[contains(text(),"Test User")])'), "Select User's Address")
    }
    /*get selectTheAddressBtn() {
        return new Button($('(//span[@class="mat-radio-container"])'), "Select User's Address")
    }
    get selectTheAddressBtn() {
        return new Button($('//input[@class="mat-radio-input cdk-visually-hidden"]'), "Select User's Address")
    }*/
    get continueBtn() {
        return new Button ($('(//button[@aria-label="Proceed to payment selection"])'), "Navigate to payment selection")
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
    async fillAddressFields(contry, personName, mobileNumber, zipCode, address, city, state) {
        await allure.startStep(`Adding New Address : ${contry}/ ${personName}/ ${mobileNumber}/ ${zipCode}/ ${address}/ ${city}/ ${state}`);
        await this.contryInput.setValue(contry);
        await this.nameInput.setValue(personName);
        await this.mobileNumberInput.setValue(mobileNumber);
        await this.zipCodeInput.setValue(zipCode);
        await this.addressInput.setValue(address);
        await this.cityInput.setValue(city);
        await this.stateInput.setValue(state);
        await this.submitBtn.wdioElement.waitForClickable({
            timeout: 5000
        });
        await this.submitBtn.click();
        await allure.endStep(`passed`);

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
export default new AdressSelectPage();