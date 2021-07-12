const div = document.querySelector('div')

const handle = (e) => console.log(e.type)

div.addEventListener('click', handle)
div.addEventListener('mouseover', handle)
div.addEventListener('mouseleave', handle)
div.addEventListener('mouseout', handle)
div.addEventListener('mousemove', handle)
div.addEventListener('mousedown', handle)
div.addEventListener('mouseup', handle)
div.addEventListener('contextmenu', handle)
div.addEventListener('wheel', handle)

// console.dir(div)
