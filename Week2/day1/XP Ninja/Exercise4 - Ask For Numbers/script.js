const input = prompt('Enter numbers separated by commas: ')

const numbers = input.split(',').map((x) => Number(x))

const sum = numbers.reduce((a, b) => a + b, 0)

console.log(sum)
