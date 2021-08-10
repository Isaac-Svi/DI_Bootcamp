const express = require('express')
const { getCountries } = require('./modules/db')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/countries', async (req, res) => {
    try {
        const countries = await getCountries()
        res.send(countries)
    } catch (err) {
        console.log(err.message)
    }
})

app.listen(3000, () => {
    console.log('Server listening on http://localhost:3000')
})
