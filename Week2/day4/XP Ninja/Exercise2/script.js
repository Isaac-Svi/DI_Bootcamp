// 1
const capitalize = (str) => {
  let evenStr = '',
      oddStr = ''

  // 2
  for (let i = 0; i < str.length; i++) {
    if (i % 2) {
      oddStr += str[i].toUpperCase()
      evenStr += str[i]
    } else {
      evenStr += str[i].toUpperCase()
      oddStr += str[i]
    }
  }

  return [
    evenStr,
    oddStr
  ]
}

console.log(capitalize("abcdef"))