const Page = require('./page');

class InventoryPage extends Page {
    /**
     * Parameterized CSS Selector
     * Converts "Sauce Labs Backpack" to "add-to-cart-sauce-labs-backpack"
     */
    async getAddToCartButton(productName) {
        const formattedName = productName.toLowerCase().replace(/ /g, '-');
        return $(`[data-test="add-to-cart-${formattedName}"]`);
    }
    get inventoryContainer() {
        return $('#inventory_container');
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

module.exports = new InventoryPage('inventory.html');