const express = require('express')
const { createUser } = require('./db')

const app = express()

app.use(express.json())
app.use('/', express.static(__dirname + '/public'))

app.post('/user', async (req, res) => {
    try {
        const { username, password } = req.body

        const newUser = await createUser(username, password)

        res.send(newUser)
    } catch (err) {
        res.send({ error: err })
    }
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
