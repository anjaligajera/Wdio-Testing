import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import DropdownPage from '../pageobjects/dropdown.page';

Given(/^I open the dropdown practice page$/, async () => {
    await DropdownPage.open();
});


When(/^I select "(.*)" from the Simple Dropdown$/, async (option: string) => {
    await DropdownPage.selectSimpleOption(option);
});

Then(/^the Simple Dropdown should have "(.*)" selected$/, async (expectedOption: string) => {
   
    await expect(DropdownPage.selectedSimpleOption).toHaveText(expectedOption);
});


When(/^I select "(.*)" from the Country Dropdown$/, async (country: string) => {
    await DropdownPage.selectCountryOption(country);
});

Then(/^the Country Dropdown should have "(.*)" selected$/, async (expectedCountry: string) => {
    await expect(DropdownPage.selectedCountryOption).toHaveText(expectedCountry);
});


When(/^I select "(.*)" from the Elements per Page Dropdown$/, async (amount: string) => {
    await DropdownPage.selectElementsPerPageOption(amount);
});

Then(/^the Elements per Page Dropdown should have "(.*)" selected$/, async (expectedAmount: string) => {
    await expect(DropdownPage.selectedElementsOption).toHaveText(expectedAmount);
});