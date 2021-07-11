// 1
const navBar = document.getElementById('navBar')
navBar.setAttribute('id', 'socialNetworkNavigation')

// 2
const newLi = document.createElement('li')
const text = document.createTextNode('Logout')
newLi.appendChild(text)

const ul = navBar.querySelector('ul')
ul.appendChild(newLi)

// // 3 - Bonus
const firstChild = ul.firstElementChild
const lastChild = ul.lastElementChild

console.log(firstChild.textContent)
console.log(lastChild.textContent)
