let s1 = 'One'
let s2 = 'two'

let newS1 = s2.slice(0, 2) + s1.slice(s1.length - 1)
let newS2 = s1.slice(0, 2) + s2.slice(s2.length - 1)

let newWord = `${newS1} ${newS2}`

console.log(newWord)
