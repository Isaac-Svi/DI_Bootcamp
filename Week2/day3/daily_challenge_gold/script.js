const numbers = [5, 0, 9, 1, 7, 4, 2, 6, 3, 8]

// 1
const numbersString = numbers.toString()
console.log(numbersString)

// 2
const numbersString1 = numbers.join('+')
const numbersString2 = numbers.join(',')
const numbersString3 = numbers.join('😎')
console.log(numbersString1)
console.log(numbersString2)
console.log(numbersString3)

// 3
const bubbleSortDesc = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    for (let j = 1; j < arr.length; j++) {
      if (arr[j - 1] < arr[j]) {
        const temp = arr[j]
        arr[j] = arr[j - 1]
        arr[j - 1] = temp
      }
    }
  }
}

bubbleSortDesc(numbers)
console.log(numbers)
