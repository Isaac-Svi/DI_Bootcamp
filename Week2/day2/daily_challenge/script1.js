let sentence = 'The movie is not that bad, I like it'
// let sentence = 'This dinner is not that bad ! You cook well'
// let sentence = 'The movie is not that (bad), I like it'
// let sentence = 'This dinner is bad!'
// let sentence = 'The movie is bad that not, I like it'

const wordNot = sentence.indexOf('not')
const wordBad = sentence.indexOf('bad')

// don't need to conditionally check indexes of not or bad because the following
// regular expression only replaces them with good if not comes before bad

sentence = sentence.replace(/not.*bad/gi, 'good')

console.log(sentence)
