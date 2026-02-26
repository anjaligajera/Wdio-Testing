
import { Given, When, Then } from '@wdio/cucumber-framework';
import { $, browser } from '@wdio/globals'; 


const randomUsername = `user_${Date.now()}`;

Given(/^I am on the registration page$/, async () => {
    await browser.url('https://practice.expandtesting.com/register');
});

When(/^I enter a unique username$/, async () => {
   
    await $('#username').setValue(randomUsername);
});

When(/^I enter the password "(.*)"$/, async (password) => {
    await $('#password').setValue(password);
});

When(/^I enter the confirm password "(.*)"$/, async (confirmPassword) => {
    
    await $('#confirmPassword').setValue(confirmPassword);
});

When(/^I click on the Register button$/, async () => {
    
    await $('button[type="submit"]').click();
});
     
Then(/^I should be redirected to the login page$/, async() => {
	await $('h2=Login').waitForExist({ timeout: 5000 });
});

Then(/^I should see a success message$/, () => {
	
});


