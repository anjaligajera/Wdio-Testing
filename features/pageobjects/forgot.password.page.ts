import { $ } from '@wdio/globals';

class ForgotPasswordPage {
  
    public get inputEmail() {
        return $('#email');
    }

    public get btnSubmit() {
        return $('//button[contains(text(), "Retrieve password")]');
    }
    
    public get messageAlert() {
       
        return $('#confirmation-alert'); 
    }


    public async open() {
        await browser.url('https://practice.expandtesting.com/forgot-password');
    }

    public async enterEmail(email: string) {
        await this.inputEmail.waitForDisplayed();
        await this.inputEmail.setValue(email);
    }

    public async clickRetrievePassword() {
        await this.btnSubmit.waitForClickable();
        await this.btnSubmit.click();
    }
}

export default new ForgotPasswordPage();
    

    