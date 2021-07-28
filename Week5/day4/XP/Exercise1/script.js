fetch('https://swapi.dev/api/starships/9/')
    .then((response) => response.json())
    .then(console.log)

const getShip = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/starships/9/')
        const data = await res.json()

        console.log(data)
    } catch (err) {
        console.log(err.message)
    }
}

getShip()
