// 1
let stock = { 
  "banana": 6, 
  "apple": 0,
  "pear": 12,
  "orange": 32,
  "blueberry":1
}  

let prices = {    
  "banana": 4, 
  "apple": 2, 
  "pear": 1,
  "orange": 1.5,
  "blueberry":10
}

// 2
const shoppingList = ["banana", "orange", "apple"]

// 3
// this whole function assumes stock and prices are
// consistent with each other, meaning they have all
// the same keys
const myBill = () => {
  let bill = 0

  for (const item of shoppingList) {
    // 4.1
    if (item in stock && stock[item] > 0) {
      stock[item]-- // 6 - remove one item from stock
      bill += prices[item] // 4.2
    }
  }

  return bill
}

// 5
console.log(myBill())