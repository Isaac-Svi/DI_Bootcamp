const colors = ['blue', 'orange', 'red', 'green', 'yellow']

for (let i = 0; i < colors.length; i++) {
  console.log(`My #${i + 1} choice is ${colors[i]}`)
}

// BONUS
const suffixMap = {
  1: 'st',
  2: 'nd',
  3: 'rd',
}

for (let i = 0; i < colors.length; i++) {
  const suffix = suffixMap[i + 1] ? suffixMap[i + 1] : 'th'

  console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`)
}
