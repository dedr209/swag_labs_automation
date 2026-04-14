const Page = require('./page')

class CheckoutPage extends Page {
    // Phase 1: Information Form Locators
    get firstNameInput() { return $('[data-test="firstName"]'); }
    get lastNameInput() { return $('[data-test="lastName"]'); }
    get zipInput() { return $('[data-test="postalCode"]'); }
    get continueButton() { return $('[data-test="continue"]'); }

    // Phase 2: Overview Page Locators
    get finishButton() { return $('[data-test="finish"]'); }

    // Phase 3: Complete Page Locators
    get successMessage() { return $('.complete-header'); }

    async fillInformation(firstName, lastName, zipCode) {
        await this.firstNameInput.setValue(firstName);
        await this.lastNameInput.setValue(lastName);
        await this.zipInput.setValue(zipCode);
    }

    async clickContinue() {
        await this.continueButton.click();
    }

    async completeCheckout() {
        await this.finishButton.waitForDisplayed();
        await this.finishButton.click();
    }

    async getCheckoutCompleteMessage() {
        await this.successMessage.waitForDisplayed();
        return await this.successMessage.getText();
    }
}

module.exports = new CheckoutPage('checkout-step-one.html');