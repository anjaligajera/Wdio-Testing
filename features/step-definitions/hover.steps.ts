import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import HoversPage from '../pageobjects/hover.page.ts';

Given(/^I am on the hovers page$/, async () => {
    await HoversPage.open();
});

When(/^I hover over the avatar of user (\d+)$/, async (index: number) => {
    // Pass the index directly to the hover helper
    await HoversPage.hoverOverUser(index);
});

Then(/^I should see the name "([^"]*)"$/, async (expectedName: string) => {
    // Extract the numeric index from the string (e.g. "user3" -> 3)
    const indexStr = expectedName.match(/\d+/);
    const index = indexStr ? parseInt(indexStr[0]) : 1;
    
    const nameElem = await HoversPage.userName(index);

    // Wait for the specific element to be visible
    await nameElem.waitForDisplayed({ 
        timeout: 5000, 
        timeoutMsg: `FAILED: Username element for index ${index} was not displayed.` 
    });

    await expect(nameElem).toHaveText(expectedName);
});