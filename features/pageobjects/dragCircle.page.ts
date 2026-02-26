class DragAndDropCirclesPage {

    get circle() {
        return $('div.circle');
    }

    get dropArea() {
        return $('#drop-area');
    }

    async open() {
        await browser.url('https://practice.expandtesting.com/drag-and-drop-circles');
    }

    async dragCircleToDrop() {
        await this.circle.waitForDisplayed({ timeout: 5000 });
        await this.circle.dragAndDrop(await this.dropArea);
    }
}

export default new DragAndDropCirclesPage();
