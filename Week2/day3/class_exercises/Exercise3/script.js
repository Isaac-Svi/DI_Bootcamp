let prices = [20, 12, 5, 4, 2]
// let sum = prices[0] + prices[1] + prices[2] + prices[3] + prices[4];
let sum = 0

for (let i = 0; i < prices.length; i++) {
  sum += prices[i]
}

console.log(sum)

// ALTERNATIVELY
console.log(prices.reduce((a, b) => a + b, 0))
