const returnNumbers = (str) => {
    const numbers = str.match(/\d+/g)

    return numbers.join('')
}

console.log(returnNumbers('k5k3q2g5z6x9bn'))
