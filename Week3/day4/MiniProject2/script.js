class Drum {
    constructor(key, name, audioPath) {
        this.key = key
        this.name = name
        this.audio = new Audio(audioPath)

        this.setupEl()
        this.$el.addEventListener('click', this.handleClick.bind(this))
        this.$el.addEventListener('mouseup', this.handleMouseUp.bind(this))
        window.addEventListener('keydown', this.handleKeyDown.bind(this))
    }

    setupEl() {
        this.$el = document.createElement('div')
        this.$el.className = 'drum'

        const h1 = document.createElement('h1')
        h1.innerText = this.key

        const p = document.createElement('p')
        p.innerText = this.name

        this.$el.append(h1)
        this.$el.append(p)
    }

    handleClick() {
        this.audio.play()
    }

    handleMouseUp() {
        this.$el.classList.toggle('beat')
        setTimeout(() => this.$el.classList.toggle('beat'), 105)
    }

    handleKeyDown(e) {
        if (e.key !== this.key.toLowerCase()) return

        this.audio.play()
        this.$el.classList.toggle('beat')
        setTimeout(() => this.$el.classList.toggle('beat'), 105)
    }
}

const drumList = [
    new Drum('A', 'Boom', './sounds/boom.wav'),
    new Drum('S', 'Clap', './sounds/clap.wav'),
    new Drum('D', 'HiHat', './sounds/hihat.wav'),
    new Drum('F', 'Kick', './sounds/kick.wav'),
    new Drum('G', 'OpenHat', './sounds/openhat.wav'),
    new Drum('H', 'Ride', './sounds/ride.wav'),
    new Drum('J', 'Snare', './sounds/snare.wav'),
    new Drum('K', 'Tink', './sounds/tink.wav'),
    new Drum('L', 'Tom', './sounds/tom.wav'),
]

// add drums to dom
const drums = document.querySelector('.drums')

for (const drum of drumList) {
    drums.append(drum.$el)
}
