const getRandomColor = () => {
    return `#${(((1 << 24) * Math.random()) | 0).toString(16)}`
}

const randomNumber = (min, max) => {
    max -= min
    return 0 | (Math.random() * max + min)
}
