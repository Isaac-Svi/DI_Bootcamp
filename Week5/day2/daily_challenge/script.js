HTMLElement.prototype.appendMany = function () {
    for (const child of arguments) {
        this.append(child)
    }
}

const createElement = (tag, text = '', attributes) => {
    const el = document.createElement(tag)

    el.innerText = text

    for (const a in attributes) {
        el.setAttribute(a, attributes[a])
    }

    return el
}

const output = document.querySelector('.output')

document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault()

    const API_URL =
        'https://api.giphy.com/v1/gifs/search?' +
        new URLSearchParams({
            q: e.target.search.value,
            limit: 1,
            rating: 'g',
            api_key: 'hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My',
        }).toString()

    const xhr = new XMLHttpRequest()

    xhr.open('GET', API_URL)

    xhr.responseType = 'json'

    xhr.send()

    xhr.addEventListener('load', () => {
        const { url, height } = xhr.response.data[0].images.downsized

        const imgContainer = createElement('div', '', { class: 'img-container' })

        imgContainer.appendMany(
            createElement('img', '', { src: url, height }),
            createElement('p', e.target.search.value),
            createElement('button', 'Delete', {
                onclick: `(() => this.parentNode.remove())()`,
            })
        )

        output.append(imgContainer)

        e.target.reset()
    })
})

document.getElementById('delete').addEventListener('click', () => (output.innerHTML = ''))
