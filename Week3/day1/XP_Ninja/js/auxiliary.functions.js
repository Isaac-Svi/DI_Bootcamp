HTMLElement.prototype.appendAll = function () {
    for (const el of arguments) {
        this.append(el)
    }
}

const createRow = ({ childTag = 'td', content }) => {
    const row = document.createElement('tr')

    row.appendAll(
        ...content.map((t) => {
            const x = document.createElement(childTag)
            x.append(t) // append can append text or HTMLElement

            return x
        })
    )

    return row
}
