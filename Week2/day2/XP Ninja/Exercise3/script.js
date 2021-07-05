// 1
const word = prompt('Enter a word:')

// 2
const noVowels = word.replace(/[aioue]/gi, '')
console.log(noVowels)

// 3
const vowelMap = {
  a: 1,
  e: 2,
  i: 3,
  o: 4,
  u: 5,
}
const replacedVowels = word.replace(/[aioue]/gi, (x) => {
  return vowelMap[x.toLowerCase()]
})
console.log(replacedVowels)
