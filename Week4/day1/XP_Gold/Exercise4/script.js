const repeat = (str, times) => {
    let newStr = ''

    for (let i = 0; i < times; i++) {
        newStr += str
    }

    return newStr
}

console.log(repeat('Ha!', 3))
