// 1
const input = prompt('Enter several words separated by commas: ')

// 2
const inputArray = input.split(',')

// 3
const getLargestWordLength = (words) => {
  return words.reduce((a, b) => Math.max(a, b.trim().length), 0)
}

const printSurroundedWord = (word, lengthMaxWord) => {
  word = word.trim() // add spaces before and after trimmed word

  let numSpaces = lengthMaxWord - word.length

  word = '* ' + word // add first "* " to beginning of word
  word += numSpaces ? ' '.repeat(numSpaces) : '' // add spaces to the end of word if numSpaces > 0
  word += ' *' // add last " *" to end of word

  console.log(word)
}

const printWordsInBox = (words) => {
  // paddingSize is 4 cuz you have 2 spaces and 2 *'s on each side of each word
  const paddingSize = 4
  const lengthMaxWord = getLargestWordLength(words)
  const topBottomBorder = '*'.repeat(lengthMaxWord + paddingSize)

  // print top border
  console.log(topBottomBorder)

  // print words
  for (const word of words) {
    printSurroundedWord(word, lengthMaxWord)
  }

  // print bottom border
  console.log(topBottomBorder)
}

console.log(printWordsInBox(inputArray))
