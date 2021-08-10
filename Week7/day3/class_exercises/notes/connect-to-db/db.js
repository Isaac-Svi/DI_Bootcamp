// make sure .env is in same folder if you don't want to specify path
require('dotenv').config({
    path: '../../../.env',
})

const knex = require('knex')

// everything in knex RETUNS A PROMISE
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

db.select()
    .from('country')
    .then((x) => console.log(x))

db.select('country_id', 'city_id', 'city')
    .from('city')
    .then((x) => console.log(x))

// you can also use this syntax instead of using .from():
db('city')
    .select('city')
    .then((x) => console.log(x))

// to add where, you'd do the following:
db('city')
    .select('city', 'city_id')
    .where({ city_id: 88 })
    .then((x) => console.log(x))
    .catch((err) => console.log(err.message))
    .finally(() => process.exit())

// to update
db('city')
    .where({ city_id: 88 })
    .update({ city: 'breadford' })
    .then((x) => console.log(x))

// to update with a return
db('city')
    .where({ city_id: 88 })
    .update({ city: 'Bradford' })
    .returning(['city_id', 'city'])
    .then((x) => console.log(x))

// to insert a new country
db('country')
    .insert({ country: 'CSA' })
    .returning('*')
    .then((x) => console.log(x))

// to insert many, you can put the insert objects in an array
// can also do insert without 'into' if we use db(table) syntax
db.insert([
    {
        city: 'A',
        country_id: 110,
    },
    {
        city: 'B',
        country_id: 110,
    },
    {
        city: 'C',
        country_id: 110,
    },
])
    .into('city')
    .returning('*')
    .then((x) => console.log(x))

// to delete. whereIn is when you want to use 'in'
db('city')
    .whereIn('city', ['A', 'B', 'C'])
    .del()
    .returning('*')
    .then((x) => console.log(x))

db('country')
    .del()
    .where({ country_id: 110 })
    .returning('*')
    .then((x) => console.log(x))
