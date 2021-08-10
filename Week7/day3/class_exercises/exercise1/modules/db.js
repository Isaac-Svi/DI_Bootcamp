const path = require('path')
const knex = require('knex')
require('dotenv').config({ path: path.resolve('.env') })

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
        host: '127.0.0.1', // this is just localhost
        port: 5432, // default is 5432
        user: 'postgres',
        password: process.env.PG_PWD,
        database: 'dvdrental',
    },
})

module.exports = {
    getCountries() {
        // this returns a promise
        return db('country').select('country_id', 'country')
    },
}
