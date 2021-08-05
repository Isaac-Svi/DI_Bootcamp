HTMLElement.prototype.appendMany = function () {
    for (const el of arguments) {
        this.append(el)
    }
    return this
}

const createElement = ({ tag = 'div', text = '', attributes = {}, html }) => {
    const el = document.createElement(tag)

    el.innerText = text
    if (html) el.innerHTML = html

    for (const attr in attributes) {
        el.setAttribute(attr, attributes[attr])
    }

    return el
}

const partitionMs = (ms) => {
    // const years = Math.floor(ms / (1000 * 60 * 60 * 24 * 365))
    // ms %= 1000 * 60 * 60 * 24 * 365

    const days = Math.floor(ms / (1000 * 60 * 60 * 24))
    ms %= 1000 * 60 * 60 * 24

    const hours = Math.floor(ms / (1000 * 60 * 60))
    ms %= 1000 * 60 * 60

    const minutes = Math.floor(ms / (1000 * 60))
    ms %= 1000 * 60

    const seconds = Math.floor(ms / 1000)
    ms %= 1000

    const result =
        // (years > 0 ? years + ':' : '') +
        (days > 0 ? (days < 10 ? `0${days}` : days) + ':' : '') +
        (hours > 0 ? (hours < 10 ? `0${hours}` : hours) + ':' : '') +
        (minutes > 0 ? (minutes < 10 ? `0${minutes}` : minutes) + ':' : '') +
        (seconds > 0 ? (seconds < 10 ? `0${seconds}` : seconds) + ':' : '') +
        (ms > 0 ? (ms + '').slice(0, 2) : '')

    return result
}

const randomNum = (min, max) => {
    max -= min
    return Math.floor(Math.random() * max + min)
}

const getRandomId = (len = 7) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz0123456789'
    let id = ''
    for (let i = 0; i < len; i++) {
        id += chars[randomNum(0, chars.length)]
    }
    return id
}
