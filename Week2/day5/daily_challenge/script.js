// 1
let numBottles = Number(prompt('Enter a number: '))

// 2
let decrementor = 1

while (numBottles > 0) {
  let s = numBottles === 1 ? '' : 's'
  console.log(`${numBottles} bottle${s} of beer on the wall`)
  console.log(`${numBottles} bottle${s} of beer`)

  // make sure decrementor doesn't make numBottles < 0
  decrementor = numBottles - decrementor < 0 ? numBottles : decrementor
  const itOrThem = decrementor === 1 ? 'it' : 'them'
  console.log(`Take ${decrementor} down, pass ${itOrThem} around`)

  numBottles -= decrementor++
  s = numBottles === 1 ? '' : 's'
  console.log(`${numBottles} bottle${s} of beer on the wall`)

  console.log('---------------------------------')
}
