// Exercise
// Use https://sunrise-sunset.org/api
// Create A form with 4 inputs - lat and long for 2 cities
// Retrieve the inputs and display the hour of the sunrise for both city only when both promises are resolved
// Use promise.all

document.forms[0].addEventListener('submit', async (e) => {
    e.preventDefault()

    const output = document.querySelector('.output')
    const API = `https://api.sunrise-sunset.org/json?`
    const [lat1, lon1, lat2, lon2] = [...e.target.elements]
        .filter((x) => x.tagName === 'INPUT')
        .map((x) => x.value)

    try {
        const results = await Promise.all([
            fetch(API + `lat=${lat1}&lng=${lon1}`).then((res) => res.json()),
            fetch(API + `lat=${lat2}&lng=${lon2}`).then((res) => res.json()),
        ])

        results.forEach(({ results: { sunrise } }, i) => {
            output.innerHTML += `
                Sunrise city ${i + 1}: ${sunrise}<br>
            `
        })
    } catch (err) {
        console.log(err.message)
    }
})
