// 1 & 2
const mergeWords = (word) => (x) => x ? mergeWords(word + ' ' + x) : word

// Output
console.log(mergeWords('Hello')())
console.log(mergeWords('There')('is')('no')('spoon.')())
