const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.route('/')
    .get((req, res) => {
        res.sendFile(__dirname + '/index.html')
    })
    .post((req, res) => {
        console.log(req.body)
        res.send(req.body)
    })

app.listen(3001, console.log('Server running on http://localhost:3001'))
