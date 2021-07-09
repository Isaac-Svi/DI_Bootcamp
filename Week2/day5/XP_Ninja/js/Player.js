class Player {
  constructor() {
    this.guesses = new Set()
  }

  isValidGuess(letter) {
    if (!letter || this.guesses.has(letter)) {
      return false
    }

    return true
  }
}
