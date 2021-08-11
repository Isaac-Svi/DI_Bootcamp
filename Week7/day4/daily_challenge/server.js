require('dotenv').config()
const express = require('express')
const { login, register } = require('./user-functions')

const { PORT } = process.env

const app = express()

app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.post('/login', (req, res) => {
    const { username, password } = req.body

    try {
        const uname = login(username, password)
        res.send({ username: uname })
    } catch (err) {
        res.send({ error: err.message })
    }
})

app.post('/register', (req, res) => {
    const { fname, lname, email, username, password } = req.body

    try {
        register({ fname, lname, email, username, password })
        res.send({ ok: true })
    } catch (err) {
        res.send({ error: err.message })
    }
})

app.listen(3000, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
