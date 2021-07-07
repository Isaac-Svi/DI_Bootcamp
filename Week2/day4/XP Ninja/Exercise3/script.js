const isPalindrome = (str) => {
  // could've also used Math.floor(str.length / 2).  Just practicing new trick of bitwise OR learnt today
  for (let i = 0; i < (str.length / 2 | 0); i++) {
    if (str[i] !== str[str.length - i - 1]) return false
  }

  return true
}

console.log(isPalindrome('d'))
console.log(isPalindrome('swims'))
console.log(isPalindrome('madam'))
console.log(isPalindrome('howdy'))