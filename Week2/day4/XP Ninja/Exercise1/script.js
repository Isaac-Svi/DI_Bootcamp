const getRandomNumber = () => {
  return 0 | Math.random() * 100
}

const logEvenNumbersInRandomRange = () => {
  const num = getRandomNumber()

  for (let i = 0; i < num; i++) {
    if (i % 2 === 0) console.log(i)
  }
}

logEvenNumbersInRandomRange()