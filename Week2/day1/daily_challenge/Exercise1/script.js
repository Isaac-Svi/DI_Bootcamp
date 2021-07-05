let fruits = ['Banana', 'Apples', 'Oranges', 'Blueberries']

// removing Banana using shift since we know it's at the beginning
fruits.shift()

// sort array in alphabetical order
// fruits.sort((a, b) => {
//   a = a.toLowerCase()
//   b = b.toLowerCase()

//   return a.charCodeAt(0) - b.charCodeAt(0)
// })

// unnecessary to do the above, because that's already
// the default behavior of sort
fruits.sort()

// add Kiwi to end of the array
fruits.push('Kiwi')

// remove Apples from the array
// in this case, since we know that Apples is the first index, we could've also just done this:
// fruits.splice(0, 1)

// first find index of Apples
const appleIndex = fruits.findIndex((x) => x === 'Apples')

// now remove Apples
fruits.splice(appleIndex, 1)

// reverse array
fruits.reverse()

console.log(fruits)
