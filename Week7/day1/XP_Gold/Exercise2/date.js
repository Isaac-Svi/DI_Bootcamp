const prompt = require('prompt-sync')()

module.exports = {
    getMinutesLived(birthdate) {
        if (!birthdate) {
            birthdate = prompt('Enter your birthdate: ')
        }

        birthdate = +new Date(birthdate)

        return Math.floor((Date.now() - birthdate) / (1000 * 60 * 60))
    },
}
