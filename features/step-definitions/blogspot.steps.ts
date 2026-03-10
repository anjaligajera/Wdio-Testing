import { Given, Then } from '@wdio/cucumber-framework';
import blogspotpage from '../pageobjects/blogspot.page';

Given('I am on the Automation testing practice website', async () => {
    await blogspotpage.open();
});

/*Then('I should see the "Automation Testing Practice " title', async () => {
    await expect(blogspotpage.title).toHaveText('Automation Testing Practice');
});

Then('I should see the "Home" link and click on it', async () => {
    await expect(blogspotpage.homeLink).toBeDisplayed();
    await blogspotpage.homeLink.click();
});

Then('I should see the "Udemy Courses" link and click on it', async () => {
    await expect(blogspotpage.udemyCoursesLink).toBeDisplayed();
    await blogspotpage.udemyCoursesLink.click();
});

Then('I should see the "Online Trainings" link and click on it', async () => {
    await expect(blogspotpage.onlineTrainingsLink).toBeDisplayed();
    await blogspotpage.onlineTrainingsLink.click();
});

Then('I should see the "Blog" link and click on it', async () => {
    await expect(blogspotpage.blogLink).toBeDisplayed();
    await blogspotpage.blogLink.click();
});

Then('I should see the "PlaywrightPractice" link and click on it', async () => {
    await expect(blogspotpage.playwrightPracticeLink).toBeDisplayed();
    await blogspotpage.playwrightPracticeLink.click();
});*/
