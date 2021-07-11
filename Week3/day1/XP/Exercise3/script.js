// 1
const div = document.querySelector('div')
div.style.backgroundColor = 'lightblue'

// 2
const [john, pete] = document.querySelectorAll('li')
john.style.display = 'none'

// 3
pete.style.border = '1px solid orange'

// 4
document.body.style.fontSize = '25px'

// // 5 - Bonus
if (div.style.backgroundColor === 'lightblue') {
    alert(`Hello ${john.textContent} and ${pete.textContent}`)
}
