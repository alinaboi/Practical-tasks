import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Dropdown from "../elements/dropdown.js";


class MainPage extends BasePage{
    constructor() {
        super();
    }
    static getBaseElement() {
        return new BaseElement($('#navbarAccount'), "Account Menu");
    }
    get accountMenuBtn() {
        return new Button($('#navbarAccount'), "Account Menu");
    }
    get loginBtn() {
        return new Button($('button[routerlink="/login"]'), "Login");
    }
    get closePopupBtn() {
        return new Button($('button.close-dialog'), "Close dialog message");
    }
    get closeCookieBtn() {
        return new Button($('.cc-btn'), "Closse cookie message");
    }
    get userProfileBtn() {
        return new Button($('//button[@aria-label="Go to user profile"]'), "Navigate to Profile Page");
    }
    get logoutBtn() {
        return new Button($('#navbarLogoutButton'), "Logout");
    }
    get sideNavMenuBtn() {
        return new Button($('.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base:first-of-type'), "Open Side Navigation Menu");
    }
    get aboutUsBtn() {
        return new Button($('[routerlink="/about"]'), "Move to About Us Page");
    }
    get customerFeedbackBtn() {
        return new Button($('//span[contains(text(),"Customer Feedback")]'), "Move to Contact");
    }
    get backToHomePageBtn() {
        return new Button($('[aria-label="Back to homepage"]'), "Move back to Home Page");
    }
    get loggedInAccountMenu() {
        return new Button($('.mat-menu-content.ng-tns-c256-2'), "User's Account Menu");
    }
    get ordersAndPaymentBtn() {
        return new Button($('//button[@aria-label="Show Orders and Payment Menu"]'), "User's Orders Submenu");
    }
    get mySavedAddressesBtn() {
        return new Button($('//span[contains(text(),"My saved addresses")]'), "User's Addresses Menu");
    }
    get myPaymentOptionsBtn() {
        return new Button($('//span[contains(text(),"My Payment Options")]'), "User's Payments Menu");
    }
    
    

    async open() {
        await allure.startStep(`Navigation to the Main Page`);
        await super.open(`http://localhost:3000/#`);
        if (await this.closePopupBtn.isExisting())
            await this.closePopupBtn.click();
        if (await this.closeCookieBtn.isExisting())
            await this.closeCookieBtn.click();
            await allure.endStep(`passed`);
    }
    async openAccountMenu() {
        await allure.addStep(`Click on Account Menu Button`);
        await this.accountMenuBtn.wdioElement.waitForClickable({ timeout: 3000 })
        await this.accountMenuBtn.click();
    }
    async openSideNavMenu() {
        await allure.addStep(`Click on the Side Navigation Menu Button`);
        await this.sideNavMenuBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await this.sideNavMenuBtn.click();
    }
    async navigateToLogin() {
        await allure.addStep(`Navigation to the Login Page`);
        await this.loginBtn.wdioElement.waitForClickable({ timeout: 3000 })
        await this.loginBtn.click();
    }
    async ordersAndPayment() {
        await allure.addStep(`Navigation to Orders and Payment sub-menu`);
        await this.ordersAndPaymentBtn.click();
    }
    async navigateToPayment() {
        await allure.addStep(`Navigation to Saved-Payment-Methods Page`);
        await this.myPaymentOptionsBtn.click();
    }
    async navigateToAddress() {
        await allure.addStep(`Navigation to Address-Saved Page`);
        await this.mySavedAddressesBtn.click();
    }
    async navigateToAboutPage() {
        await allure.addStep(`Navigation to the About Page`);
        await this.aboutUsBtn.wdioElement.waitForClickable({ timeout: 5000 });
        await this.aboutUsBtn.click();
    }
    async navigateToContactPage() {
        await allure.addStep(`Navigation to the Contact Page`);
        await this.customerFeedbackBtn.click();
    }
    async navigateToProfile() {
        await allure.addStep(`Navigation to Profile Page`);
        await this.userProfileBtn.click();
    }
    async isLogoutBtnDisplayed() {
        await this.logoutBtn.isDisplayed();
    }
    async isLoggedInAccountMenuDisplayed() {
        await this.loggedInAccountMenu.isDisplayed();
    }
    async waitForAccountMenuDropdownDisplated() {
        await this.loggedInAccountMenu.waitForDisplayed();
    }
    async waitForScreenToBeAvailable() {
        await this.accountMenuBtn.waitForDisplayed();
        await this.sideNavMenuBtn.waitForDisplayed();
    }
    
}export default new MainPage();