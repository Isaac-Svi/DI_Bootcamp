// allow drop in body
document.body.addEventListener('dragover', (e) => {
    e.preventDefault()
})

// set up letter elements
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const lettersContainer = document.querySelector('.letters')

class LetterBox {
    static hightestZIndex = 0

    constructor(letter) {
        this.letter = letter
        this.isDragging = false

        this.setupEl()

        // event listeners
        this.$el.addEventListener('dragstart', this.handleDragStart.bind(this))
        document.body.addEventListener('drop', this.handleDrop.bind(this))
    }

    setupEl() {
        this.$el = document.createElement('div')

        this.$el.className = 'letter-box'
        this.$el.innerText = this.letter
        this.$el.draggable = true
        this.$el.style.zIndex = LetterBox.hightestZIndex++

        lettersContainer.append(this.$el)
    }

    handleDragStart() {
        this.isDragging = true
        this.$el.style.zIndex = LetterBox.hightestZIndex++
    }

    handleDrop(e) {
        if (!this.isDragging) return

        this.$el.style.position = 'absolute'
        this.$el.style.left = e.clientX + 'px'
        this.$el.style.top = e.clientY + 'px'

        this.isDragging = false
    }
}

for (const letter of letters) {
    new LetterBox(letter)
}
