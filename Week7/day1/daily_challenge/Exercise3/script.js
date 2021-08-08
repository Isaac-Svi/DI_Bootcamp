const { getDateTime } = require('./main')
const http = require('http')

const server = http.createServer((req, res) => {
    res.end(`The date and time are currently: ${getDateTime()}`)
})

server.listen(8080, () => console.log('Server running on http://localhost:8080'))
