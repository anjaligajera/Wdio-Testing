class CheckboxPage {

    public get checkboxes() {
        return $$('input[type="checkbox"]');
    }

    async open() {
        await browser.url('https://practice.expandtesting.com/checkboxes');
    }

    async selectFirstCheckbox() {
        const boxes = await this.checkboxes;
        if (!(await boxes[0].isSelected())) {
            await boxes[0].click();
        }
    }

    async unselectSecondCheckbox() {
        const boxes = await this.checkboxes;
        if (await boxes[1].isSelected()) {
            await boxes[1].click();
        }
    }
}

export default new CheckboxPage();
