const conn = require('../db/conn')

const getCitiesInCountry = async (req, res, next) => {
    const { id } = req.params

    try {
        const cities = await conn('city').select('city_id', 'city').where({
            country_id: id,
        })
        res.send(cities)
    } catch (err) {
        next(new Error(err))
    }
}

module.exports = {
    getCitiesInCountry,
}
