const prompt = require('prompt-sync')()

const validateName = (name) => {
    const regex = /[A-Z][a-z]+\s[A-Z][a-z]+/
    return regex.test(name)
}

const fullName = prompt('Enter your full name: ')

console.log(fullName, validateName(fullName) ? 'valid' : 'invalid')
