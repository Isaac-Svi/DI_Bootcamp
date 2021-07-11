// 1
const div = document.querySelector('#container')
const sameDiv = document.getElementById('container')

console.log(div === sameDiv)
console.log('-----------------')

// 2
const uls = document.querySelectorAll('ul.list')
const sameUls = document.getElementsByClassName('list')

// 2.1
for (const ul of uls) {
    for (const li of ul.children) {
        console.log(li.textContent)
    }
}
console.log('-----------------')

// 2.2
for (const ul of sameUls) {
    for (const li of ul.children) {
        console.log(li.textContent)
    }
}
console.log('-----------------')

// 3
const firstUlFirstLi = uls[0].children[0]
const secondUlFirstLi = uls[1].children[0]

const sameFirstUlFirstLi = document.querySelector('ul.list li')
const sameSecondUlFirstLi = uls[1].querySelector('li')

console.log(firstUlFirstLi === sameFirstUlFirstLi)
console.log(secondUlFirstLi === sameSecondUlFirstLi)
