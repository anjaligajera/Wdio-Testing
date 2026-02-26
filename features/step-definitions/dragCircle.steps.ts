import { Given, When, Then } from '@cucumber/cucumber';
import dragAndDropCirclesPage from '../pageobjects/dragCircle.page';

Given('I open the drag and drop circles page', async () => {
    await dragAndDropCirclesPage.open();
});

When('I drag the circle to the drop area', async () => {
    await dragAndDropCirclesPage.dragCircleToDrop();
});

Then('The circle should be dropped successfully', async () => {
    const droppedCircle = await dragAndDropCirclesPage.dropArea.$('div.circle');
    const isDisplayed = await droppedCircle.isDisplayed();
    if (!isDisplayed) {
        throw new Error('Circle was not dropped inside drop area');
    }
});
