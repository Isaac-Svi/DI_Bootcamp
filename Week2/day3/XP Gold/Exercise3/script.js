let age = [20, 5, 12, 43, 98, 55]

// 1 - Get sum of all ages
let sumAges = 0

for (const a of age) {
  sumAges += a
}

console.log(sumAges)

// 2 - Get largest age
let largestAge = age[0]

for (let i = 1; i < age.length; i++) {
  if (age[i] > largestAge) {
    largestAge = age[i]
  }
}

console.log(largestAge)
