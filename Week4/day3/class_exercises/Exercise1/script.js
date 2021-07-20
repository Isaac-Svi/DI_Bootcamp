// "John" -> return ["J", "o", "h", "n"]
// 	   -> return ["J", "O", "H", "N"]
// 	   -> "J.0.H.N"
// EXAMPLE
// 1. Split the name
// 2. Uppercase each letter
// 3. Add . between each letter (join)

// JS array functions
console.log(
    'John'
        .split('')
        .map((x) => x.toUpperCase())
        .join('.')
)

// -------------------------------------------------------------------------
// half custom functions
// this is a curried function, but not composed function
const formatName = (name) => (splitter) => (transformation) => (joiner) =>
    name
        .split(splitter)
        .map((x) => x[transformation]())
        .join(joiner)

console.log(formatName('John')('')('toUpperCase')('.'))

// -------------------------------------------------------------------------
// THESE LAST 2 ARE CUSTOM FUNCTIONS

// full custom functions
const splitWord = (str) => {
    const arr = []

    for (let s of str) {
        arr.push(s)
    }

    return arr
}

const makeUppercase = (arr) => {
    const newArr = []

    for (const el of arr) {
        newArr.push(el.toUpperCase())
    }

    return newArr
}

const join = (arr) => {
    let str = arr[0]
    for (let i = 1; i < arr.length; i++) {
        str += '.' + arr[i]
    }
    return str
}

const formatName2 = (name) => join(makeUppercase(splitWord(name)))

console.log(formatName2('John'))

// -------------------------------------------------------------------------
const splitWord2 = (str, splitter) => {
    const arr = []
    let section = ''

    for (const s of str) {
        if (s === splitter) {
            arr.push(section)
            section = ''
        } else {
            section += s
        }
    }

    arr.push(section) // for last section

    return arr
}

const join2 = (arr, joiner) => {
    let str = arr[0]

    for (let i = 1; i < arr.length; i++) {
        str += joiner + arr[i]
    }

    return str
}

const formatName3 = (name) => join2(makeUppercase(splitWord(name, '')), '.')

console.log(formatName3('John'))
console.log(splitWord2('Jo,hnasdfadsf,sdf', ','))
