const express = require('express')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(express.json())

app.get('/api/hello', (req, res) => {
    res.send('Hello From Express')
})

app.post('/api/world', (req, res) => {
    console.log(req.body)

    const { message } = req.body

    res.send(`I received your POST request. This is what you sent me: ${message}`)
})

app.listen(4000, () => {
    console.log('Server running on http://localhost:4000')
})
