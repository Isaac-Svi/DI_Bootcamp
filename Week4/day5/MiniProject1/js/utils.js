HTMLElement.prototype.appendMany = function (...children) {
    for (const child of children) {
        this.append(child)
    }
}

const createElement = (tag, attributes, text = '') => {
    const el = document.createElement(tag)

    for (const i in attributes) {
        el.setAttribute(i, attributes[i])
    }

    el.innerText = text

    return el
}
