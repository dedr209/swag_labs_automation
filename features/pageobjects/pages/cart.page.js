const Page = require('./page.js')

class CartPage extends Page {
    get checkoutButton() { return $('[data-test="checkout"]'); }

    // Selects all elements containing the items in the cart
    get cartItems() { return $$('.cart_item'); }

    async getCartContents() {
        const items = await this.cartItems;
        const contents = [];
        for (let item of items) {
            const name = await item.$('.inventory_item_name').getText();
            const quantity = parseInt(await item.$('.cart_quantity').getText(), 10);
            contents.push({ name, quantity });
        }
        return contents;
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}
module.exports = new CartPage('cart.html');
