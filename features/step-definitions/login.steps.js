const { Given, When, Then } = require('@wdio/cucumber-framework');
const LoginPage = require('../pageobjects/pages/login.page');
const InventoryPage = require("../pageobjects/pages/inventory.page");

Given(/^I am on the login page$/, async () => {
    await LoginPage.open();
});

When(/^I login with username "([^"]*)" and password "([^"]*)"$/, async (username, password) => {
    await LoginPage.login(username, password);
});

Then(/^the login should result in (.*)$/, async (status) => {
    if (status === 'success') {
        const inventoryContainer = InventoryPage.inventoryContainer;
        await expect(inventoryContainer).toBeExisting();
    } else if (status === 'failure') {
        await expect(LoginPage.errorMessage).toBeExisting();
        await expect(LoginPage.errorMessage).toHaveText('Sorry, this user has been locked out.', { containing: true });
    }
});