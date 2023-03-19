import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Label from "../elements/label.js";
import Input from "../elements/input.js";

class AddressCreatePage extends BasePage {
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
    get basketBtn() {
        return new Button($('[aria-label="Show the shopping cart"]'), "Navigate to Basket")
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
    get invalidMobileNumberMsg() {
        return new Label($('//mat-error[contains(text(),"Mobile number must match 1000000-9999999999 format.")]'), " Mobile number input is not valid Massege.");
    }
    get emptyMobileNumberMsg() {
        return new Label($('//mat-error[contains(text(),"Please provide a mobile number.")]'), " Mobile number input is empty Massege.");
    }
    get emptyContryMsg() {
        return new Label($('//mat-error[contains(text(),"Please provide a country.")]'), " Contry input is empty Massege.");
    }
    get emptyNameMsg() {
        return new Label($('//mat-error[contains(text(),"Please provide a name.")]'), " Name is empty Massege.");
    }
    get emptyZipMsg() {
        return new Label($('//mat-error[contains(text(),"Please provide a ZIP code.")]'), " Zip Code is empty Massege.");
    }
    get emptyAddressMsg() {
        return new Label($('//mat-error[contains(text(),"Please provide an address.")]'), " Address input is empty Massege.");
    }
    get emptyCityMsg() {
        return new Label($('//mat-error[contains(text(),"Please provide a city.")]'), " City input is empty Massege.");
    }
    get submitBtn() {
        return new Button($('(//span[contains(text(), "Submit")])'), "Submit Button");
    }

    async open() {
        await allure.startStep(`Navigation to the Search Page`);
        await super.open(`${global.baseUrl}#/address/select`);
        await allure.endStep(`passed`);
    }
    async waitForScreenToBeAvailable() {
        await this.accountMenuBtn.waitForDisplayed();
        await this.sideNavMenuBtn.waitForDisplayed();
    }
    async fillAddressFields(contry, personName, mobileNumber, zipCode, address, city, state) {
        await allure.startStep(`Adding New Address : ${contry}/ ${personName}/ ${mobileNumber}/ ${zipCode}/ ${address}/ ${city}/ ${state}`);
        await this.contryInput.setValue(contry);
        await this.nameInput.setValue(personName);
        await this.mobileNumberInput.setValue(mobileNumber);
        await this.zipCodeInput.setValue(zipCode);
        await this.addressInput.setValue(address);
        await this.cityInput.setValue(city);
        await allure.endStep(`passed`);
    }
    async submit() {
        await allure.addStep('Click on Submit Button');
        await this.submitBtn.wdioElement.waitForClickable({ timeout: 10000 });
        await this.submitBtn.click();
    }
}
export default new AddressCreatePage();
