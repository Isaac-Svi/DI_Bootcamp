let myArr = [10, 11, 12, 15, 20]

const getEven = () => {
    return myArr.filter((x) => !(x % 2))
}

console.log(getEven())
