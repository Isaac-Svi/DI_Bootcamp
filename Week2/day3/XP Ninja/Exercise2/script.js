// Step 1 and 2
const findAvg = (gradesList) => {
  const sum = gradesList.reduce((a, b) => a + b, 0)
  const average = sum / gradesList.length

  console.log(average)
  return average // for the bonus
}

// Step 3 and 4
const hasPassed = (gradeList) => {
  const avg = findAvg(gradeList)

  return avg > 65 ? 'You passed!' : 'You failed.  Must repeat the course.'
}

// see results
const grades = [12, 75, 63, 100, 98, 84]
const grades2 = [12, 75, 63, 23, 23, 23]

console.log(hasPassed(grades))
console.log(hasPassed(grades2))
