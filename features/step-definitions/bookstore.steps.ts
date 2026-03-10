import { Given, When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';
import BookstorePage from '../pageobjects/bookstore.page';

// We'll store the book title in a variable so we can reuse it between steps
let currentBook = '';

Given(/^I am on the bookstore page$/, async () => {
    await BookstorePage.open();
});

// The (.*) captures everything from the feature file Examples table
When(/^I search for the\s+(.*)$/, async (book: string) => {
    currentBook = book.trim();
    await BookstorePage.searchForBook(currentBook);
});

Then(/^I should see the\s+(.*) in the results$/, async (book: string) => {
    const bookTitleElement = await BookstorePage.getBookTitleElement(book.trim());
    
    // Assert that the filtered book is visible on the screen
    await expect(bookTitleElement).toBeDisplayed();
});

When(/^I click on "Add To Cart" for that book$/, async () => {
    // We use the variable stored in the previous step to find the correct button
    await BookstorePage.clickAddToCartForBook(currentBook);
});

Then(/^the cart should be updated$/, async () => {
    // A simple validation to ensure the cart interacts properly.
    // Depending on the app's behavior, it might show a toast message or update a number.
    const cartText = await BookstorePage.getCartText();
    
    // Validate the cart element exists and is rendered
    expect(cartText).toBeTruthy();
    
    // Optional: wait a moment for animations or toast messages to clear before the next iteration
    await browser.pause(500);
});