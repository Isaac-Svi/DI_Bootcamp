// Using switch

let prompt1 = prompt('Enter a number: ')
let prompt2 = prompt('Enter another number: ')
let operation = prompt('Choose an operation. Enter +, -, *, or /')

let num1 = Number(prompt1),
  num2 = Number(prompt2)

switch (operation) {
  case '+':
    alert(num1 + num2)
    break
  case '-':
    alert(num1 - num2)
    break
  case '*':
    alert(num1 * num2)
    break
  case '/':
    alert(num1 / num2)
    break
  default:
    alert('Invalid operation')
}
