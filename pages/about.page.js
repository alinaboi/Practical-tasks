class AboutPage {
    get accountMenuBtn() {
        return $('#navbarAccount');
    }
    get sideNavMenuBtn() {
        return $('.mat-focus-indicator.mat-tooltip-trigger.mat-button.mat-button-base:first-of-type');
    }
    get aboutUsBtn() {
        return $('[routerlink="/about"]');
    }
    get twitterBtn() {
        return $('[aria-label="Button for the Twitter page of the shop"]');
    }
    get facebookBtn() {
        return $('[aria-label="Button for the Facebook page of the shop"]');
        //return $('.svg-inline--fa.fa-facebook.fa-w-16.fa-lg');
    }
    get slackBtn() {
        return $('[aria-label="Button for the Slack page of the shop"]');
    }
    get redditBtn() {
        return $('[aria-label="Button for the Reddit page of the shop"]');
    }
    get pressKitBtn() {
        return $('[aria-label="Button for the PressKit page of the shop"]');
    }

    async open() {
        await browser.url(`http://localhost:3000/#/about`);
    }
    async navigateToTwitter() {
        await this.twitterBtn.click();
    }
    async navigateToFacebook() {
        await this.facebookBtn.click();
    }
    async navigateToSlack() {
        await this.slackBtn.click();
    }
    async navigateToReddit() {
        await this.redditBtn.click();
    }
    async navigateToPressKit() {
        await this.pressKitBtn.click();
    }
   
}
export default new AboutPage();