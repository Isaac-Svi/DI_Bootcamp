const p = document.querySelector('p')

// 1
const getBold_items = () => {
    return p.querySelectorAll('strong')
}

// 2
const highlight = () => {
    getBold_items().forEach((item) => {
        item.style.color = 'blue'
    })
}

// 3
const return_normal = () => {
    getBold_items().forEach((item) => {
        item.style.color = 'black'
    })
}

// 4
p.addEventListener('mouseover', highlight)
p.addEventListener('mouseout', return_normal)
