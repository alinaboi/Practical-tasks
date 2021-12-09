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
    get logoutBtn() {
        return new Button($('#navbarLogoutButton'), "Logout");
    }
    get sideNavMenuBtn() {
        return new Button($('.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base:first-of-type'), "Open Side Navigation Menu");
    }
    get aboutUsBtn() {
        return new Button($('[routerlink="/about"]'), "Move to About Us Page");
    }
    get backToHomePageBtn() {
        return new Button($('[aria-label="Back to homepage"]'), "Move back to Home Page");
    }
    get loggedInAccountMenu() {
        return new Dropdown($('.mat-menu-content.ng-tns-c256-2'), "User's Account Menu")
    }
    

    async open() {
        await super.open(`http://localhost:3000/#`);
        if (await this.closePopupBtn.isExisting())
            await this.closePopupBtn.click();
        if (await this.closeCookieBtn.isExisting())
            await this.closeCookieBtn.click();
    }
    async openAccountMenu() {
        await this.accountMenuBtn.click();
    }
    async openSideNavMenu() {
        await this.sideNavMenuBtn.click();
    }
    async navigateToLogin() {
        await this.loginBtn.click();
    }
    async navigateToAboutPage() {
        await this.aboutUsBtn.click();
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
}
export default new MainPage();