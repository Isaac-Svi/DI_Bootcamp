// 1
const input = prompt('Enter several words separated by commas: ')

// 2
const inputArray = input.split(',')

// 3
const getLargestWordLength = (words) => {
  return words.reduce((a, b) => Math.max(a, b.trim().length), 0)
}

const printSurroundedWord = (word, lengthLongestWord) => {
  word = word.trim()

  let numSpaces = lengthLongestWord - word.length

  word = '* ' + word
  word += numSpaces ? ' '.repeat(numSpaces) : ''
  word += ' *'

  console.log(word)
}

const printWordsInBox = (words) => {
  const paddingSize = 4
  const lengthLongestWord = getLargestWordLength(words)
  const topBottomBorder = '*'.repeat(lengthLongestWord + paddingSize)

  console.log(topBottomBorder)

  for (const word of words) {
    printSurroundedWord(word, lengthLongestWord)
  }

  console.log(topBottomBorder)
}

console.log(printWordsInBox(inputArray))
