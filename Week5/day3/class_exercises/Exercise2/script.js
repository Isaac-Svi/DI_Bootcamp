// 1: Use fetch to fetch one 1 random gif with the category of "sun"
// 2: You append the gif to the page

const output = document.querySelector('.output')
const API_URL =
    'https://api.giphy.com/v1/gifs/random?' +
    new URLSearchParams({
        tag: 'sun',
        limit: 1,
        rating: 'g',
        api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    }).toString()

document.getElementById('search').addEventListener('click', (e) => {
    fetch(API_URL)
        .then((res) => res.json())
        .then(({ data }) => {
            const { image_url } = data
            const img = new Image(200)
            img.src = image_url

            output.append(img)
        })
        .catch((err) => console.log(err.message))
})

document.getElementById('delete').addEventListener('click', () => {
    output.innerHTML = ''
})
