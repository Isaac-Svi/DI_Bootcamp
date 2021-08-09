const express = require('express')
const bodyParser = require('../middleware/body-parser')
const app = express()

// app.use(express.urlencoded({ extended: true }))
// app.use(express.json())

// custom middlewares
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'))

app.route('/login')
    .get((req, res) => {
        const { username, password } = req.query
        res.write(`<h1>Hello ${username}</h1>`)
        res.end()
    })
    .post((req, res) => {
        const { username, password } = req.body
        res.write(`<h1>Hello ${username}</h1>`)
        res.end()
    })

app.route('/login-fetch')
    .get((req, res) => {
        const { username, password } = req.query
        res.send({ username, password })
    })
    .post((req, res) => {
        const { username, password } = req.body
        res.send({ username, password })
    })

app.post('/test', (req, res) => {
    console.log(req.body)
})

app.listen(3000, console.log('Server running on http://localhost:3000'))
