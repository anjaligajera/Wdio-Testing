import { $ } from '@wdio/globals';

class DropdownPage {
  
    public get simpleDropdown() { return $('//select[@id="dropdown"]'); }
    public get countryDropdown() { return $('//select[@id="country"]'); }
    public get elementsPerPageDropdown() { return $('//select[@id="elementsPerPageSelect"]'); }

   
    public async open() {
        await browser.url('https://practice.expandtesting.com/dropdown');
    }

    public async selectSimpleOption(text: string) {
        await this.simpleDropdown.selectByVisibleText(text);
    }

    public async selectCountryOption(text: string) {
        await this.countryDropdown.selectByVisibleText(text);
    }

    public async selectElementsPerPageOption(text: string) {
        await this.elementsPerPageDropdown.selectByVisibleText(text);
    }

    public get selectedSimpleOption() {
        return this.simpleDropdown.$('//option[text()="Option 1"]');
    }

    public get selectedCountryOption() {
        return this.countryDropdown.$('//option[@value="IN"]');
    }

    public get selectedElementsOption() {
        return this.elementsPerPageDropdown.$('//option[@value="50"]');
    }
}

export default new DropdownPage();