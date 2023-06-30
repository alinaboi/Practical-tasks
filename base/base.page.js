
export default class BasePage {
    constructor() {
    }

    async open(url) {
        await browser.url(url);
    }

    async waitForScreenAvailable() {
        await this.getBaseElement().waitForDisplayed();
    }
}
