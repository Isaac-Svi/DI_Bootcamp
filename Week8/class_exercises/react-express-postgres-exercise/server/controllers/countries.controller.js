const conn = require('../db/conn')

const getCountries = async (req, res, next) => {
    try {
        const countries = await conn('country').select('country_id', 'country')
        res.send(countries)
    } catch (err) {
        next(new Error(err))
    }
}

module.exports = {
    getCountries,
}
