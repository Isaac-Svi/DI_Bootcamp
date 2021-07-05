const birthYear1 = prompt('Enter one year: ')
const birthYear2 = prompt('Enter another year: ')

const difference = Math.abs(birthYear1 - birthYear2)

// answer
const youngerYear = Math.max(birthYear1, birthYear2)
alert(`Younger will be 1/2 age of older by the year ${youngerYear + difference}`)
