const colors = ['orange', 'lightblue', 'lightgray']

const randomColor = () => {
    const i = Math.floor(Math.random() * colors.length)
    return colors[i]
}

const createBubbles = (e) => {
    if (Date.now() % 4 !== 0) return

    const bubble = document.createElement('div')
    bubble.className = 'bubble'
    bubble.style.top = e.clientY + 'px'
    bubble.style.left = e.clientX + 'px'
    bubble.style.color = randomColor()

    document.body.append(bubble)

    setTimeout(() => {
        bubble.remove()
    }, 1000)
}

window.addEventListener('mousemove', createBubbles)
