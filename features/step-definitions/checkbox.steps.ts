import { Given, When, Then } from '@cucumber/cucumber';
import CheckboxPage from '../pageobjects/checkbox.page';

Given('I open the checkboxes page', async () => {
    await CheckboxPage.open();
});

Then('I should see two checkboxes', async () => {
    const boxes = await CheckboxPage.checkboxes;
    await expect(boxes).toBeElementsArrayOfSize(2);
});

When('I select the first checkbox', async () => {
    await CheckboxPage.selectFirstCheckbox();
});

Then('The first checkbox should be selected', async () => {
    const boxes = await CheckboxPage.checkboxes;
    await expect(boxes[0]).toBeSelected();
});

When('I unselect the second checkbox', async () => {
    await CheckboxPage.unselectSecondCheckbox();
});

Then('The second checkbox should not be selected', async () => {
    const boxes = await CheckboxPage.checkboxes;
    await expect(boxes[1]).not.toBeSelected();
});
