import Page from './page.js';

class CartPage extends Page {
    get checkoutButton() { return $('[data-test="checkout"]'); }

    // Selects all elements containing the item names in the cart
    get cartItemNames() { return $$('.inventory_item_name'); }

    async isProductInCart(productName) {
        const items = await this.cartItemNames;
        for (let item of items) {
            const text = await item.getText();
            if (text === productName) {
                return true;
            }
        }
        return false;
    }

    async proceedToCheckout() {
        await this.checkoutButton.click();
    }
}

export default new CartPage();