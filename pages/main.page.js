class MainPage {
    get accountMenuBtn() {
        return $('#navbarAccount');
    }
    get loginBtn() {
        return $('button[routerlink="/login"]');
    }
    get closePopupBtn() {
        return $('button.close-dialog');
    }
    get closeCookieBtn() {
        return $('.cc-btn');
    }
    get logoutBtn() {
        return $('#navbarLogoutButton');
    }
    get sideNavMenuBtn() {
        return $('.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base:first-of-type');
    }
    get aboutUsBtn() {
        return $('[routerlink="/about"]');
    }

    async open() {
        await browser.url(`http://localhost:3000/#/`);
        await this.closePopupBtn.click();
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
}
export default new MainPage();