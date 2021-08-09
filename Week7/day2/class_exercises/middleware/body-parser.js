const convertUreToJson = (ure) => {
    return Object.fromEntries(ure.split('&').map((x) => x.split('=')))
}

module.exports = {
    urlencoded(options) {
        return (req, res, next) => {
            if (req.headers['content-type'] !== 'application/x-www-form-urlencoded') {
                return next()
            }

            req.body = ''
            req.on('data', (chunk) => (req.body += chunk.toString()))
            req.on('end', () => {
                req.body = convertUreToJson(req.body)
                next()
            })
        }
    },
    json() {
        return (req, res, next) => {
            if (req.headers['content-type'] !== 'application/json') {
                return next()
            }

            req.body = ''
            req.on('data', (chunk) => (req.body += chunk.toString()))
            req.on('end', () => {
                req.body = JSON.parse(req.body)
                next()
            })
        }
    },
    // TODO: finish this
    text(options) {
        return (req, res, next) => {
            if (req.headers['content-type'] !== 'application/json') {
                return next()
            }

            req.body = ''
            req.on('data', (chunk) => (req.body += chunk.toString()))
            req.on('end', () => {
                req.body = JSON.parse(req.body)
                next()
            })
        }
    },
}
