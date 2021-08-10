const fs = require('fs')

// Writing to a file means REPLACING the file's contents. If file doesn't exist,
// it's created
const newFileData = 'Something was erased!!'
fs.writeFile('./text.txt', newFileData, (err, data) => {
    if (err) console.log('write', err)
    else {
        fs.readFile('./text.txt', (err2, data2) => {
            if (err2) console.log('read', err2)
            else {
                console.log(data2.toString())
            }
        })
    }
})

// Can do the same with writeFileSync.
