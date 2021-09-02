// packages
require('dotenv').config()
const express = require('express')
const path = require('path')

// initialize app
const app = express()

// env vars
const { PORT } = process.env

// app middleware
app.use(express.json())

// routes
app.post('/api/register', require('./controllers/register.controller'))
app.post('/api/login', require('./controllers/login.controller'))
app.post('/api/verify', require('./controllers/verify.controller'))

app.listen(PORT, console.log(`Server listening on http://localhost:${PORT}`))
