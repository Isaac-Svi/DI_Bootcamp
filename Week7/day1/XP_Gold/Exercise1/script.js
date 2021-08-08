const { getTimeTill } = require('./date')

const { days, hours, minutes, seconds } = getTimeTill()

console.log(
    `The 1st of January is in ${days} days and ${hours}:${minutes}:${seconds} hours`
)
