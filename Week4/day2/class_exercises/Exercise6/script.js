// we create an object person with 2 fields: name and age,
// and we initialize them
const person = {
    name: 'Lydia',
    age: 21,
}

// we loop through the keys in the object and print them
for (const item in person) {
    console.log(item)
}

// output is:
// name
// age
