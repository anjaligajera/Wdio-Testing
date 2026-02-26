import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, $, browser } from '@wdio/globals';
import UploadPage from '../pageobjects/uploadfile.page.ts';
import path from 'path';
import fs from 'fs';

Given(/^I open the file upload page$/, async () => {
    await UploadPage.open();
});

When(/^I select a dummy test file to upload$/, async () => {
    // 1. Define a local path for our test file
    const testFileName = 'dummy-test-file.txt';
    const filePath = path.join(process.cwd(), testFileName);
    
    // 2. Generate the file if it doesn't already exist
    if (!fs.existsSync(filePath)) {
        fs.writeFileSync(filePath, 'This is a test file for WDIO automation.', 'utf8');
    }
    
    // 3. Upload the file using the page object
    await UploadPage.uploadFile(filePath);
});

When(/^I click the Upload button$/, async () => {
    await UploadPage.clickUpload();
});

Then(/^the file should be successfully uploaded$/, async () => {
    // 1. Typically, ExpandTesting redirects to a success page or shows a success message
    // Wait for the upload action to complete by checking for a success indicator
    const successMessage = await $('//*[contains(text(), "File Uploaded!")]'); 
    
    // Fallback assertion: check that the file name appears on the success screen
    const uploadedFileText = await $('body'); 

    // Wait for page to change/process
    await browser.pause(2000); 

    const text = await uploadedFileText.getText();
    expect(text).toContain('dummy-test-file.txt');
    
    // Optional cleanup: Delete the dummy file from your machine after the test
    const filePath = path.join(process.cwd(), 'dummy-test-file.txt');
    if (fs.existsSync(filePath)) {
        fs.unlinkSync(filePath);
    }
});