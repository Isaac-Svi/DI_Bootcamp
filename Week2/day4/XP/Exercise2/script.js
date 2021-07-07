// 1
const receivedAge = Number(prompt('Enter your age'))

// 2
const checkDriverAge = (age = receivedAge) => {
  if (age < 18) {
    alert("Sorry, you are too young to drive this car. Powering off")
    return
  }

  if (age === 18) {
    alert("Congratulations on your first year of driving. Enjoy the ride!")
    return
  }

  alert("You are old enough to drive, Powering On. Enjoy the ride!")
}

// 3
checkDriverAge() // uses receivedAge global input above

// 4
checkDriverAge(25) // use 25 which is given as age