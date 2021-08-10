const fs = require('fs')

// Deletes file.  Can also use unlinkSync to be synchronous
fs.unlink('./text.txt', () => {
    fs.readFile('./text.txt', (err, data) => {
        if (err) {
            console.log(err)
        } else {
            console.log(data)
        }
    })
})
