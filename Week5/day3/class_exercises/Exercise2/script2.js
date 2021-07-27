// 1: Instead of having a fixed category of gif.
// 2: Fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1
// 3: Depending on the word, fetch 1 random gif with the word as its category
// 4: Display the word and the gif on the page

const output = document.querySelector('.output')

const appendImage = ({ image_url }) => {
    const img = new Image(200)
    img.src = image_url

    output.append(img)
}

const GIF_URL =
    'https://api.giphy.com/v1/gifs/random?rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1'
const WORD_URL = 'http://random-word-api.herokuapp.com/word?number=1'
const notFoundGif = {
    image_url: 'https://media.giphy.com/media/8L0Pky6C83SzkzU55a/giphy.gif',
}

document.getElementById('search').addEventListener('click', () => {
    fetch(WORD_URL)
        .then((res) => res.json())
        .then(([word]) => {
            console.log(word)

            fetch(GIF_URL + `&tag=${word}`)
                .then((res) => res.json())
                .then(({ data }) =>
                    appendImage(!Array.isArray(data) ? data : notFoundGif)
                )
                .catch((err) => console.log(err.message, err.status))
        })
        .catch((err) => console.log(err))
})

document.getElementById('delete').addEventListener('click', () => {
    output.innerHTML = ''
})
