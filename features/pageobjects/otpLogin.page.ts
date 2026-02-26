import { browser } from '@wdio/globals';

class OtpPage {
   
    public get inputEmail() {
        return $('input[name="email"]'); 
    }

    public get btnSendOtp() {
        return $('.btn-primary'); 
    }

    public get inputOtp() {
        return $('input[name="otp"]'); 
    }

    public get btnVerify() {
        return $('button=Verify'); 
    }

    public get flashAlert() {
        return $('.alert-success'); 
    }

    public async open() {
        return browser.url('https://practice.expandtesting.com/otp-login');
    }

    public async login(email: string) {
        await this.inputEmail.setValue(email);
        await this.btnSendOtp.click();
    }

    public async enterOtpCode(otp: string) {
        await this.inputOtp.waitForDisplayed({ timeout: 5000 });
        await this.inputOtp.setValue(otp);
        await this.btnVerify.click();
    }
}

export default new OtpPage();