const createCard = (info) => {
    const { id, name, username, email, image } = info

    const card = document.createElement('div')
    card.className = 'robot'

    const img = new Image()
    img.src = image
    img.alt = `robot-${id}`

    const h3 = document.createElement('h3')
    h3.innerText = name

    const p = document.createElement('p')
    p.innerText = username

    const h4 = document.createElement('h4')
    h4.innerText = email

    card.append(img)
    card.append(h3)
    card.append(p)
    card.append(h4)

    return card
}

const getRobots = async (e) => {
    e.preventDefault()

    const robots = document.querySelector('.robots')
    robots.innerHTML = ''

    try {
        const res = await fetch(`/robots?search=${e.target.search.value}`)
        const data = await res.json()

        for (const robot of data) {
            robots.append(createCard(robot))
        }
    } catch (err) {
        console.log(err.message)
    }
}

const form = document.forms[0]
form.addEventListener('submit', getRobots)
