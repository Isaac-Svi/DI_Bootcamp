// 1
// grab both uls
const uls = document.querySelectorAll('ul')

// change first li of first ul
uls[0].lastElementChild.textContent = 'Richard'

// 2
for (const ul of uls) {
    ul.firstElementChild.textContent = 'Yitzchak'
}

// 3
for (const ul of uls) {
    const newLi = document.createElement('li')
    newLi.innerText = 'Hey students'

    ul.append(newLi)
}

// 4
uls[1].children[1].remove()

// 5 - Bonus
for (const ul of uls) {
    ul.classList.add('student_list')
}

uls[0].classList.add('university', 'attendance')
