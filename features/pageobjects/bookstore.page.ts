import { $ } from '@wdio/globals';

class BookstorePage {
    // Selectors
    public get searchInput () { return $('input[type="text"], input[type="search"], [placeholder*="Search"]'); }
    public get cartLink () { return $('*=Cart'); } 

    // Actions
    public async open () {
        await browser.url('https://practice.expandtesting.com/bookstore');
    }

    public async searchForBook (bookTitle: string) {
        const input = await this.searchInput;
        await input.waitForDisplayed();
       
        await input.clearValue(); 
        await input.setValue(bookTitle);
        
      
        await browser.keys('Enter');
        
     
        await browser.pause(500); 
    }

    public async getBookTitleElement (bookTitle: string) {
   
        return $(`*=${bookTitle}`);
    }

    public async clickAddToCartForBook (bookTitle: string) {
        const addToCartBtn = await $(`//a[contains(text(), "${bookTitle}")]/ancestor::div[contains(@class, "card")]//button[contains(text(), "Add To Cart")]`);
        
       
        if (!(await addToCartBtn.isExisting())) {
             const fallbackBtn = await $('//a[@class="btn btn-expand w-100 mt-1 mb-2 ms-1 me-1"]');
             await fallbackBtn.waitForClickable();
             await fallbackBtn.click();
             return;
        }

        await addToCartBtn.waitForClickable();
        await addToCartBtn.click();
    }

    public async getCartText() {
        const cart = await this.cartLink;
        await cart.waitForDisplayed();
        return cart.getText();
    }
}

export default new BookstorePage();