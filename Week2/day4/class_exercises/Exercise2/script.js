function getMomAge(myAge = 20) {
  return myAge * 2
}

console.log(`My mom is ${getMomAge(26)}`)

console.log('----------------------')

// Dan wanted us to do this with an object as well
const getMomAge2 = (myAge = 20) => {
  return {
    age: myAge * 2,
    getLine() {
      // to use a parameter of an object within an
      // object using "this", you have to do so within
      // a function like we're doing here.
      return `My mom is ${this.age}`
    }
  }
}

console.log(getMomAge2(26))
console.log(getMomAge2(26).age)
console.log(getMomAge2(26).getLine())