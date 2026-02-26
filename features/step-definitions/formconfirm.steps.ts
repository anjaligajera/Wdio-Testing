import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import FormPage from '../pageobjects/formconfirm.page.ts';

Given(/^I open the form validation page$/, async () => {
    await FormPage.open();
});

When(/^I click the Register button$/, async () => {
    await FormPage.clickRegister();
});

Then(/^I should see validation error messages$/, async () => {
    // Verify that the required field validation messages are displayed
    await expect(FormPage.errorName).toBeDisplayed();
    await expect(FormPage.errorNumber).toBeDisplayed();
});

When(/^I fill in the form with valid details$/, async () => {
    await FormPage.fillValidData();
});

When(/^I select the payment method "([^"]*)"$/, async (paymentMethod: string) => {
    await FormPage.selectPayment(paymentMethod);
});

Then(/^the form should be processed$/, async () => {
    // Assert that validation errors are NOT present after successful submission
    await expect(FormPage.errorName).not.toBeDisplayed();
    
    // Or you can assert a successful submission message / URL change depending on page behavior
    // await expect(browser).toHaveUrlContaining('success');
});