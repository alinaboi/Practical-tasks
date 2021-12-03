describe('Login testing', () => {
    it('negative login test', async () => {
        
        //Main Page
        await browser.url(`http://localhost:3000/#/`);
        await browser.pause(5000);
        await $('button.close-dialog').click();
        await $('.cc-btn').click();
        await $('#navbarAccount').click();
        await $('button[routerlink="/login"]').click();

        //Login Page
        await browser.pause(3000);
        await $('#email').setValue('jvfjkvk@gmail.com');
        await $('#password').setValue('cjhedfcbe');
        await $('button#loginButton').click();

        //Negative -> login page
        await browser.pause(5000);
        let notLoggedMessage = $('.error.ng-star-inserted');

        //Verify the message is displayed
        await expect(notLoggedMessage).toBeDisplayed();
    });
});
