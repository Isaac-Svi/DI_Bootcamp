const fs = require('fs')

// In this file, only the first operation will happen,
// since I'm using the asynchronous versions of these
// functions.

// Writing to / overwriting / creating file:
const data = "Hey how's it going?"
fs.writeFile('./data.txt', data, (err) => {
    if (err) console.log(err)
    else console.log('data written')
})

// Adding new text to file without overwriting what's there
const newData = 'Buy orange juice'
fs.appendFile('./data.txt', newData, (err) => {
    if (err) console.log(err)
})

// Deleting file
fs.unlink('./data.txt', (err) => {
    if (err) console.log(err)
    else console.log('successfully deleted file')
})
