const xhr = new XMLHttpRequest()

xhr.open(
    'GET',
    'https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My'
)

xhr.responseType = 'json'

xhr.send()

xhr.addEventListener('load', () => console.log(xhr.response))
