const test = (userNumber, computerNumber) => {
  return userNumber > computerNumber ? 1 : userNumber < computerNumber ? -1 : 0
}

const playTheGame = () => {
  // number of chances user has to guess
  let chances = 3,
    min = 0,
    max = 10

  // 1 - early exit
  if (!confirm('Would you like to play the game?')) {
    alert('No problem, Goodbye')
    return
  }

  // 2 - confirms to play
  const conditions = [
    new Checker({
      check: isValidNumber,
      error: 'Sorry Not a number',
    }),
    new Checker({
      check: isWithinRange,
      params: [min, max],
      error: "Sorry it's not a good number",
    }),
  ]

  while (true) {
    let gameInput = Number(prompt(`Enter a number between ${min} and ${max}: `))

    const { ok, error } = Checker.testConditions(gameInput, conditions)

    if (!ok) {
      alert(error)
      continue
    }

    // only decrementing chances if user has a proper guess
    chances--

    const testResult = test(gameInput, randomNumInRange(min, max))
    alert(
      !testResult
        ? 'WINNER'
        : !chances
        ? 'out of chances'
        : testResult > 0
        ? 'Your number is bigger then the computer’s, guess again'
        : 'Your number is smaller then the computer’s, guess again'
    )

    // this means user won or lost
    if (!testResult || !chances) return
  }
}
