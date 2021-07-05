let userCart = {
  username: 'John',
  password: 1234,
  isUserSignedIn: true,
  cart: {
    apple: 2,
    banana: 1,
    pear: 5,
  },
  prices: {
    apple: 0.5,
    banana: 0.8,
    pear: 0.2,
  },
}
// userCart['username'] = 'Josh'
// console.log(userCart)
// console.log(userCart['cart']['pear'])
// console.log(userCart['prices']['pear'])
// let numberPear = userCart['cart']['pear']
// let pricePerPear = userCart['prices']['pear']
// let totalPricePear = numberPear * pricePerPear
// alert(`The pears cost ${totalPricePear} shekels to ${userCart['username']}`)

// 1. Change the price of the pear, so it will contain the Taxes
// 2. Ask the user for the fruit he wants between Apple, Banana and Pear
// 3. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants

// 1)
const { pear } = userCart.prices
const VAT = 0.17
userCart.prices.pear += pear * VAT

// 2-3)
const input = prompt('Choose Apple, Banana, or Pear: ')
const fruit = input.toLowerCase()

// 4)
const price = userCart.prices[fruit]
console.log(price)
