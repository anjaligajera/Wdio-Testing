import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect, browser } from '@wdio/globals';
import BookstorePage from '../pageobjects/bookstore.page.ts';

Given(/^I am on the bookstore page$/, async () => {
    await BookstorePage.open();
});

// Using \s+(.*) captures the unquoted book name even if there are extra spaces
When(/^I search for the\s+(.*)$/, async (bookName: string) => {
    // Trim removes any accidental leading/trailing spaces from the feature file
    await BookstorePage.searchForBook(bookName.trim());
});

Then(/^I should see the\s+(.*)\s+in the results$/, async (bookName: string) => {
    const title = await BookstorePage.getFirstBookTitle();
    await expect(title).toContain(bookName.trim());
});

When(/^I click on "Add To Cart" for that book$/, async () => {
    await BookstorePage.addFirstBookToCart();
});

Then(/^the cart should be updated$/, async () => {
    // Wait until the cart text contains a digit (1, 2, 3, etc.)
    await browser.waitUntil(
        async () => {
            const text = await BookstorePage.cartLink.getText();
            // \d+ is a regex that looks for any number
            return /\d+/.test(text); 
        },
        {
            timeout: 5000,
            timeoutMsg: 'Expected cart to update with a number'
        }
    );

    const cartText = await BookstorePage.cartLink.getText();
    
    // Extract the number from the cart text (e.g., "1" or "Cart 2")
    const match = cartText.match(/\d+/);
    const cartNumber = match ? parseInt(match[0], 10) : 0;
    
    // Assert that the cart has at least 1 item in it
    expect(cartNumber).toBeGreaterThan(0);
});