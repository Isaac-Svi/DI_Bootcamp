let currentPokemonId = null

const elementReferences = () => {
    const elements = {
        img: document.querySelector('.screen img'),
        screen: document.querySelector('.screen'),
        name: document.querySelector('.name'),
        order: document.querySelector('.order span'),
        height: document.querySelector('.height span'),
        weight: document.querySelector('.weight span'),
        type: document.querySelector('.type span'),
        loader: document.querySelector('.loader'),
        error: document.querySelector('.error'),
        success: document.querySelector('.success'),
        new: document.querySelector('.new'),
        forward: document.querySelector('.forward'),
        back: document.querySelector('.back'),
    }

    return () => elements
}

const getRandomNum = (min, max) => {
    max -= min
    return Math.floor(Math.random() * max + min)
}

const capitalize = (word) => word[0].toUpperCase() + word.slice(1)

const getPokemon = async (id) => {
    try {
        // up to 898 different pokemon from api
        currentPokemonId = id ? id : getRandomNum(1, 898)

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${currentPokemonId}`)
        const {
            name,
            height,
            weight,
            order,
            types,
            sprites: { front_default },
        } = await res.json()

        return {
            name: capitalize(name),
            height,
            weight,
            order,
            type: capitalize(types[0].type.name),
            image: front_default,
        }
    } catch (err) {
        throw err
    }
}

const setPokemon = async (_, id = null) => {
    const getElements = elementReferences()

    const { loader, error, success, screen } = getElements()

    error.style.display = 'none'
    success.style.display = 'none'
    screen.style.display = 'none'
    loader.style.display = 'block'

    try {
        const pokemon = await getPokemon(id)
        const { name, order, height, weight, type, img } = getElements()

        name.innerText = pokemon.name
        order.innerText = pokemon.order
        height.innerText = pokemon.height
        weight.innerText = pokemon.weight
        type.innerText = pokemon.type
        img.src = pokemon.image

        loader.style.display = 'none'
        success.style.display = 'block'
        screen.style.display = 'block'
    } catch (err) {
        loader.style.display = 'none'
        error.style.display = 'block'
    }
}

elementReferences()().new.addEventListener('click', setPokemon)
elementReferences()().forward.addEventListener('click', (e) => {
    setPokemon(e, currentPokemonId + 1)
})
elementReferences()().back.addEventListener('click', (e) => {
    setPokemon(e, currentPokemonId - 1)
})
