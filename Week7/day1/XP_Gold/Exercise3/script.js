const { getTimeTill, getTimeToClosestHoliday } = require('./date')

getTimeToClosestHoliday().then(({ timeLeft, name }) => {
    const { days, hours, minutes, seconds } = getTimeTill(timeLeft)

    console.log(`${name} is in ${days} days and ${hours}:${minutes}:${seconds} hours`)
})
