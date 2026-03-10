import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $ } from '@wdio/globals'
import UploadPage from '../pageobjects/uploadfile.page';
import * as path from 'path';
import * as fs from 'fs';

Given(/^I am on the file upload page$/, async () => {
    await UploadPage.open();
});

When(/^I select a file named "([^"]*)" to upload$/, async (fileName: string) => {
    // Determine the absolute path of the file
    const filePath = path.join(process.cwd(), fileName);
    
    // Create a dummy file dynamically if it doesn't already exist
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, 'This is a test file for automation testing.', 'utf8');
    }

    await UploadPage.uploadFile(filePath);
});

When(/^I click the upload button$/, async () => {
    await UploadPage.submit();
});

Then(/^I should see a success message indicating the file was uploaded$/, async () => {
    // Most practice upload pages redirect to a page with a success header or message.
    // We check the body text to see if the upload was successful.
    const bodyText = await $('body').getText();
    
    // 'File Uploaded!' is the standard success message for these types of practice sites
    expect(bodyText).toMatch(/File Uploaded!/i);
    
    // Optionally clean up the generated dummy file after the test
    const filePath = path.join(process.cwd(), 'test-upload.txt');
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
});