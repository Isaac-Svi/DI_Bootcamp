const express = require('express')

const app = express()

app.use(express.urlencoded({ extended: true }))

app.use('/', express.static(__dirname + '/public'))

app.get('/aboutMe/:hobby', (req, res) => {
    const { hobby } = req.params

    if (!isNaN(hobby) || typeof hobby !== 'string') {
        return res.status(404)
    }

    res.send(hobby)
})

app.get('/pic', (req, res) => {
    res.sendFile(__dirname + '/pic.html')
})

app.route('/form')
    .get((req, res) => {
        res.sendFile(__dirname + '/public/form.html')
        // can also do:
        // res.redirect('/form.html')
    })
    .post((req, res) => {
        const { email, message } = req.body
        res.redirect(`/formData?email=${email}&message=${message}`)
    })

app.get('/formData', (req, res) => {
    const { email, message } = req.query
    res.send(`${email} sent you a message "${message}"`)
})

app.listen(3000, () => console.log('Server running on http://localhost:3000'))
