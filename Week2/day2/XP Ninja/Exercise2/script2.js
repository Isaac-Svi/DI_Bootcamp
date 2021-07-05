// Solution with regex

const zipcode = prompt('Enter your zipcode:')

// alternatively could have done: !/^\d+$/g
// also: !/^\d{5}$/g.test(zipcode)

if (/[a-zA-Z]|\s/g.test(zipcode) || zipcode.length !== 5) {
  console.log('error')
} else {
  console.log('success')
}
