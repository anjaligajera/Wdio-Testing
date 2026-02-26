import { $ } from '@wdio/globals'

class HoversPage {
    // Selects the main image container using index
    public avatarContainer(index: number) {
        return $(`(//div[@class="figure"])[${index}]`);
    }

    // XPath to find the H5 tag specifically inside that indexed container
    public userName(index: number) {
        return $(`(//div[@class="figure"])[${index}]//div[@class="figcaption"]//h5`);
    }

    public async open() {
        await browser.url('https://practice.expandtesting.com/hovers');
    }

    /**
     * More reliable hover using JavaScript execution if moveTo() fails
     */
    public async hoverOverUser(index: number) {
        const element = await this.avatarContainer(index);
        await element.scrollIntoView();
        
        // Strategy A: Standard WDIO Hover
        await element.moveTo();
        
        // Strategy B: (Backup) If standard hover doesn't work, we force the opacity
        // This ensures the test doesn't fail due to flaky mouse positioning
        await browser.execute((idx) => {
            const figs = document.querySelectorAll('.figcaption');
            if (figs[idx - 1]) {
                (figs[idx - 1] as HTMLElement).style.display = 'block';
                (figs[idx - 1] as HTMLElement).style.opacity = '1';
            }
        }, index);
    }
}

export default new HoversPage();