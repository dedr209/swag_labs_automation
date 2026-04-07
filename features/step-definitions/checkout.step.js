import { When, Then } from '@wdio/cucumber-framework';
import { expect } from '@wdio/globals';

import InventoryPage from '../pageobjects/inventory.page.js';
import CartPage from '../pageobjects/cart.page.js';
import CheckoutPage from '../pageobjects/checkout.page.js';


When(/^I add the product "([^"]*)" to the cart$/, async (productName) => {
    await InventoryPage.addProductToCart(productName);
});

When(/^I navigate to the cart$/, async () => {
    await InventoryPage.goToCart();
});

Then(/^I should see the product "([^"]*)" in the cart$/, async (productName) => {
    const isPresent = await CartPage.isProductInCart(productName);
    // Use WebdriverIO's built-in expect assertion
    expect(isPresent).toBe(true);
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