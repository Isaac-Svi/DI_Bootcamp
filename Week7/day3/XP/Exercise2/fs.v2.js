const fs = require('fs')

// In this file, all functions should run, because
// they're synchronous.

// Writing to / overwriting / creating file:
const data = "Hey how's it going?"
fs.writeFileSync('./data.txt', data)
console.log(fs.readFileSync('./data.txt').toString())

// Adding new text to file without overwriting what's there
const newData = 'Buy orange juice'
fs.appendFileSync('./data.txt', newData)
console.log(fs.readFileSync('./data.txt').toString())

// Deleting file
try {
    fs.unlinkSync('./data.txt')
    console.log(fs.readFileSync('./data.txt').toString())
} catch (err) {
    console.log(err.message)
}
