// global vars
let currentColor = 'black'

// fill up colors sidebar with buttons
const colorList = [
    'red',
    'orangered',
    'orange',
    'yellow',
    'yellowgreen',
    'lightgreen',
    'green',
    'turquoise',
    'cyan',
    'lightskyblue',
    'dodgerblue',
    'blue',
    'darkblue',
    'indigo',
    'darkmagenta',
    'violet',
    'lightpink',
    'lightgray',
    'gray',
    'black',
    'white',
]

const colors = document.querySelector('.colors')

const changeColor = (e) => {
    currentColor = e.target.style.backgroundColor
}

for (const color of colorList) {
    const colorDiv = document.createElement('div')
    colorDiv.style.backgroundColor = color
    colorDiv.addEventListener('click', changeColor)
    colors.append(colorDiv)
}

// fill up grid cells
const numCols = 60
const numRows = 50
const grid = document.querySelector('.grid')

let isMouseDown = false

const handleMouseDown = () => (isMouseDown = true)
const handleMouseUp = () => (isMouseDown = false)
grid.addEventListener('mousedown', handleMouseDown)
window.addEventListener('mouseup', handleMouseUp)

const colorCell = (e) => {
    // make sure grid mousedown completes before doing doing check for isMouseDown
    setTimeout(() => {
        if (!isMouseDown) return

        e.target.style.backgroundColor = currentColor
    }, 0)
}

for (let i = 0; i < numCols * numRows; i++) {
    const gridItem = document.createElement('div')
    gridItem.addEventListener('mouseover', colorCell)
    gridItem.addEventListener('mousedown', colorCell)
    grid.append(gridItem)
}

// activate clear button
const clearBtn = document.querySelector('.clear')

const clearGrid = () => {
    for (const child of grid.children) {
        child.style.background = 'transparent'
    }
}

clearBtn.addEventListener('click', clearGrid)
