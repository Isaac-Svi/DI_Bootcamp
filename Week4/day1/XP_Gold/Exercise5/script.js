const startLine = '     ||<- Start line'
let turtle = '🐢'
let rabbit = '🐇'

// 1
const newLen = turtle.length + startLine.match(/(.+)(?=<)/g)[0].length
console.log(startLine)
console.log(turtle.padStart(newLen))
console.log(rabbit.padStart(newLen))

// 2
turtle = turtle.trim().padEnd(9, '=')
// you'll have 7 = appended to the end of turtle, so turtle reaches length of 9
console.log(turtle)
