const elementReferences = () => {
    const elements = {
        details: document.querySelector('.details'),
        name: document.querySelector('#name'),
        height: document.querySelector('#height span'),
        gender: document.querySelector('#gender span'),
        birthYear: document.querySelector('#birth-year span'),
        homeWorld: document.querySelector('#home-world span'),
        loader: document.querySelector('.loader'),
        error: document.querySelector('.error'),
        find: document.querySelector('#find'),
    }

    return () => elements
}

const getRandomNum = (min, max) => {
    max -= min
    return Math.floor(Math.random() * max + min)
}

const getCharacter = async () => {
    try {
        // checked, and it seems that there are only 83 characters
        // to choose from in this API
        // You can try changing 83 to 100 to start getting some error messages.
        const randomNum = getRandomNum(1, 83)
        const res = await fetch(`https://swapi.dev/api/people/${randomNum}`)
        const char = await res.json()

        return char
    } catch (err) {
        return err.message
    }
}

const displayCharacter = async () => {
    const getElements = elementReferences()
    const { loader, details, error } = getElements()
    details.style.display = 'none'
    error.style.display = 'none'
    loader.style.display = 'block'

    try {
        const character = await getCharacter()
        loader.style.display = 'none'

        const { height, name, gender, birthYear, homeWorld } = getElements()

        name.innerText = character.name
        height.innerText = character.height
        gender.innerText = character.gender
        birthYear.innerText = character.birth_year

        const hwRes = await fetch(character.homeworld)
        const { name: homeWorldName } = await hwRes.json()
        homeWorld.innerText = homeWorldName

        details.style.display = 'block'
    } catch (err) {
        loader.style.display = 'none'
        error.style.display = 'block'
    }
}

elementReferences()().find.addEventListener('click', displayCharacter)
