class Game {
  constructor(hiddenSymbol) {
    this.hiddenSymbol = hiddenSymbol
    this.word = ''
    this.hiddenWord = ''
  }

  setWord(word) {
    this.word = word
    this.hiddenWord = this.hiddenSymbol.repeat(this.word.length)
  }

  adjustHiddenWord(indexes) {
    let newHiddenWord = ''

    for (let i = 0; i < this.word.length; i++) {
      if (indexes.includes(i)) {
        newHiddenWord += this.word[i]
        continue
      }
      newHiddenWord += this.hiddenWord[i]
    }

    this.hiddenWord = newHiddenWord
  }

  isValidWord(word) {
    return word.length >= 8
  }

  getIndexesOfGuess(letter) {
    const indexes = []

    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i] === letter) {
        indexes.push(i)
      }
    }

    return indexes
  }
}
