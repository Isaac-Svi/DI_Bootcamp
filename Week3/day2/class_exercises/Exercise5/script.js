// 1
const select = document.querySelector('#select1')
const secondOption = select.options[1].value

console.log(secondOption)

// 2
const newOption = document.createElement('option')
newOption.value = 'Work'
newOption.innerText = 'howdy'

select.append(newOption)

// 3
const newOption2 = document.createElement('option')
newOption2.value = 'Primary School'
newOption2.innerText = 'PS'

select.prepend(newOption2)

// 4
// could've also done select.options[3]
const collegeIndex = [...select.options].findIndex((x) => {
    return x.innerText === 'College'
})
select.options[collegeIndex].selected = true

// 5
const btn = document.querySelector('button')
btn.addEventListener('click', (_) => {
    const i = select.selectedIndex
    const selectedOption = select.options[i]
    alert(selectedOption.value)
})
