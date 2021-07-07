// 1
const isDivisible = (divisor = 23) => {
  const divisibleArray = []

  // 2
  for (let i = 0; i < 500; i++) {

    if (i % divisor === 0) {
      divisibleArray.push(i)
    }
  }

  // 3
  console.log("Outcome:", divisibleArray.join(' '))

  // 4
  const sum = divisibleArray.reduce((a, b) => a + b, 0)
  console.log("Sum:", sum)
}

isDivisible()

// 5 - using parameter
isDivisible(3)