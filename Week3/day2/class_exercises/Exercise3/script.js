const container = document.querySelector('div')
const styleChanger = document.getElementById('jsstyle')

const getRandomColor = () => `#${(((1 << 24) * Math.random()) | 0).toString(16)}`

const handleDIVClick = (e) => {
    console.log('a')
}
const handleClick = (e) => {
    e.stopPropagation()
    console.log('b')
    e.target.style.backgroundColor = getRandomColor()
}
const handleMouseOver = ({ target }) => {
    target.style.color = getRandomColor()
}
let toggle = true
const handleDoubleClick = ({ target }) => {
    target.style.transform = `scale(${toggle ? 1.2 : 1})`
    toggle = !toggle
}
const handleMouseDown = ({ target }) => {
    target.style.transform = 'scale(1.2)'
}
const handleMouseUp = ({ target }) => {
    target.style.transform = 'scale(1)'
}

// container.addEventListener('click', handleDIVClick, true)
// styleChanger.addEventListener('click', handleClick, true)
container.addEventListener('click', handleDIVClick)
styleChanger.addEventListener('click', handleClick)
styleChanger.addEventListener('mouseover', handleMouseOver)
styleChanger.addEventListener('dblclick', handleDoubleClick)
styleChanger.addEventListener('mousedown', handleMouseDown)
styleChanger.addEventListener('mouseup', handleMouseUp)
