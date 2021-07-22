const checkAnagram = (s1, s2) => {
    s1 = s1.replace(/\s/g, '').toLowerCase().split('').sort().join('')
    s2 = s2.replace(/\s/g, '').toLowerCase().split('').sort().join('')

    return s1 === s2
}

console.log(checkAnagram('Astronomer', 'Moon starrer'))
console.log(checkAnagram('School master', 'The classroom'))
console.log(checkAnagram('The Morse Code', 'Here come dots'))
