// 1
const div = document.querySelector('div')
const sameDiv = document.getElementsByTagName('div')[0]

console.log(div === sameDiv) // ✔

// 2
const ul = document.body.children[1]
const sameUl = div.nextElementSibling

console.log(ul === sameUl) // ✔

// 3
const li2 = ul.lastElementChild
const sameLi2 = document.querySelectorAll('li')[1]

console.log(li2 === sameLi2) // ✔
