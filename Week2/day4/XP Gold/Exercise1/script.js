// checks specifically for a blank STRING, not for null or undefined
const isBlank = (str) => {
  return str === ''
}

console.log(isBlank(''))
console.log(isBlank('abc'))