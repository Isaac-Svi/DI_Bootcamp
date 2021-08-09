const http = require('http')

const server = http.createServer((req, res) => {
    res.end(
        JSON.stringify({
            firstname: 'John',
            lastname: 'Doe',
        })
    )
})

server.listen(8080, () => console.log('Server listening on http://localhost:8080'))
