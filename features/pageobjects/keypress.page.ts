import { $, browser } from '@wdio/globals';

class KeyPressesPage {
    /**
     * Define selectors using getter methods
     */
    public get inputTarget () {
        return $('//input[@id="target"]'); // The input field where keys are captured
    }

    public get resultText () {
        return $('//p[@class="mt-3"]'); // The element displaying the result message
    }

    /**
     * Open the Key Presses page
     */
    public async open () {
        await browser.url('https://practice.expandtesting.com/key-presses');
        await this.inputTarget.waitForDisplayed();
    }

    /**
     * Focus on the input and press a specific key
     */
    public async pressSpecificKey (key: string) {
        // Click on the target input box so it is in focus
        await this.inputTarget.click();
        
        // Use browser.keys to simulate physical keyboard key presses
        await browser.keys([key]);
    }

    /**
     * Retrieve the text that appears after a key press
     */
    public async getResultMessage () {
        await this.resultText.waitForDisplayed();
        return await this.resultText.getText();
    }
}

export default new KeyPressesPage();