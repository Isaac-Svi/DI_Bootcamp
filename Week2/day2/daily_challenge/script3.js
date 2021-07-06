// let sentence = 'The movie is not that bad, I like it'
// let sentence = 'The movie is not that bad, I like it'
// let sentence = 'This dinner is not that bad ! You cook well'
let sentence = 'The movie is not that (bad), I like it'
// let sentence = 'The movie is bad that not, I like it'
// let sentence = 'This dinner is bad!'

let newSentence = sentence.split('')

const emoji = '😎'

const puncs = '.,;:"\'()[]{}!@#$%^&*-_+=~`<> '
const puncArr = []

// keep track of all punctuation; replace all punctuation with space
for (let i = 0; i < newSentence.length; i++) {
  if (puncs.includes(newSentence[i])) {
    puncArr.push(i)
    newSentence[i] = emoji
  }
}

// now join newSentence by the emoji
newSentence = newSentence.join('').split(emoji)

// get indexes
const badIndex = newSentence.indexOf('bad')
const notIndex = newSentence.indexOf('not')

// replace indexes with 'good'
if (badIndex > -1 && notIndex > -1 && notIndex < badIndex) {
  // replace range in newSentence with good
  newSentence.splice(notIndex, badIndex - notIndex + 1, 'good')
  puncArr.splice(notIndex, badIndex - notIndex)
}

let finalSentence = ''

for (let i = 0, j = 0; i < newSentence.length; i++) {
  finalSentence += newSentence[i] + (sentence[puncArr[j]] ? sentence[puncArr[j++]] : '')
}

console.log(finalSentence)
