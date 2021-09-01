const conn = require('../db/conn')
const bcrypt = require('bcryptjs')

module.exports = async (req, res) => {
    const { name, email, password } = req.body
    let trx

    try {
        trx = await conn.transaction()
        const hash = bcrypt.hashSync(password, 10)

        const [e] = await trx('login')
            .insert({ hash, email })
            .returning('email')

        const info = await trx('users')
            .insert({ email: e, name })
            .returning('*')

        res.json({ info })

        trx.commit()
    } catch (err) {
        console.log(err.message)
        trx.rollback()
        res.status(400).json({ error: 'Invalid credentials' })
    }
}
