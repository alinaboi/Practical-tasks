class LoginPage {

    get emailInput() {
        return $('#email')
    }
    get passwordInput() {
        return $('#password')
    }
    get loginBtn() {
        return $('button#loginButton')
    }
    get unloggedError() {
        return $('.error.ng-star-inserted');
    }

    async open() {
        await browser.url(`http://localhost:3000/#/login`);
    }

    async login(email, password) {
        await this.emailInput.setValue(email);
        await this.passwordInput.setValue(password);
        await this.loginBtn.click();
    
    }

    async isUnloggedErrorDisplayed() {
        await this.unloggedError.isDisplayed();
    }
    
}

export default new LoginPage();
//module.exports = new LoginPage();