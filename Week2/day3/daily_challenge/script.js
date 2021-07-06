// One loop
const drawStars = (numRows) => {
  for (let i = 1; i <= numRows; i++) {
    console.log('* '.repeat(i))
  }
}

drawStars(6)

console.log('------------------------')

// Two loops
const drawStars2 = (numRows) => {
  for (let i = 1; i <= numRows; i++) {
    let str = ''
    for (let j = 0; j < i; j++) {
      str += '* '
    }

    console.log(str)
  }
}

drawStars2(6)
