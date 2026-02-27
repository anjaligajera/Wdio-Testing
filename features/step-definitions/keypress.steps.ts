import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import KeyPressesPage from '../pageobjects/keypress.page';

Given(/^I am on the Key Presses practice page$/, async () => {
    await KeyPressesPage.open();
});

When(/^I press the "([^"]*)?" key$/, async (key: string) => {
    await KeyPressesPage.pressSpecificKey(key);
});

Then(/^I should see the result text "([^"]*)?"$/, async (expectedMessage: string) => {
    // This built-in WDIO assertion automatically polls and waits 
    // for the text to appear, fixing the race condition!
    await expect(KeyPressesPage.resultText).toHaveText(expectedMessage);
});