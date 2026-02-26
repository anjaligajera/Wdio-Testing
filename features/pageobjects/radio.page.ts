class RadioButtonsPage {

    // Selectors for color radio buttons
    get radioColorBlue() { return $('//input[@value="blue"]'); }
    get radioColorRed() { return $('//input[@value="red"]'); }
    get radioColorYellow() { return $('//input[@value="yellow"]'); }
    get radioColorBlack() { return $('//input[@value="black"]'); }
    get radioColorGreen() { return $('//input[@value="green"]'); }

    // Selectors for sport radio buttons
    get sportBasketball() { return $('//input[@value="basketball"]'); }
    get sportFootball() { return $('//input[@value="football"]'); }
    get sportTennis() { return $('//input[@value="tennis"]'); }

    // Open the page
    async open() {
        await browser.url('https://practice.expandtesting.com/radio-buttons');
    }

    // Select a color by value
    async selectColor(color: string) {
        await $(`input[value="${color}"]`).click();
    }

    // Select a sport
    async selectSport(sport: string) {
        await $(`input[value="${sport}"]`).click();
    }

    // Check if selected
    async isColorSelected(color: string) {
        return await $(`input[value="${color}"]`).isSelected();
    }

    async isSportSelected(sport: string) {
        return await $(`input[value="${sport}"]`).isSelected();
    }
}

export default new RadioButtonsPage();
