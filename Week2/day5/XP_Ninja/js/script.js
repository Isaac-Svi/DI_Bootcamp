// delay function
const delay = (ms) => new Promise((res) => setTimeout(res, ms))

const player2 = new Player() //
const game = new Game('*')

// 1
let word
while (true) {
  word = prompt('Player 1, choose a word at least 8 letters long: ')
  if (!game.isValidWord(word)) continue

  game.setWord(word)
  break
}

// 2

let letter,
  chances = 10

async function gameLoop() {
  if (chances <= 0) return

  // show current hidden word
  console.log(game.hiddenWord)

  // show list of guesses already made by player
  if (player2.guesses.size) {
    console.log([...player2.guesses].toString())
  }

  // do small delay to allow console to write before next prompt
  await delay(10)

  // ask player2 for new letter
  letter = prompt('Guess a letter')

  if (!player2.isValidGuess(letter)) {
    alert('You already guessed that letter.')
    return gameLoop()
  }
  // add guess if it's valid
  player2.guesses.add(letter)

  const indexes = game.getIndexesOfGuess(letter)

  if (!indexes.length) {
    alert('Incorrect guess')
    return gameLoop()
  }

  game.adjustHiddenWord(indexes)

  if (game.hiddenWord === game.word) {
    console.log(game.hiddenWord)
    console.log('YOU WIN')
    alert('YOU LOSE')
    return
  }

  chances--

  if (game.hiddenWord !== game.word && !chances) {
    alert('CONGRATS YOU WIN')
    console.log('YOU LOSE')
    return
  }

  gameLoop()
}

gameLoop()
