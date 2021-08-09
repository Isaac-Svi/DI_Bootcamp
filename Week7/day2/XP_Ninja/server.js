const express = require('express')
const cart = require('./cart')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/items', (req, res) => {
    res.send(cart)
})

app.get('/items/:id', (req, res) => {
    const { id } = req.params

    const item = cart.find((x) => x.id === Number(id))

    res.send(item)
})

app.post('/item', (req, res) => {
    const { name, price } = req.body

    cart.push({
        id: cart.length + 1,
        name,
        price,
    })

    res.send('Item added')
})

app.listen(3000, console.log('Server listening on http://localhost:3000'))
