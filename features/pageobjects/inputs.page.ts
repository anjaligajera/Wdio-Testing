import { $ } from '@wdio/globals';

class InputsPage {
    // Locators
    public get inputNumber () { return $('//input[@id="input-number"]'); }
    public get inputText () { return $('//input[@id="input-text"]'); }
    public get inputPassword () { return $('//input[@id="input-password"]'); }
    public get inputDate () { return $('//input[@id="input-date"]'); }
    
    public get btnDisplayInputs () { return $('//button[@id="btn-display-inputs"]'); }
    public get btnClearInputs () { return $('//button[@id="btn-clear-inputs"]'); }

    // Actions
    public async open () {
        await browser.url('https://practice.expandtesting.com/inputs');
    }

    public async fillNumber(value: string) {
        await this.inputNumber.setValue(value);
    }

    public async fillText(value: string) {
        await this.inputText.setValue(value);
    }

    public async fillPassword(value: string) {
        await this.inputPassword.setValue(value);
    }

    public async fillDate(value: string) {
        await this.inputDate.setValue(value);
    }

    public async clickDisplayInputs() {
        await this.btnDisplayInputs.click();
    }

    public async clickClearInputs() {
        await this.btnClearInputs.click();
    }
}

export default new InputsPage();