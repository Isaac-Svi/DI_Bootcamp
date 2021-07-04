// Using the function constuctor to create a new function
// while simultaneously calling it to get the result

let num1 = prompt('Enter a number: ')
let num2 = prompt('Enter another number: ')
let operation = prompt('Choose an operation. Enter +, -, *, or /')

// don't have to turn num1 and num2 into numbers because
// Function already does that for us, alogn with the operation

alert(new Function(`return ${num1} ${operation} ${num2}`)())
