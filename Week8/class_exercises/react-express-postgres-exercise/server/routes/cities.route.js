const router = require('express').Router()
const { getCitiesInCountry } = require('../controllers/cities.controller')

router.get('/:id', getCitiesInCountry)

module.exports = router
