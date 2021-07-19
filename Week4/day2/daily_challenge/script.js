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

// ------------------------------------------------------------

// If we were to use the assign method or the spread operator to copy the object, the above wouldn't be true, since we'd be making a new object pointing to a new location in memory:

let groceriesCopy2 = Object.assign({}, groceries)

// the first value of groceries doesn't get shown in groceriesCopy2
groceries.totalPrice = '20$'

// however, the changed to the nested object does get shown in the copy.  this is because a nested object is still an object. therefore, both the original object and the copy have a nested object which points to the same spot in memory.
groceries.other.payed = true

console.log(groceries, groceriesCopy2)

// -------------------------------------------------------------
// Therefore, to do a deep copy that has no connection to the original object, one option is to do the following:

let groceriesCopy3 = JSON.parse(JSON.stringify(groceries))

// just switching back groceries properties:
groceries.totalPrice = '35$'
groceries.other.payed = false

console.log(groceries, groceriesCopy3)
