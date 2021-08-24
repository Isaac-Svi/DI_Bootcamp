// packages
require('dotenv').config()
const express = require('express')
const path = require('path')

// initialize app
const app = express()

// env vars
const { PORT, NODE_ENV } = process.env

// app middleware

app.use(express.json())

if (NODE_ENV === 'production') {
    const clientPath = path.resolve(__dirname, '..', 'client')
    app.use(express.static(path.resolve(clientPath, 'dist')))
} else {
    const cors = require('cors')
    app.use(
        cors({
            origin: 'http://localhost:3000',
            credentials: true,
        })
    )
}

// routes
const countryRoutes = require('./routes/countries.route')
const cityRoutes = require('./routes/cities.route')
app.use('/api/countries', countryRoutes)
app.use('/api/cities', cityRoutes)

// error handler
app.use((err, req, res, next) => {
    console.log(err.message)
    res.redirect('/')
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`)
})
