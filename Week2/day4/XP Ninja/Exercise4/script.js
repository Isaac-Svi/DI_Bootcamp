const biggestNumberInArray = (arr) => {
  // get to first number
  let i = 0
  while (i < arr.length && typeof arr[i++] !== 'number');

  // this means no numbers were found
  if (i === arr.length) return 0

  // otherwise declare and initialize max as arr[i]
  let max = arr[i]

  // once first number is found, we can continue from there
  for (; i < arr.length; i++) {
    if (typeof arr[i] === 'number' && arr[i] > max) {
      max = arr[i]
    }
  }

  return max
}

const array = [-1, 0, 3, 100, 99, 2, 99] // should return 100
const array2 = ['a', 3, 4, 2] // should return 4
const array3 = [] // should return 0

console.log(biggestNumberInArray(array))
console.log(biggestNumberInArray(array2))
console.log(biggestNumberInArray(array3))
