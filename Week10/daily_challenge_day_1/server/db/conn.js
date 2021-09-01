const knex = require('knex')

const db = knex({
    client: 'pg',
    version: '7.2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PWD,
        database: process.env.DB_DATABASE,
    },
})

module.exports = db
