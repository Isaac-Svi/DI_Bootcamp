// initial setup

const roboGrid = document.querySelector('.robo-grid')

class Card {
    constructor({ id, name, email, username, image }) {
        this.id = id
        this.name = name
        this.email = email
        this.username = username
        this.image = image
    }

    render() {
        return `
        <div class="card" data-username="${this.username}" data-id="${this.id}">
            <img src="${this.image}" alt="img-${this.id}" />
            <div class="details">
                <h3 class="name">${this.name}</h3>
                <small class="email">${this.email}</small>
            </div>
        </div>
        `
    }
}

const robotElements = []
for (const robot of robots) {
    const robotElement = new Card(robot)
    robotElements.push(robotElement)
    roboGrid.innerHTML += robotElement.render()
}

// search functionality
const input = document.querySelector('input')

input.addEventListener('input', (e) => {
    const { value: name } = e.target

    roboGrid.innerHTML = ''

    robotElements
        .filter((x) => x.name.toLowerCase().startsWith(name.toLowerCase()))
        .forEach((x) => (roboGrid.innerHTML += x.render()))
})
