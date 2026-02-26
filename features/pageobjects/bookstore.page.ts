import { $$, $, browser } from '@wdio/globals';

class BookstorePage {
    // Define locators (use selectors scoped to the books container)
    public get searchInput() {
        return $('//input[@placeholder="Enter keywords..."]');
    }

    public get bookTitles() {
        return $$('//div[@id="books"]//h5');
    }

    public get addToCartButtons() {
        return $$('//a[@class="btn btn-expand w-100 mt-1 mb-2 ms-1 me-1"]');
    }

    public get cartLink() {
        return $('//a[contains(., "Cart")]');
    }

    // Define actions
    public async open() {
        await browser.url('https://practice.expandtesting.com/bookstore');
    }

    public async searchForBook(bookName: string) {
        const searchBox = await this.searchInput;
        
        // Wait for the search box to be ready
        await searchBox.waitForDisplayed();
        
        // Clear any previous search term before typing the new one
        await searchBox.clearValue(); 
        await searchBox.setValue(bookName);
        
        // Pause briefly to allow the UI to filter the list
        await browser.pause(1000); 
    }

    public async getFirstBookTitle(): Promise<string> {
        // Await the length to ensure elements are present
        const count = await this.bookTitles.length;
        if (count === 0) throw new Error("No books found in the results!");
        
        return await this.bookTitles[0].getText();
    }

    public async addFirstBookToCart() {
        const count = await this.addToCartButtons.length;
        if (count === 0) throw new Error("No 'Add to Cart' button found!");
        
        await this.addToCartButtons[0].click();
        
        // Give the cart UI a moment to update the counter badge
        await browser.pause(1000); 
    }
}

export default new BookstorePage();