// 1
class Planet {
    constructor(name, moons) {
        this.name = name
        this.moons = moons
    }
}

const planets = [
    new Planet('mercury', 0),
    new Planet('venus', 0),
    new Planet('earth', 1),
    new Planet('mars', 2),
    new Planet('jupiter', 79),
    new Planet('saturn', 82),
    new Planet('uranus', 27),
    new Planet('neptune', 14),
    new Planet('pluto', 0),
]

// 2
const listPlanets = document.querySelector('.listPlanets')

for (const { name, moons } of planets) {
    const div = document.createElement('div')

    // 5 - Bonus: make and append moons
    for (let i = 0; i < moons; i++) {
        const moon = document.createElement('span')
        moon.classList.add('moon')

        // just making sure all moons of each planet don't cover the planet or each other
        moon.style.left = 120 + (moon.offsetWidth + 40) * i + 'px'

        // number each moon
        moon.innerText = i + 1
        div.append(moon)
    }

    // 3
    div.setAttribute('class', `planet ${name}`)

    //4
    listPlanets.append(div)
}
