const axios = require('axios')

module.exports = {
    async users() {
        try {
            const { data } = await axios.get('https://jsonplaceholder.typicode.com/users')
            return data
        } catch (err) {
            console.log(err.message)
        }
    },
}
