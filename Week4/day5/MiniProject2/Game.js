class Game {
    player = ''
    winCombos = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [6, 4, 2],
    ]

    constructor(entryPt, startModal, restartModal) {
        this.$entryPt = entryPt
        this.$startModal = startModal
        this.$restartModal = restartModal
        this.moves = Array(9).fill(0)

        // event listeners
        const btns = this.$startModal.querySelectorAll('button')
        btns.forEach((btn) => btn.addEventListener('click', this.startGame.bind(this)))

        this.$tds = [...this.$entryPt.querySelectorAll('td')]
        this.$tds.forEach((td) => td.addEventListener('click', this.userMove.bind(this)))

        const restartBtn = this.$restartModal.querySelector('button')
        restartBtn.addEventListener('click', this.restartGame.bind(this))
    }

    startGame(e) {
        this.side = e.target.id
        this.opposingSide = this.side === 'X' ? 'O' : 'X'
        this.$startModal.classList.remove('active')
        this.$entryPt.classList.add('active')

        if (this.opposingSide === 'X') {
            this.compMove()
        }
    }

    checkForWin(side) {
        let counter = 0

        for (const combo of this.winCombos) {
            for (const move of combo) {
                // if not all moves in combo that exist in moves array are equal to side,
                // it means that side hasn't played that winning combo
                if (this.moves[move] !== side) {
                    counter = 0
                    break
                }
                counter++

                if (counter === 3) {
                    return { won: true, combo }
                }
            }
        }

        if (this.checkForTie()) {
            return { won: false, combo: this.moves }
        }

        return { won: false, combo: null }
    }

    checkForTie() {
        for (const move of this.moves) {
            if (!move) return false
        }
        return true
    }

    displayWin(msg, cls, combo) {
        this.$restartModal.classList.add('active')
        this.$restartModal.querySelector('.result').innerText = msg

        this.colorTds(combo, cls)
    }

    displayTie() {
        this.$restartModal.classList.add('active')
        this.$restartModal.querySelector('.result').innerText = 'Tie!'

        this.colorTds(this.moves, 'win')
    }

    userMove(e) {
        e.target.innerText = this.side
        const id = Number(e.target.id)

        // if someone exists in in this.moves[id], invalid move
        if (this.moves[id]) return

        // otherwise, make the move
        this.moves[id] = this.side

        const { won, combo } = this.checkForWin(this.side)

        if (won) {
            this.displayWin('Congratulations! You Won!', 'win', combo)
            return
        } else if (combo) {
            this.displayTie()
            return
        }

        this.compMove()
    }

    calcCompMove() {
        const validIndexes = []
        for (let i = 0; i < this.moves.length; i++) {
            if (this.moves[i]) continue

            validIndexes.push(i)
        }

        const randomIndex = Math.floor(Math.random() * validIndexes.length)

        return validIndexes[randomIndex]
    }

    compMove() {
        // move index should match id
        const moveIndex = this.calcCompMove()
        const el = document.getElementById(moveIndex)
        const id = Number(el.id)

        // check for validity of move is done in calcCompMove function already
        this.moves[id] = this.opposingSide
        el.innerText = this.opposingSide

        const { won, combo } = this.checkForWin(this.opposingSide)

        if (won) {
            this.displayWin('You lost!', 'lost', combo)
        } else if (combo) {
            this.displayTie()
        }
    }

    colorTds(combo, resultClass) {
        if (combo.length === this.moves.length) {
            this.$tds.forEach((td) => td.classList.add(resultClass))
            return
        }

        this.$tds
            .filter((td) => combo.includes(Number(td.id)))
            .forEach((td) => td.classList.add(resultClass))
    }

    resetTds() {
        this.$tds.forEach((td) => {
            if (td.classList.contains('win')) td.classList.remove('win')
            else if (td.classList.contains('lost')) td.classList.remove('lost')
            td.innerText = ''
        })
    }

    restartGame() {
        this.$entryPt.classList.remove('active')
        this.$restartModal.classList.remove('active')
        this.$startModal.classList.add('active')
        this.resetTds()
        this.moves = Array(9).fill(0)
    }
}
