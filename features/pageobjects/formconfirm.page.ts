import { $ } from '@wdio/globals'

class FormPage {
    // ---- Locators ----
    // Locating inputs relative to their labels ensures stability even if IDs change
    public get inputContactName() { return $('//label[contains(text(), "Contact Name")]/following-sibling::input'); }
    public get inputContactNumber() { return $('//label[contains(text(), "Contact number")]/following-sibling::input'); }
    public get inputPickUpDate() { return $('//label[contains(text(), "PickUp Date")]/following-sibling::input'); }
    public get selectPaymentMethod() { return $('//label[contains(text(), "Payment Method")]/following-sibling::select'); }
    public get btnRegister() { return $('button=Register'); } 
    
    // Validation messages
    public get errorName() { return $('*=Please enter your Contact name.'); }
    public get errorNumber() { return $('*=Please provide your Contact number.'); }

    // ---- Actions ----
    public async open() {
        await browser.url('https://practice.expandtesting.com/form-validation');
        await browser.maximizeWindow();
    }

    public async fillValidData() {
        await this.inputContactName.setValue('John Doe');
        await this.inputContactNumber.setValue('012-3456789');
        
        // Date format might depend on the browser, YYYY-MM-DD is usually safe for date inputs
        await this.inputPickUpDate.setValue('2026-12-31'); 
    }

    public async selectPayment(method: string) {
        await this.selectPaymentMethod.selectByVisibleText(method);
    }

    public async clickRegister() {
        await this.btnRegister.click();
    }
}

export default new FormPage();