// Solution without regex

const zipcode = prompt('Enter your zipcode:')
const numbers = '0123456789'
const hasLetter = zipcode.split('').some((x) => !numbers.includes(x))

if (hasLetter || zipcode.length !== 5) {
  console.log('error')
} else {
  console.log('success')
}
