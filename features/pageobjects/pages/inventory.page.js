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

    async addProductToCart(productName) {
        const card = new ProductCard(productName);
        await card.addToCart();
    }

    async goToCart() {
        await this.shoppingCartBadge.iconBadge.click();
    }
}

module.exports = new InventoryPage('inventory.html');