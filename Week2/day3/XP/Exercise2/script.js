let people = ['Greg', 'Mary', 'Devon', 'James']

// 1
people.shift()

// 2
people[2] = 'Jason' // could also do people.length - 1, cuz James is last

// 3
people.push('Yitzchak')

// 4
for (const person of people) {
  console.log(person)
}

// 5
for (const person of people) {
  if (person === 'Jason') break
  console.log(person)
}

// 6
const newPeople = people.slice(1, people.length - 1)
console.log(newPeople)

// 7
console.log(people.indexOf('Mary'))

// 8
console.log(people.indexOf('Foo'))
console.log(`
Index of "Foo" is -1, because it doesn't exist in the people array
`)

// 9
const last = people[people.length - 1]
console.log(last)
