// 1
const string_chop = (str, num) => {
    const arr = []

    for (let i = 0; i < str.length; i += num) {
        arr.push(str.slice(i, num + i))
    }

    return arr
}

console.log(string_chop('w3resource', 2))
console.log(string_chop('w3resource', 4))
console.log(string_chop('w3resource', 5))
// ['w3', 're', 'so', 'ur', 'ce']
