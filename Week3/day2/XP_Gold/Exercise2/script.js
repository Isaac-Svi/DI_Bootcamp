const colorSelect = document.querySelector('#colorSelect')
const button = document.querySelector('input[type="button"]')

const removecolor = () => {
    const { selectedIndex, options } = colorSelect

    if (!options.length) return

    options[selectedIndex].remove()
}

button.addEventListener('click', removecolor)
