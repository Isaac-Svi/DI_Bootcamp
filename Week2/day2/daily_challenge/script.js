let sentence = 'The movie is not that bad, I like it'
// let sentence = 'This dinner is not that bad ! You cook well'
// let sentence = 'The movie is not that (bad), I like it'
// let sentence = 'The movie is bad that not, I like it'
// let sentence = 'This dinner is bad!'

// Regex checks for all occurrences of punctuation
// or any spaces not next to a punctuation in order
// to split the array at those points.

// Assuming the user has crazy punctuation.
// const regex = /[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]|\s/g

// Assuming the user has regular punctuation:
const regex = /[({[,.;:"'/\\]|\s/g
const sentenceArr = sentence.split(regex)

const wordNot = sentenceArr.findIndex((x) => x.toLowerCase() === 'not')
const wordBad = sentenceArr.findIndex((x) => x.toLowerCase() === 'bad')

if (wordNot < wordBad) {
  sentence = sentence.replace(/not.*bad/gi, 'good')
}

console.log(sentence)
