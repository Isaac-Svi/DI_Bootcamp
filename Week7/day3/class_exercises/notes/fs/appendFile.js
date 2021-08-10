const fs = require('fs')

// Appends new data to file.  If file doesn't exist, file is created.
const strToAppend = "\nI'm doing good, thanks. :)"
fs.appendFile('./text.txt', strToAppend, (err) => {
    if (err) console.log(err)
    else {
        fs.readFile('./text.txt', (err, data) => console.log(data.toString()))
    }
})

// Can make sync by doing appendFileSync
