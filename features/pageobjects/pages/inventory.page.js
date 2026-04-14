const Page = require('./page');
const ProductCard = require('../components/productCard.component');
class InventoryPage extends Page {
    /**
     * Parameterized CSS Selector
     * Converts "Sauce Labs Backpack" to "add-to-cart-sauce-labs-backpack"
     */

    get inventoryContainer() {
        return $('#inventory_container');
    }
    get cartIcon() { return $('.shopping_cart_link'); }

    async addProductToCart(productName) {
        const card = new ProductCard(productName);
        await card.addToCart();
    }

    async goToCart() {
        await this.cartIcon.click();
    }
}

module.exports = new InventoryPage('inventory.html');