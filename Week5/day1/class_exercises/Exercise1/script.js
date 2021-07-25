// pollyfill
HTMLElement.prototype.appendMany = function () {
    for (const child of arguments) {
        this.append(child)
    }
}

const createElement = (tag, text = '', attributes) => {
    const el = document.createElement(tag)

    el.innerText = text

    for (const key in attributes) {
        el.setAttribute(key, attributes[key])
    }

    return el
}

// 1: Add a submit event to the form
// 2: Validate the username : it must be at least 4 characters long. If the username is not valid, the form won't be submitted
// 3: If the username is valid, send the query in the index.html and display it on the page in a HTML table

// 1, 2
document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault()

    const { username } = e.target

    if (username.value.length >= 4) return e.target.submit()

    e.target.reset()
})

// 3
document.addEventListener('DOMContentLoaded', () => {
    const searchParams = new URLSearchParams(window.location.search)
    const { username } = Object.fromEntries(searchParams)

    if (username) {
        const tr1 = createElement('tr'),
            tr2 = createElement('tr')

        tr1.append(createElement('th', 'username'))
        tr2.append(createElement('td', username))

        document.querySelector('table tbody').appendMany(tr1, tr2)
    }
})
