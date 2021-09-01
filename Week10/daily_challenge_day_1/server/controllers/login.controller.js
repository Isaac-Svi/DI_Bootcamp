const conn = require('../db/conn')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
    const { email, password } = req.body

    try {
        const [login] = await conn('login').where({ email })

        if (!login) throw new Error('User does not exist')

        if (!bcrypt.compareSync(password, login.hash))
            throw new Error('Invalid user')

        const [user] = await conn('users').where({ email })
        const token = jwt.sign({ email }, process.env.JWT_SECRET, {
            expiresIn: '1h',
        })

        res.send({ user, token })
    } catch (err) {
        console.log(err)
        res.status(400).json({ error: err.message })
    }
}
