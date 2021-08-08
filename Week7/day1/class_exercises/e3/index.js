const express = require('express')

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
    res.send('howdy')
})

app.get('/b', (req, res) => {
    res.send({
        howdy: 'howdy',
        dude: 'dude',
    })
})

app.post('/b', (req, res) => {
    const { name } = req.body

    res.send({
        sentence: `Your name is ${name}`,
    })
})

app.listen(3000, console.log(`Server running on http://localhost:3000`))
