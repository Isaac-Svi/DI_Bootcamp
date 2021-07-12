// 1
const genres = document.getElementById('genres')
const { selectedIndex, options } = genres

console.log(options[selectedIndex].value)

// 2
const option = document.createElement('option')
option.value = 'classic'
option.innerText = 'Classic'
genres.append(option)

// 3
option.selected = true
