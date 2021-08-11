const fs = require('fs')
const path = require('path')

const filepath = path.resolve('users.json')

module.exports = {
    login(username, password) {
        let file = fs.readFileSync(filepath).toString()
        file = JSON.parse(file)

        const user = file.find((x) => x.username === username)

        if (user) {
            if (user.password !== password) {
                throw new Error('Incorrect credentials')
            }
            return user.username
        }
        throw new Error('Username not registered')
    },
    register(info) {
        const { fname, lname, email, username, password } = info

        let fileData = fs.readFileSync(filepath)
        fileData = JSON.parse(fileData)

        const user = fileData.find((x) => x.username === username)

        if (user) throw new Error('Username already taken')

        fileData.push({ fname, lname, email, username, password })

        fs.writeFileSync(filepath, JSON.stringify(fileData, null, 2))

        return true
    },
}
