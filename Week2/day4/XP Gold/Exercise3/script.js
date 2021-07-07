const swapCase = (str) => {
  let newStr = ''

  for (const x of str) {
    newStr += x === x.toUpperCase() ? x.toLowerCase() : x.toUpperCase()
  }

  return newStr
}

console.log(swapCase('The Quick Brown Fox'))