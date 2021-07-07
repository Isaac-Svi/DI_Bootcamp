// 1
const checkNumber = () => {
  // 2
  for (let i = 0; i < 100; i++) {
    // 3
    if (i % 2) {
      console.log(`the number ${i} is odd`)
    } else {
      console.log(`the number ${i} is even`)
    }
  }
}

// 4
checkNumber()