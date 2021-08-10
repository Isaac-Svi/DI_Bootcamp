const http = require('http')
const fs = require('fs')
const path = require('path')
const { getCountries } = require('./modules/db')

const parseURL = (url) => {
    let [params, query] = url.split('?')
    params = url.split('/').filter((x) => x)
    query = Object.fromEntries(new URLSearchParams(query))

    return {
        params,
        query,
    }
}

const server = http.createServer((req, res) => {
    const { params, query } = parseURL(req.url)

    if (req.method === 'GET') {
        if (!params[0] || path.extname(params[0])) {
            let fileUrl

            if (!params[0]) {
                fileUrl = 'index.html'
            } else {
                fileUrl = params[0].replace('/', '')
            }

            const filePath = path.resolve('./class_exercises/exercise1/public', fileUrl)

            if (!fs.existsSync(filePath)) {
                res.writeHead(404)
                res.end()
                return
            }

            res.writeHead(200)
            fs.createReadStream(filePath).pipe(res)
            return
        } else if (params[0] === 'countries') {
            getCountries()
                .then((countries) => res.end(JSON.stringify(countries)))
                .catch((err) => console.log(err.message))
        } else {
            res.writeHead(404)
            res.end('This page does not exist :o')
        }
    }
})

server.listen(3000, () => {
    console.log('Server listening on http://localhost:3000')
})
