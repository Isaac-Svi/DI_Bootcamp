const conn = require('./connection')
const p4ssw0rd = require('p4ssw0rd')

module.exports = {
    async login(username, password) {
        const [user] = await conn('register').select('*').where({ username })

        if (!user) throw new Error('User does not exist')

        if (p4ssw0rd.check(password, user.password)) {
            return Promise.all([
                conn('register')
                    .update({ last_login: new Date() })
                    .where({ username: user.username })
                    .returning('username')
                    .then(([username]) => username),
                conn('login').insert({
                    username: user.username,
                    password: user.password,
                }),
            ])
        }

        throw new Error('Incorrent credentials')
    },
    async register(data) {
        const { fname, lname, email, username, password } = data
        return conn('register')
            .insert({
                first_name: fname,
                last_name: lname,
                email,
                username,
                password: p4ssw0rd.hash(password),
            })
            .returning(['first_name', 'last_name', 'email', 'username'])
    },
}
