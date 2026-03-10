import { $ } from '@wdio/globals';

class RadioButtonsPage {
    // Actions
    public async open () {
        await browser.url('https://practice.expandtesting.com/radio-buttons');
    }

    /**
     * Dynamically gets a color radio button based on its value
     * @param colorName 'blue', 'red', 'yellow', 'black', 'green'
     */
    public async getColorRadioButton (colorName: string) {
        // Find input radio element by ID or value
        return $(`input[type="radio"][id="${colorName.toLowerCase()}"], input[type="radio"][value="${colorName.toLowerCase()}"]`);
    }

    /**
     * Dynamically gets a sport radio button based on its value
     * @param sportName 'basketball', 'football', 'tennis'
     */
    public async getSportRadioButton (sportName: string) {
        return $(`input[type="radio"][id="${sportName.toLowerCase()}"], input[type="radio"][value="${sportName.toLowerCase()}"]`);
    }

    public async selectColor (colorName: string) {
        const radioButton = await this.getColorRadioButton(colorName);
        // Radio buttons are often hidden behind custom UI labels, clicking the parent/label might be necessary, 
        // but standard `.click()` on the input or its surrounding wrapper usually works.
        await radioButton.click();
    }

    public async selectSport (sportName: string) {
        const radioButton = await this.getSportRadioButton(sportName);
        await radioButton.click();
    }
}

export default new RadioButtonsPage();