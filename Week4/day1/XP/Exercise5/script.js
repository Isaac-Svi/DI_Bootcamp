console.log(isString('hello'))
//true
console.log(isString([1, 2, 4, 0]))
//false

function isString(input) {
    return typeof input === 'string'
}
