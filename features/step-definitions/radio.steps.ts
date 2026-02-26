import { Given, When, Then } from '@cucumber/cucumber';
import RadioButtonsPage from '../pageobjects/radio.page';
import { expect } from 'chai';

Given('I open the Radio Buttons test page', async () => {
    await RadioButtonsPage.open();
});

When('I select the {string} radio button {string}', async (group, option) => {
    await RadioButtonsPage.select(group, option);
});

Then('the radio button {string} in group {string} should be selected', async (option, group) => {
    const isSelected = await RadioButtonsPage.isSelected(group, option);
    expect(isSelected).to.be.true;
});
