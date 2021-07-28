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

document.getElementById('search').addEventListener('click', async () => {
    try {
        const resWord = await fetch(WORD_URL)
        const [word] = await resWord.json()

        console.log(word)

        const resGif = await fetch(GIF_URL + `&tag=${word}`)
        const { data } = await resGif.json()
        appendImage(!Array.isArray(data) ? data : notFoundGif)
    } catch (err) {
        console.log(err.message)
    }
})

document.getElementById('delete').addEventListener('click', () => {
    output.innerHTML = ''
})
