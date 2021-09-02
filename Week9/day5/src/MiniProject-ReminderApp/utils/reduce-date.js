export const reduceDate = (date) => {
    const ms = +new Date(date) - Date.now()

    if (ms / 1000 / 60 / 60 / 24 / 7 / 4 / 12 > 1)
        return (
            'in ' + Math.round(ms / 1000 / 60 / 60 / 24 / 7 / 4 / 12) + ' years'
        )
    if (ms / 1000 / 60 / 60 / 24 / 7 / 4 > 1)
        return 'in ' + Math.round(ms / 1000 / 60 / 60 / 24 / 7 / 4) + ' months'
    if (ms / 1000 / 60 / 60 / 24 / 7 > 1)
        return 'in ' + Math.round(ms / 1000 / 60 / 60 / 24 / 7) + ' weeks'
    if (ms / 1000 / 60 / 60 / 24 > 1)
        return 'in ' + Math.round(ms / 1000 / 60 / 60 / 7) + ' days'
    if (ms / 1000 / 60 / 60 > 1)
        return 'in ' + Math.round(ms / 1000 / 60 / 60) + ' hours'
    if (ms / 1000 / 60 > 1)
        return 'in ' + Math.round(ms / 1000 / 60) + ' minutes'
    if (ms / 1000 > 1) return 'in ' + Math.round(ms / 1000) + ' seconds'

    return "Time's up!"
}
