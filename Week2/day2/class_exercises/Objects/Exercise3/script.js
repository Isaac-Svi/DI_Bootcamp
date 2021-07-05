let userCart = {
  username: 'John',
  password: 1234,
  isUserSignedIn: true,
  cart: {
    apple: 2,
    banana: 1,
    pear: 5,
  },
  prices: {
    apple: 0.5,
    banana: 0.8646466363,
    pear: 0.2,
  },
}

// First exercise
// 1. If the user is SignedIn - show him his name and password
// 2. If not - alert the user "you need to sign in"

if (userCart.isUserSignedIn) {
  alert(`
    username: ${userCart.username}
    password: ${userCart.password}
  `)
} else {
  alert('you need to sign in')
}

// Second exercise
// 1. If the user is John AND his password is 1234 - alert him "You are signed in"
// 2. If the user is John OR his password is 1234 - alert him "One credential is false"
// 3. Else,alert the user "you need to sign in"
const uname = userCart.username,
  pwd = userCart.password

if (uname === 'John' && pwd === 1234) {
  alert('You are signed in')
} else if (uname === 'John' || pwd === 1234) {
  alert('One credential is false')
} else {
  alert('you need to sign in')
}
