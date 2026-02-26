import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@wdio/globals';
import DragAndDropPage from '../pageobjects/dragAnddrop.page';

Given(/^I am on the drag and drop practice page$/, async () => {
    await DragAndDropPage.open();
    
    // Wait for the elements to be displayed
    await DragAndDropPage.boxA.waitForDisplayed();
    await DragAndDropPage.boxB.waitForDisplayed();
});

Then(/^the left box should contain "([^"]*)"$/, async (expectedText: string) => {
    const text = await DragAndDropPage.leftBoxHeader.getText();
    await expect(text).toEqual(expectedText);
});

When(/^I drag the left box to the right box$/, async () => {
    await DragAndDropPage.dragLeftToRight();
});