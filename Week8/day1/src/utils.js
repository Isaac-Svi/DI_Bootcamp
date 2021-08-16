export const randomNum = (min, max) => {
    max -= min
    return Math.floor(Math.random() * max + min)
}

export const randomId = (len = 7) => {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let id = ''

    for (let i = 0; i < len; i++) {
        id += characters[randomNum(0, characters.length)]
    }

    return id
}
