class ShoppingCart {
    constructor() {
        this.total = 0;
        this.items = {};
    }
    addItem(item_name, quantity, price) {
        // this.items = { item_name:quantity };
        this.items[item_name] = quantity;
        this.total += (quantity * price);

    }
    removeItem(item_name, quantity, price) {
        // confusion set it
        var prevQuantity = this.items[item_name];
        if (prevQuantity) {
            if (prevQuantity >= quantity) {
                var currentQuantity = prevQuantity - quantity;
                this.items[item_name] = currentQuantity;
                this.total -= (quantity * price);
            } else {
                delete this.items[item_name];
                this.total -= (prevQuantity * price);
            }
        }
    }
    checkout(cash_paid) {
        var balance = 0;
        if (cash_paid < this.total) {
            return "Cash paid not enough.";
        } else {
            balance = cash_paid - this.total;
            return balance;
        }
    }
}
class Shop extends ShoppingCart {
    constructor() {
        super();
        this.quantity = 100;
    }
        removeItem() {
            this.quantity--;
        }
    }


let cart = new ShoppingCart();
cart.addItem("Mango", 3, 10);
cart.addIitem("Orange", 16, 10);
cart.checkout(265)