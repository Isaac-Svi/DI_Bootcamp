const axios = require('axios')

const options = {
    method: 'GET',
    url: 'https://public-holiday.p.rapidapi.com/2021/US',
    headers: {
        'x-rapidapi-key': '06865f8d81msh36cb45b77de1421p107b51jsn2b83eeee5b68',
        'x-rapidapi-host': 'public-holiday.p.rapidapi.com',
    },
}

module.exports = {
    getTimeTill(ms) {
        const days = Math.floor(ms / (1000 * 60 * 60 * 24))
        ms %= 1000 * 60 * 60 * 24

        const hours = Math.floor(ms / (1000 * 60 * 60))
        ms %= 1000 * 60 * 60

        const minutes = Math.floor(ms / (1000 * 60))
        ms %= 1000 * 60

        const seconds = Math.floor(ms / 1000)
        ms %= 1000

        return {
            days: days > 10 ? days : `0${days}`,
            hours: hours > 10 ? hours : `0${hours}`,
            minutes: minutes > 10 ? minutes : `0${minutes}`,
            seconds: seconds > 10 ? seconds : `0${seconds}`,
            ms: (ms > 10 ? `${ms}` : `0${ms}`).slice(0, 1),
        }
    },
    async getTimeToClosestHoliday() {
        try {
            const { data } = await axios.request(options)

            const { date, name } = data.reduce((a, b) => {
                const ad = +new Date(a.date) - Date.now(),
                    bd = +new Date(b.date) - Date.now()

                if (ad < 0) return b
                if (bd < 0) return a

                return ad < bd ? a : b
            })

            return {
                timeLeft: +new Date(date) - Date.now(),
                name,
            }
        } catch (err) {
            console.log(err.message)
        }
    },
}
