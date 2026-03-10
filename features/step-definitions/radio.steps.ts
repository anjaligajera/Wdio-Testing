import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import RadioButtonsPage from '../pageobjects/radio.page';

Given(/^I am on the radio buttons page$/, async () => {
    await RadioButtonsPage.open();
});


When(/^I select the "([^"]*)" color radio button$/, async (color: string) => {
    await RadioButtonsPage.selectColor(color);
});

Then(/^the "([^"]*)" color radio button should be selected$/, async (color: string) => {
    const radioButton = await RadioButtonsPage.getColorRadioButton(color);
    await expect(radioButton).toBeSelected();
});

Then(/^the "([^"]*)" color radio button should not be selected$/, async (color: string) => {
    const radioButton = await RadioButtonsPage.getColorRadioButton(color);
    await expect(radioButton).not.toBeSelected();
});

// Sport Steps
When(/^I select the "([^"]*)" sport radio button$/, async (sport: string) => {
    await RadioButtonsPage.selectSport(sport);
});

Then(/^the "([^"]*)" sport radio button should be selected$/, async (sport: string) => {
    const radioButton = await RadioButtonsPage.getSportRadioButton(sport);
    await expect(radioButton).toBeSelected();
});

Then(/^the "([^"]*)" sport radio button should not be selected$/, async (sport: string) => {
    const radioButton = await RadioButtonsPage.getSportRadioButton(sport);
    await expect(radioButton).not.toBeSelected();
});

// Disabled Steps
When(/^I attempt to select the "([^"]*)" color radio button$/, async (color: string) => {
    const radioButton = await RadioButtonsPage.getColorRadioButton(color);
    
    // We catch the error because clicking a disabled button usually throws an error in WebdriverIO
    try {
        await radioButton.click();
    } catch (error) {
        // Expected to fail if disabled
        console.log(`Successfully caught attempt to click disabled button: ${color}`);
    }
});

Then(/^the "([^"]*)" color radio button should be disabled$/, async (color: string) => {
    const radioButton = await RadioButtonsPage.getColorRadioButton(color);
    
    // Validate the element has the 'disabled' attribute
    await expect(radioButton).toBeDisabled();
});