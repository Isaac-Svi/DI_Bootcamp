const removeDups = (arr) => {
    return [...new Set(arr)]
}
console.log(removeDups([1, 1, 2, 2, 3, 4, 4, 5]))

const removeDups2 = (arr) => {
    const newArr = []
    const valMap = {}

    for (const el of arr) {
        if (!(el in valMap)) {
            newArr.push(el)
            valMap[el] = true
        }
    }

    return newArr
}
console.log(removeDups2([1, 1, 2, 2, 3, 4, 4, 5]))

const removeDups3 = (arr) => {
    const newArr = []
    const valMap = new Map()

    for (const el of arr) {
        if (!valMap.has(el)) {
            newArr.push(el)
            valMap.set(el, true)
        }
    }

    return newArr
}
console.log(removeDups3([1, 1, 2, 2, 3, 4, 4, 5]))
