const fs = require('fs')

// Can do copyFileSync, and also, text2.txt gets created if it doesn't exist
fs.copyFile('./text.txt', './text2.txt', (err) => {
    if (err) console.log(err)
})
