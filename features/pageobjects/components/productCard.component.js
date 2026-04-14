class ProductCardComponent {
    constructor(title) {
        this.title = title;
    }

    async getCard() {
        const cards = await $$('.inventory_item');
        for (const card of cards) {
            const titleEl = await card.$('.inventory_item_name');
            const text = await titleEl.getText();
            if (text === this.title) return card;
        }
        throw new Error(`Product card "${this.title}" not found`);
    }

    async addToCartButton() {
        const card = await this.getCard();
        return card.$('[id^="add-to-cart"]');
    }

    async addToCart() {
        const button = await this.addToCartButton();
        await button.waitForDisplayed();
        await button.click();
    }
}

module.exports = ProductCardComponent;
