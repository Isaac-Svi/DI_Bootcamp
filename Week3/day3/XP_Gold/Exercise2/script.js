document.body.addEventListener('dragover', (e) => e.preventDefault())

class Box {
    constructor() {
        this.isDragging = false

        this.setupEl()

        // event listeners
        this.$el.addEventListener('dragstart', this.handleDragStart.bind(this))
        document.body.addEventListener('drop', this.handleDrop.bind(this))
    }

    setupEl() {
        this.$el = document.createElement('p')
        this.$el.innerText = 'Howdy'
        this.$el.draggable = true
        document.body.append(this.$el)
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
        this.$el.style.fontSize = Math.abs(e.clientX / 3 - e.clientY / 3) + 'px'

        this.isDragging = false
    }
}

new Box()
