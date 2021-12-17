import BasePage from "../base/base.page.js";
import Button from "../elements/button.js";
import Input from "../elements/input.js";


class ProfilePage extends BasePage{
    constructor() {
        super();
    }
    
    static getBaseElement() {
        return new BaseElement($('.mdl-layout-title'), "Site Logo");
    }
    get closePopupBtn() {
        return new Button($('button.close-dialog'), "Close dialog message");
    }
    get closeCookieBtn() {
        return new Button($('.cc-btn'), "Closse cookie message");
    }
    get backBtn() {
        return new Button($('//span[contains(text(),"Back")]'), "Navigate back to Search Page");
    }
    get choosePicInput() {
        return new Input($('//input[@id="picture"]'), "Upload the picture here");
    }
    get uploadPicBtn() {
        return new Button($('//button[@aria-label="Button to upload the profile picture"]'), "Save changes");
    }

    async open() {
        await allure.startStep(`Navigation to the Profile Page`);
        await super.open(`http://localhost:3000/#/profile`);
        if (await this.closePopupBtn.isExisting())
            await this.closePopupBtn.click();
        if (await this.closeCookieBtn.isExisting())
            await this.closeCookieBtn.click();
            await allure.endStep(`passed`);
    }
    async waitForScreenToBeAvailable() {
        await this.backBtn.waitForDisplayed();
        await this.uploadPicBtn.waitForDisplayed();
    }
    async uploadPic(path) {
        await allure.startStep(`Uploading the picture`);
        await browser.chooseFile($('//input[@id="picture"]'), path);
        await this.uploadPicBtn(click);
        await allure.endStep(`passed`);
    }

   
    
}
export default new ProfilePage();