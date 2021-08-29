const getRandomNum = (min, max) => {
    max -= min
    return Math.floor(Math.random() * max + min)
}

const getRandomId = (len = 7) => {
    const chars = 'abcdefghijklmnopqrstuvwxyz'
    let id = ''
    for (let i = 0; i < len; i++) {
        id += chars[getRandomNum(0, chars.length)]
    }
    return id
}

export default class Todo {
    constructor(todo) {
        this.id = getRandomId()
        this.todo = todo
        this.done = false
    }
}
