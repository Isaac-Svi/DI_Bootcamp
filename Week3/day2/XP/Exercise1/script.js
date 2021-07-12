// 1
document.querySelector('p:last-child').remove()

// 2
document.querySelector('h2').addEventListener('click', (e) => {
    e.target.style.backgroundColor = getRandomColor()
})

// 3
document.querySelector('h1').style.fontSize = randomNumber(0, 100) + 'px'

// 4
document.querySelector('h3').addEventListener('click', (e) => {
    e.target.style.display = 'none'
})

// 5
document.querySelector('button').addEventListener('click', () => {
    const prgphs = document.querySelectorAll('p')

    for (const p of prgphs) {
        p.style.fontWeight = 'bold'
    }
})

// 6
const usersAnswer = document.querySelector('.usersAnswer')
const table = document.createElement('table')
usersAnswer.append(table)

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    const values = [...e.target.querySelectorAll('input')].map((x) => x.value)

    if (values.includes('')) return

    // values.length - 1, because we don't want to include value of input button
    const newRow = document.createElement('tr')
    for (let i = 0; i < values.length - 1; i++) {
        const td = document.createElement('td')
        td.innerText = values[i]
        newRow.append(td)
    }
    table.append(newRow)
})

// 7
const p2 = document.querySelectorAll('p')[1]
p2.addEventListener('mouseover', () => {
    p2.classList.toggle('fade-out')
})
p2.addEventListener('mouseleave', () => {
    p2.classList.toggle('fade-out')
})
