const input = prompt('What is your age?')

const age = Number(input)

if (age < 18) {
  alert('Sorry, you are too young to drive this car. Powering off.')
} else if (age > 18) {
  alert('Powering On. Enjoy the ride!')
} else {
  alert('Congratulations on your first year of driving. Enjoy the ride!')
}
