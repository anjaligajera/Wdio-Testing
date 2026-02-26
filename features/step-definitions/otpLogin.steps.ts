import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import OtpPage from '../pageobjects/otpLogin.page';

Given(/^I am on the OTP login page$/, async () => {
    await OtpPage.open();
});

When(/^I enter the email "(.*)"$/, async (email) => {
    await OtpPage.inputEmail.setValue(email);
});

When(/^I click on the Send OTP Code button$/, async () => {
    await OtpPage.btnSendOtp.click();
});

When(/^I enter the OTP "(.*)"$/, async (otp) => {
    await OtpPage.enterOtpCode(otp);
});

When(/^I click on the Verify button$/, async () => {
    
});

Then(/^I should see a success message saying "(.*)"$/, async (message) => {
    await expect(OtpPage.flashAlert).toBeExisting();
    await expect(OtpPage.flashAlert).toHaveText(message);
});