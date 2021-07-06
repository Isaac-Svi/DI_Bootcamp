let guestList = {
  randy: 'Germany',
  karla: 'France',
  wendy: 'Japan',
  norman: 'England',
  sam: 'Argentina',
}

const input = prompt('Enter your name').toLowerCase()

if (input in guestList) {
  const name = input[0].toUpperCase() + input.slice(1)

  console.log(`Hi! I'm ${name}, and I'm from ${guestList[input]}.`)
} else {
  console.log("Hi, I'm a guest.")
}
