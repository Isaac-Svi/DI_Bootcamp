const jwt = require('jsonwebtoken')

module.exports = async (req, res) => {
    const { token } = req.body
    try {
        const verified = jwt.verify(token, process.env.JWT_SECRET)

        if (!verified) throw new Error('Not verified')

        res.status(200).json({ ok: 1 })
    } catch (err) {
        console.log(err.message)
        res.status(401).json({ ok: 0 })
    }
}
