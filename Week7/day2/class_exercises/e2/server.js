const express = require('express')
const { users } = require('./modules/users')

const app = express()

app.use(express.static(__dirname + '/public'))

app.get('/robots', async (req, res) => {
    try {
        const data = await users()
        res.send(data)
    } catch (err) {
        console.log(err.message)
        res.send('There was an error')
    }
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
