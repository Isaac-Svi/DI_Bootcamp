const removeFalsies = (arr) => {
    const targets = [null, 0, '', false, undefined, NaN]
    const newArr = []

    for (const el of arr) {
        if (!targets.includes(el)) {
            newArr.push(el)
        }
    }

    return newArr
}

console.log(removeFalsies([1, 2, null, 3, '', false, undefined, 5, NaN, 6, 7]))
