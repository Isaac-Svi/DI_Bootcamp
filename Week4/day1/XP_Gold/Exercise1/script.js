const myReduce = (arr) => {
    let collector = 0

    for (const el of arr) {
        collector += el
    }

    return collector
}

console.log(myReduce([1, 2, 3, 4, 5]))