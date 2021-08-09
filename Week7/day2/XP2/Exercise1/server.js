const express = require('express')
const app = express()

app.use('/', express.static(__dirname + '/public'))

app.get('/user', (req, res) => {
    const user = {
        firstname: 'John',
        lastname: 'Doe',
    }
    console.log(user)
    res.send(user)
})

app.listen(3000, () => console.log('Server listening on http://localhost:3000'))
