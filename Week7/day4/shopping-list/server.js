require('dotenv').config()
const express = require('express')
const fs = require('fs')

const { PORT } = process.env
const PATH_TO_LIST = __dirname + '/shopping-list.json'

const app = express()

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))

app.get('/items', (req, res) => {
    try {
        const list = fs.readFileSync(PATH_TO_LIST)
        res.send(list.toString())
    } catch (err) {
        res.send({ message: err.message })
    }
})

app.post('/item', (req, res) => {
    const { name, amount } = req.body

    try {
        const list = JSON.parse(fs.readFileSync(PATH_TO_LIST))

        list.push({ name, amount })

        fs.writeFileSync(PATH_TO_LIST, JSON.stringify(list, null, 2))

        res.redirect('/')
    } catch (err) {
        console.error(err)
        res.send({ message: err.message })
    }
})

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`)
})
