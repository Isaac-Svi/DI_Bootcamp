let colors = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']

// 1
console.log(colors.includes('Violet'))

// 2
colors.forEach((color, index) => {
    console.log(`#${index + 1} choice is ${color}.`)
})
