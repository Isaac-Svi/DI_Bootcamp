const knex = require('knex')

const { NODE_ENV, DB_PWD, DATABASE_URL } = process.env

const config =
    NODE_ENV === 'production'
        ? {
              client: 'pg',
              connection: {
                  connectionString: DATABASE_URL,
                  ssl: { rejectUnauthorized: false },
              },
          }
        : {
              client: 'pg',
              version: 7.2,
              connection: {
                  host: '127.0.0.1', // this is just localhost
                  port: 5432, // default is 5432
                  user: 'postgres',
                  password: DB_PWD,
                  database: 'dvdrental',
              },
          }

const db = knex(config)

module.exports = db
