const faker = require('faker')
const prompt = require('prompt-sync')()

const users = []

const addUser = (obj = null) => {
    let street, country, name

    if (!obj) {
        name = faker.name.findName()
        street = faker.address.streetAddress()
        country = faker.address.country()
    } else {
        name = obj.name
        street = obj.street
        country = obj.country
    }

    users.push({ name, street, country })
}

for (let i = 0; i < 10; i++) {
    addUser()
}

const name = prompt('Enter name: ')
const street = prompt('Enter street address: ')
const country = prompt('Enter country: ')

addUser({ street, name, country })

console.log(users)
