Question: 1

Create a class called ShoppingCart.

Create a constructor that has no arguments and sets the total attribute to zero, and initializes an empty dict attribute names items.

Create a method add_items that requires item_name, quantity and price arguments. This method should add the cost of the addeed items to the current value of total. It should also an an entry to the items dict such that the keys is the item_name and the value is the quantity of the item.

Create a method remove_item that requires similar arguments as add_items. It should remove items tht have been added to the shopping cart and are not required. This method should deduct the cost of these items from the current total and also update the items dict accordinglu. If the quantity of items to be removed exceeds current quantity in cart, assume that all entries of that item are to be removed.

Create a method checkout that takes in cash_paid and returns the value of balance from the payment. If cash_paid is not enough to cover the total, return Cash paid not enough.

Create a class called shop that has a constructor which initializes an attribute called quantity at 100.

Make sure shop inherits from ShoppingCart.

In the shop class, override the remove_item method, such that calling Shop's remove_items with no arguments decrements quantity by one.
