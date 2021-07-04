// this solution uses a map of operation strings to functions
// depending on the operation entered by user, we use a different
// function

let prompt1 = prompt('Enter a number: ')
let prompt2 = prompt('Enter another number: ')
let operation = prompt('Choose an operation. Enter +, -, *, or /')

const operations = {
  '+': (a, b) => a + b,
  '-': (a, b) => a - b,
  '*': (a, b) => a * b,
  '/': (a, b) => a / b,
}

let num1 = Number(prompt1)
let num2 = Number(prompt2)

alert(operations[operation](num1, num2))
