// Step 1
const person1 = {
  fullName: 'Bob Smith',
  mass: 60, // kgs
  height: 170, // centimeters
  getBMI() {
    // Step 2
    return this.mass / Math.pow(this.height / 100, 2)
  },
}
const person2 = {
  fullName: 'John Doe',
  mass: 70,
  height: 200,
  getBMI() {
    return this.mass / Math.pow(this.height / 100, 2)
  },
}

// Step 3
const getPersonHighestBMI = (p1, p2) => {
  if (p1.getBMI() > p2.getBMI()) return p1.fullName
  if (p1.getBMI() < p2.getBMI()) return p2.fullName

  return null // if BMI's are equal
}

// Step 4
console.log(getPersonHighestBMI(person1, person2))
