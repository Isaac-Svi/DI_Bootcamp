const express = require('express')
const fs = require('fs')
const path = require('path')

// if you just want to read from a file without writing to it, you can
// just import it like the following, but here we're doing more, so we
// have to use fs module
// const cart = require('./cart.json')

const app = express()

// Be careful!! This can only work when you're running the command
// line from the same directory as the views folder.  Otherwise,
// doing something like res.render('items') will result in path
// not found!
app.set('view engine', 'ejs')

app.use(express.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'))

app.route('/items')
    .get((req, res) => {
        const data = fs.readFileSync(path.resolve(__dirname, 'cart.json'))

        res.render('items', { items: JSON.parse(data) })
    })
    .post((req, res) => {
        const { name, price } = req.body

        fs.readFile(path.resolve(__dirname, 'cart.json'), (err, data) => {
            if (err) return res.send({ message: err.message })

            data = JSON.parse(data)
            data.push({
                id: data[data.length - 1].id + 1,
                name,
                price: Number(price),
            })
            data = JSON.stringify(data, null, 4)

            fs.writeFile(path.resolve(__dirname, 'cart.json'), data, (err) => {
                if (err) return res.send({ message: err.message })

                console.log('data added')
                res.redirect('/items')
            })
        })
    })

app.get('/items/:id', (req, res) => {
    const { id } = req.params

    fs.readFile(__dirname + '/cart.json', (err, data) => {
        if (err) return res.send({ message: err.message })

        data = JSON.parse(data)

        // putting in an array, so we can use same view items
        const item = [data.find((x) => x.id === Number(id))]

        if (!item) return res.send({ message: "Item doesn't exist" })

        res.render('items', { items: item })
    })
})

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000')
})
