// Exercise 1
var num = 8 // defining and initializing num as 8
var num = 10 // redefining and reinitializing num as 10
console.log(num) // console log 10

// Exercise 2
function numbers() {
    // easiest solution is to change var to let
    // for (let i = 0; i < 5; i += 1) {
    // option 2 is to enclose the for loop in a self closing function
    // , so even though i is made with var, var's scope can't extend outside of
    // function
    // ;(() => {
    //     for (var i = 0; i < 5; i += 1) {
    //         console.log(i)
    //     }
    // })()
    // console.log(i)
}
numbers()

// Exercise 3
// These are NOT real numbers xD
let account = 10000
const VAT = 0.17
const revExp = {
    revenue: 3000,
    expenses: 2000,
}

const taxedExpenses = () => {
    return revExp.expenses * VAT
}

const calculateAccount = () => {
    return account + revExp.revenue - taxedExpenses()
}

console.log(calculateAccount())
