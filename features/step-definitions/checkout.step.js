const { When, Then } = require('@wdio/cucumber-framework');
const { expect } = require('@wdio/globals');

const { InventoryPage, CartPage, CheckoutPage } = require('../pageobjects/pages');

When(/^I add the product "([^"]*)" to the cart$/, async (productName) => {
    await InventoryPage.addProductToCart(productName);
});

When(/^I navigate to the cart$/, async () => {
    await InventoryPage.goToCart();
});

Then(/^I should see the product "([^"]*)" in the cart$/, async (productName) => {
    const cartContents = await CartPage.getCartContents();

    // Strict cart validation: there should be exactly one item total, and it matches the expected product
    expect(cartContents.length).toBe(1);
    expect(cartContents[0].name).toBe(productName);
    expect(cartContents[0].quantity).toBe(1);
});

When(/^I proceed to checkout$/, async () => {
    await CartPage.proceedToCheckout();
});

When(/^I fill in the checkout information with first name "([^"]*)", last name "([^"]*)", and zip code "([^"]*)"$/, async (firstName, lastName, zip) => {
    await CheckoutPage.fillInformation(firstName, lastName, zip);
    await CheckoutPage.clickContinue();
});

When(/^I complete the checkout$/, async () => {
    await CheckoutPage.completeCheckout();
});

Then(/^I should see the checkout success message "([^"]*)"$/, async (expectedMessage) => {
    const actualMessage = await CheckoutPage.getCheckoutCompleteMessage();
    expect(actualMessage).toEqual(expectedMessage);
});