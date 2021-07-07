// 1
const input = prompt("Enter several words separated by commas: ")

// 2
const inputArray = input.split(',')

// 3
/**
 * @description Auxiliary function used to find and return length of longest word
 * @param {*} words 
 * @returns {Number}
 */
const getLargestWordLength = (words) => {
  return words.reduce((a, b) => Math.max(a, b.trim().length), 0)
}

/**
 * @description Prints words in given array in a box
 * @param {*} words
 */
const printWordsInBox = (words) => {
  // paddingSize is 4 cuz you have 2 spaces and 2 *'s on each side of each word
  const paddingSize = 4
  const boxWidth = getLargestWordLength(words) + paddingSize

  // print top border
  console.log('*'.repeat(boxWidth))

  // print words
  for (let word of words) {
    word = word.trim() // add spaces before and after trimmed word

    let numSpaces = boxWidth - (word.length + paddingSize)

    word = '* ' + word // add first "* " to beginning of word
    word += ' '.repeat(numSpaces) // add spaces to the end of word if numSpaces > 0
    word += ' *' // add last " *" to end of word

    console.log(word)
  }

  // print bottom border
  console.log('*'.repeat(boxWidth))
}

console.log(printWordsInBox(inputArray))