let color = ['Blue', 'Green', 'Red', 'Orange', 'Violet', 'Indigo', 'Yellow']
let ordinal = ['th', 'st', 'nd', 'rd']

color.forEach((color, index) => {
    const num = index + 1
    const suffixIndex = num > 3 ? 0 : num

    console.log(`${num}${ordinal[suffixIndex]} choice is ${color}.`)
})
