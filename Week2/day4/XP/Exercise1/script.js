// Part 1

const infoAboutMe = () => {
  console.log(`My name is Yitzchak.`)
  console.log(`I'm 26 years old.`)
  console.log(`I like coding, playing guitar, and playing chess.`)
}

infoAboutMe()

// Part 2
const infoAboutPerson = (personName, personAge, personFavoriteColor) => {
  console.log(`Your name is ${personName}.`)
  console.log(`You are ${personAge} years old.`)
  console.log(`Your favorite color is ${personFavoriteColor}.`)
}

infoAboutPerson("David", 45, "blue")
infoAboutPerson("Josh", 12, "yellow")


// Part 3
const infoAboutPerson2 = (personName, personAge, personFavoriteColor, personHobbies) => {
  console.log(`Your name is ${personName}`)
  console.log(`You are ${personAge} years old.`)
  console.log(`Your favorite color is ${personFavoriteColor}.`)

  console.log('Your hobbies are: ')
  for (const hobby of personHobbies) {
    console.log(hobby)
  }
}

infoAboutPerson2("David", 45, "blue", ["tennis", "painting"])
infoAboutPerson2("Josh", 12, "yellow", ["videoGame", "hanging out with friends", "playing cards"])

