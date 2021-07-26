/*
1: Create a HTML file and a JS FILE
2: Make a request to the jsonplaceholder API
3: If there are no errors, using the DOM, display the name, the email and the address city of each users. You can display the using a table, or a list, or paragraphs. Whatever you prefer
 */

HTMLElement.prototype.appendMany = function () {
    for (const child of arguments) {
        this.append(child)
    }
}

const createElement = (tag, text = '', attributes) => {
    const el = document.createElement(tag)

    el.innerText = text

    for (const i in attributes) {
        el.setAttribute(i, attributes[i])
    }

    return el
}

const xhr = new XMLHttpRequest()

xhr.open('GET', 'https://jsonplaceholder.typicode.com/users')

xhr.send()

xhr.addEventListener('readystatechange', () => {
    switch (xhr.readyState) {
        case 0:
            console.log(xhr)
            break
        case 1:
            console.log(xhr)
            break
        case 2:
            console.log(xhr.readyState, xhr)
            break
        case 3:
            console.log(xhr.readyState, xhr)
            break
        case 4:
            if (xhr.status !== 200) return

            const table = createElement('table')
            const tr = createElement('tr')

            tr.appendMany(
                createElement('th', 'name'),
                createElement('th', 'email'),
                createElement('th', 'city')
            )
            table.append(tr)

            // Instead of doing JSON.parse(), we can just set the response type by doing
            // xhr.responseType = 'json'
            // That way, we're automatically parsing the JSON when we receive it.
            JSON.parse(xhr.response).forEach((user) => {
                const row = createElement('tr')
                const {
                    name,
                    email,
                    address: { city },
                } = user

                row.appendMany(
                    createElement('td', name),
                    createElement('td', email),
                    createElement('td', city)
                )

                table.append(row)
            })

            document.body.append(table)
    }
})
