import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import ForgotPasswordPage from '../pageobjects/forgot.password.page';

Given(/^I am on the forgot password page$/, async () => {
    await ForgotPasswordPage.open();
});

When(/^I enter the email "(.*)"$/, async (email: string) => {
   
    await ForgotPasswordPage.inputEmail.waitForDisplayed();
    await ForgotPasswordPage.inputEmail.setValue(email);
});
When(/^I click the Retrieve password button$/, async () => {
  
    const button = await ForgotPasswordPage.btnSubmit;
    
 
    await button.waitForExist();
    

    await browser.execute((el: HTMLElement) => el.click(), button);
});

Then(/^I should see a message saying "(.*)"$/, async (expectedText: string) => {
    const message = await ForgotPasswordPage.messageAlert;
    
   
    await message.waitForDisplayed({ timeout: 5000 });

  
    await expect(message).toHaveText(expect.stringContaining(expectedText));
});