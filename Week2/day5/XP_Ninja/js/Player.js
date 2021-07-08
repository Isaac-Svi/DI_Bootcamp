class Player {
  constructor() {
    this.guesses = new Set()
  }

  isValidGuess(letter) {
    if (this.guesses.has(letter)) {
      return false
    }

    return true
  }
}
