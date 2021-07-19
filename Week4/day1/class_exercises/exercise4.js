const checkYear = (year) => {
    const msg =
        year >= 2000 ? 'You are in the 21st century' : 'You live in the Middle Age'
    console.log(msg)
}

console.log(checkYear(2000))
console.log(checkYear(1934))
console.log(checkYear(2300))
