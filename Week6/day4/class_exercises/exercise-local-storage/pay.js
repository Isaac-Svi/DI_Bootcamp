const items = JSON.parse(localStorage.getItem('cart'))

const output = document.querySelector('.output')

items.forEach((item) => {
    output.innerHTML += JSON.stringify(item)
})

document.querySelector('button').addEventListener('click', (e) => {
    alert('You just paid')
    localStorage.removeItem('cart')
})
