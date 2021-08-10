const express = require('express')
const axios = require('axios')
const path = require('path')

const app = express()

app.use(express.static(path.resolve('public')))

app.get('/robots', async (req, res) => {
    const { search } = req.query

    try {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')

        const filteredData = data.filter((x) => {
            return x.name.toLowerCase().startsWith(search.toLowerCase())
        })

        for (let i = 0; i < filteredData.length; i++) {
            filteredData[i].image = `https://robohash.org/${i}`
        }

        res.send(filteredData)
    } catch (err) {
        res.status(500).send({ message: err.message })
    }
})

app.listen(3000, () => {
    console.log('Server running on http://localhost:3000')
})
