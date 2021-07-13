const container = document.querySelector('.container')
const boxAdder = document.querySelector('.box-adder')

const getRandomColor = () => {
    let r, g, b
    r = Math.floor(Math.random() * 255)
    g = Math.floor(Math.random() * 255)
    b = Math.floor(Math.random() * 255)

    return `rgb(${r},${g},${b})`
}

const addBox = () => {
    const newBox = document.createElement('div')
    newBox.className = 'box'
    newBox.style.backgroundColor = getRandomColor()

    container.append(newBox)
}

boxAdder.addEventListener('click', addBox)
