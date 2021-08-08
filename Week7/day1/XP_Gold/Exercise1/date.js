module.exports = {
    getTimeTill() {
        let ms = +new Date('January 1, 2022 00:00:00') - Date.now()

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
}
