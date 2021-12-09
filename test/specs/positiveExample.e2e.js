describe('Login testing', () => {
    it('positive login test', async () => {

        //Main Page
        await browser.url(`http://localhost:3000/#/`);
        await browser.pause(5000);
        await $('button.close-dialog').click();
        await $('.cc-btn').click();
        await $('#navbarAccount').click();
        await $('button[routerlink="/login"]').click();

        //Login Page
        await browser.pause(3000);
        await $('#email').setValue('testemail@gmail.com');
        await $('#password').setValue('Testuserpass1');
        await $('button#loginButton').click();

        //Positive -> After login page
        await $('#navbarAccount').click();
        await browser.pause(7000); 
        let logoutBtn = await $('#navbarLogoutButton');
        //let isDisplayed = await logoutBtn.isDisplayed();

        
        //Verify Logout Button is displayed
        await expect(logoutBtn).toBeDisplayed();

        /*try {
            if ( !isDisplayed) {
                throw new Error;
            } else {
                console.log("You are successfully logged in!");
            }
        } catch (error) {
            console.log("Oops. Something went wrong. " + error);
        }
        await browser.pause(2000);*/
       

    });

});