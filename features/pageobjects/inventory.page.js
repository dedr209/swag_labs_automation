import Page from './page.js';

class InventoryPage extends Page {
    /**
     * Parameterized CSS Selector
     * Converts "Sauce Labs Backpack" to "add-to-cart-sauce-labs-backpack"
     */
    async getAddToCartButton(productName) {
        const formattedName = productName.toLowerCase().replace(/ /g, '-');
        return $(`[data-test="add-to-cart-${formattedName}"]`);
    }

    get cartIcon() { return $('.shopping_cart_link'); }

    async addProductToCart(productName) {
        const button = await this.getAddToCartButton(productName);
        await button.waitForDisplayed();
        await button.click();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

export default new InventoryPage();