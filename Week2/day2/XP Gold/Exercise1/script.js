// 1
const input = prompt('Which language do you speak?')

// 2
const language = input.toLowerCase()

// 3
switch (language) {
  case 'french':
    alert('Bonjour')
    break
  case 'english':
    alert('Hello')
    break
  case 'hebrew':
    alert('Shalom')
    break
  default:
    alert('01110011 01101111 01110010 01110010 01111001')
}
