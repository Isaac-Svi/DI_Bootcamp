document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    let API_URL = 'https://api.giphy.com/v1/gifs/search?'
    const params = new URLSearchParams({
        q: document.querySelector('input').value,
        rating: 'g',
        api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
    })
    API_URL = API_URL + params.toString()

    const xhr = new XMLHttpRequest()

    xhr.open('GET', API_URL)

    xhr.responseType = 'json'

    xhr.send()

    xhr.addEventListener('load', () => {
        if (Array.isArray(xhr.response.data)) {
            xhr.response.data.forEach(({ images: { downsized } }) => {
                const { url, height } = downsized
                const image = new Image()
                image.src = url
                image.height = height

                document.querySelector('.output').append(image)
            })
        } else {
            const { url, height } = xhr.response.data.images.downsized
            const image = new Image()
            image.src = url
            image.height = height

            document.querySelector('.output').append(image)
        }

        e.target.reset()
    })
})

document.getElementById('delete').addEventListener('click', (e) => {
    document.querySelector('.output').innerHTML = ''
})
