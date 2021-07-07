const database = [
  {
    username: 'andrei',
    password: 'supersecret',
  },
  {
    username: 'bob',
    password: 'asdf',
  },
  {
    username: 'test',
    password: 'test1234',
  },
]

const newsFeed = [
  {
    username: 'Bobby',
    timeline: 'So tired from all that learning!',
  },
  {
    username: 'Sally',
    timeline: 'Javascript is so cooool!',
  },
  {
    username: 'Mitch',
    timeline: 'Javascript is pretty cool!',
  },
]

const userNamePrompt = prompt("What's your username?")
const passwordPrompt = prompt("What's your password?")

const isUserValid = (username, password) => {
  return database.some((x) => {
    return x.username === username && x.password === password
  })
}

const signIn = (username, password) => {
  const userExists = isUserValid(username, password)

  if (userExists) console.log(newsFeed)
  else alert('Sorry, wrong username and password')
}

signIn(userNamePrompt, passwordPrompt)
