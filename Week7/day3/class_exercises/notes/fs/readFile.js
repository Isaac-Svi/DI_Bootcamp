const fs = require('fs')

// readFile is asynchronous
fs.readFile('./text.txt', (error, data) => {
    if (error) {
        console.log(error)
    } else {
        console.log('Buffer data:', data, '\n')
        console.log('Stringified buffer:', data.toString())
    }
})

console.log('this happens first\n')

// readFileSync stops everything until read is completed
const data = fs.readFileSync('./text.txt')
console.log(data.toString())
