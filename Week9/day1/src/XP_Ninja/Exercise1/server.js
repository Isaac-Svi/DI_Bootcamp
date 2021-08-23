const express = require('express')
// const cors = require('cors')

const app = express()

// app.use(cors())
app.use(express.json())

app.get('/users', (req, res) => {
    res.send([
        { id: 1, username: 'somebody' },
        { id: 2, username: 'somebody_else' },
    ])
})

app.listen(3001, () => {
    console.log(`Server listening on http://localhost:3001`)
})
