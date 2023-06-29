import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";

const ACCOUNT_MENU_BUTTON_LOCATOR = '#navbarAccount';
const LOGIN_BUTTON_LOCATOR = 'button[routerlink="/login"]';
const CLOSE_POP_UP_BUTTON_LOCATOR = 'button.close-dialog';
const CLOSE_COOKIE_BUTTON_LOCATOR = '.cc-btn';
const NAVIGATE_TO_PROFILE_BUTTON_LOCATOR = '//button[@aria-label="Go to user profile"]'
const LOGOUT_BUTTON_LOCATOR = '#navbarLogoutButton';
const SIDE_NAV_MENU_BUTTON_LOCATOR = '.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base:first-of-type';
const ABOUT_US_BUTTON_LOCATOR = '[routerlink="/about"]';
const CUSTOMER_FEEDBACK_BUTTON_LOCATOR = '//span[contains(text(),"Customer Feedback")]';
const BACK_TO_HOME_PAGE_BUTTON_LOCATOR = '[aria-label="Back to homepage"]';
const LOGGED_IN_BUTTON_LOCATOR = '.mat-menu-content.ng-tns-c256-2';
const ORDERS_AND_PAYMENT_MENU_LOCATOR = '//button[@aria-label="Show Orders and Payment Menu"]';
const SAVED_ADDRESSES_BUTTON_LOCATOR = '//span[contains(text(),"My saved addresses")]';
const PAYMENT_OPTIONS_BUTTON_LOCATOR = '//span[contains(text(),"My Payment Options")]';

class MainPage extends BasePage {
    constructor() {
        super();
    }

    static getBaseElement() {
        return new BaseElement($(ACCOUNT_MENU_BUTTON_LOCATOR), "Account Menu");
    }

    //getters    
    get accountMenuBtn() {
        return new Button($(ACCOUNT_MENU_BUTTON_LOCATOR), "Account Menu");
    }

    get loginBtn() {
        return new Button($(LOGIN_BUTTON_LOCATOR), "Login");
    }

    get closePopupBtn() {
        return new Button($(CLOSE_POP_UP_BUTTON_LOCATOR), "Close dialog message");
    }

    get closeCookieBtn() {
        return new Button($(CLOSE_COOKIE_BUTTON_LOCATOR), "Closse cookie message");
    }

    get userProfileBtn() {
        return new Button($(NAVIGATE_TO_PROFILE_BUTTON_LOCATOR), "Navigate to Profile Page");
    }

    get logoutBtn() {
        return new Button($(LOGOUT_BUTTON_LOCATOR), "Logout");
    }

    get sideNavMenuBtn() {
        return new Button($(SIDE_NAV_MENU_BUTTON_LOCATOR), "Open Side Navigation Menu");
    }

    get aboutUsBtn() {
        return new Button($(ABOUT_US_BUTTON_LOCATOR), "Move to About Us Page");
    }

    get customerFeedbackBtn() {
        return new Button($(CUSTOMER_FEEDBACK_BUTTON_LOCATOR), "Move to Contact");
    }

    get backToHomePageBtn() {
        return new Button($(BACK_TO_HOME_PAGE_BUTTON_LOCATOR), "Move back to Home Page");
    }

    get loggedInAccountMenu() {
        return new Button($(LOGGED_IN_BUTTON_LOCATOR), "User's Account Menu");
    }

    get ordersAndPaymentBtn() {
        return new Button($(ORDERS_AND_PAYMENT_MENU_LOCATOR), "User's Orders Submenu");
    }

    get mySavedAddressesBtn() {
        return new Button($(SAVED_ADDRESSES_BUTTON_LOCATOR), "User's Addresses Menu");
    }

    get myPaymentOptionsBtn() {
        return new Button($(PAYMENT_OPTIONS_BUTTON_LOCATOR), "User's Payments Menu");
    }

    //action methods  
    async open() {
        await allure.startStep(`Navigation to the Main Page`);
        await super.open(`${global.baseUrl}#`);
        await this.waitForScreenToBeAvailable();
        if (await this.closePopupBtn.isExisting()) {
            await this.closePopupBtn.click();
        }
        if (await this.closeCookieBtn.isExisting()) {
            await this.closeCookieBtn.click();
        }
        await allure.endStep(`passed`);
    }

    async openAccountMenu() {
        await allure.addStep(`Click on Account Menu Button`);
        await this.accountMenuBtn.wdioElement.waitForClickable({ timeout: 10000 });
        await this.accountMenuBtn.click();
        await this.loginBtn.waitForDisplayed();
    }

    async openSideNavMenu() {
        await allure.addStep(`Click on the Side Navigation Menu Button`);
        await this.sideNavMenuBtn.wdioElement.waitForClickable({ timeout: 10000 });
        await this.sideNavMenuBtn.click();
    }

    async navigateToLogin() {
        await allure.addStep(`Navigation to the Login Page`);
        await this.loginBtn.wdioElement.waitForClickable({ timeout: 10000 });
        await this.loginBtn.click();
    }

    async navigateToOrdersAndPayment() {
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
        await this.aboutUsBtn.wdioElement.waitForClickable({ timeout: 10000 });
        await this.aboutUsBtn.click();
    }

    async navigateToContactPage() {
        await allure.addStep(`Navigation to the Contact Page`);
        await this.customerFeedbackBtn.click();
    }

    async navigateToProfile() {
        await allure.addStep(`Navigation to Profile Page`);
        await this.userProfileBtn.wdioElement.waitForClickable({ timeout: 5000 });
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

} export default new MainPage();
