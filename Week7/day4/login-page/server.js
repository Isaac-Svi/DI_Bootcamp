require('dotenv').config()
const express = require('express')
const { login, register } = require('./db/functions')

const { PORT } = process.env

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(express.static(__dirname + '/public'))

app.post('/login', async (req, res) => {
    const { username, password } = req.body
    try {
        const [fetchedUserName] = await login(username, password)
        res.send({ username: fetchedUserName })
    } catch (err) {
        console.log(err)
        res.send({ message: err.message })
    }
})

app.post('/register', async (req, res) => {
    const { fname, lname, email, username, password } = req.body
    try {
        const user = await register({ fname, lname, email, username, password })
        res.send(user)
    } catch (err) {
        console.log(err.message)
        res.send({ message: err.message })
    }
})

app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})
