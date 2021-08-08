// const http = require('http')

// http.createServer().listen(3000, () => {
//     console.log('howdy')
// })

const http = require('http')

const server = http.createServer((req, res) => {
    const user = {
        name: 'dan',
        username: 'dandan',
    }

    // must stringify to before sending to client.
    // http can't send complicated objects
    // console.log('method', req.method)
    // console.log('url', req.url)
    // console.log('headers', req.headers)
    // res.end(JSON.stringify(user))
    // res.end(user)
})

server.listen(3000, () => console.log('Server listening on http://localhost:3000'))
