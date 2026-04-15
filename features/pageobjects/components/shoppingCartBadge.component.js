class ShoppingCartBadgeComponent {
    get iconBadge() {
        return $('a[data-test="shopping-cart-link"]');
    }

    get iconBadgeItemsCount() {
        return this.iconBadge.$('.shopping_cart_badge');
    }

    async getCount() {
        return (await this.iconBadgeItemsCount).getText();
    }

    async expectCount(expected) {
        await expect(this.getCount()).toHaveText(String(expected));
    }
}

module.exports = ShoppingCartBadgeComponent;
