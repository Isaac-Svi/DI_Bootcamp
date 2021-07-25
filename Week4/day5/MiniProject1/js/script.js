// initial setup

const roboGrid = document.querySelector('.robo-grid')

class Card {
    constructor({ id, name, email, username, image }) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.image = image

        this.$el = createElement('div', { class: 'card' })

        this.setupEl()
    }

    setupEl() {
        const details = createElement('div', { class: 'details' })

        details.appendMany(
            createElement('h3', { class: 'name' }, this.name),
            createElement('small', { class: 'email' }, this.email)
        )
        this.$el.appendMany(
            createElement('img', { src: this.image, alt: `img-${this.id}` }),
            details
        )

        return this.$el
    }
}

const robotElements = []
for (const robot of robots) {
    const robotElement = new Card(robot)
    robotElements.push(robotElement)
    roboGrid.append(robotElement.$el)
}

// search functionality
const input = document.querySelector('input')

input.addEventListener('input', (e) => {
    const { value } = e.target

    for (const { $el, name } of robotElements) {
        if (!name.toLowerCase().startsWith(value.toLowerCase())) {
            $el.style.display = 'none'
        } else {
            $el.style.display = 'block'
        }
    }
})
