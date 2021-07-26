let API_URL = 'https://api.giphy.com/v1/gifs/random?'
const params = new URLSearchParams({
    limit: 1,
    rating: 'g',
    api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
})
API_URL = API_URL + params.toString()

document.querySelector('button').addEventListener('click', (e) => {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', API_URL)

    xhr.responseType = 'json'

    xhr.send()

    xhr.addEventListener('load', () => {
        const {
            data: { image_url },
        } = xhr.response

        const image = new Image()
        image.src = image_url

        document.body.append(image)
    })
})
