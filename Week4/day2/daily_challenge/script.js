let groceries = {
    fruits: ['pear', 'apple', 'banana'],
    vegetables: ['tomatoes', 'cucumber', 'salad'],
    totalPrice: '20$',
    other: {
        payed: true,
        meansOfPayment: ['cash', 'creditCard'],
    },
}

// 1
let groceriesCopy = groceries

// 2
groceries.totalPrice = '35$'
// We will see the change in groceriesCopy as well, because it was copied by reference.

// 3
groceries.other.payed = false
// We will see this change in the groceriesCopy as well, since when a copy of an object is made by reference, both the object and the copy point to the same place in the heap memory.  Therefore, when the original object is changed (or even the copy), it's the same place in memory being modified.  Therefore, all changes done to those objects will be visible in both, regardless of how nested the property being changed is.
