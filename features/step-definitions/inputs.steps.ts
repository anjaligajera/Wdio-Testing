import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import InputsPage from '../pageobjects/inputs.page';

Given(/^I am on the inputs page$/, async () => {
    await InputsPage.open();
});

When(/^I enter "([^"]*)" in the number input$/, async (numberValue: string) => {
    await InputsPage.fillNumber(numberValue);
});

When(/^I enter "([^"]*)" in the text input$/, async (textValue: string) => {
    await InputsPage.fillText(textValue);
});

When(/^I enter "([^"]*)" in the password input$/, async (passwordValue: string) => {
    await InputsPage.fillPassword(passwordValue);
});

When(/^I enter "([^"]*)" in the date input$/, async (dateValue: string) => {
    await InputsPage.fillDate(dateValue);
});

When(/^I click on the Display Inputs button$/, async () => {
    await InputsPage.clickDisplayInputs();
});

When(/^I click on the Clear Inputs button$/, async () => {
    await InputsPage.clickClearInputs();
});

Then(/^The inputs should be correctly populated in the fields$/, async () => {
    // Asserting the values currently in the inputs
    await expect(InputsPage.inputNumber).toHaveValue('12345');
    await expect(InputsPage.inputText).toHaveValue('Automation Tester');
    await expect(InputsPage.inputPassword).toHaveValue('SuperSecret123!');
    await expect(InputsPage.inputDate).toHaveValue('2026-02-27');
});

Then(/^The input fields should be empty$/, async () => {
    // After clearing, verifying that fields revert to empty values
    await expect(InputsPage.inputNumber).toHaveValue('');
    await expect(InputsPage.inputText).toHaveValue('');
    await expect(InputsPage.inputPassword).toHaveValue('');
    await expect(InputsPage.inputDate).toHaveValue('');
});