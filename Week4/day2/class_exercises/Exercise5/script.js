const g = (n) => n + 1 // takes a Number n and returns n + 1
const f = (n) => n * 2 // takes a Number n and returns n doubled

const h = (x) => f(g(x)) // takes a Number x, adds 1 to it and multiplies the sum by 2

h(20) //=> 42
console.log(h(30)) // => 62
