const express = require('express')

const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/:id', (req, res) => {
    console.log(req.params)
    res.send(req.params)
})

app.listen(3000, () => console.log('Server listening on http://localhost:3000'))
