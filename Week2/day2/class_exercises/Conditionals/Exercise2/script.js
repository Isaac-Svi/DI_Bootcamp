let a = 2 + 2

// a is 4

switch (a) {
  case 3:
    alert('Too small')
    break
  case 4:
    alert('Exactly!')
    break
  case 5:
    alert('Too large')
    break
  default:
    alert("I don't know such values")
}

// We skip case 3, and when we hit
// case 4, we find a match.  Therefore,
// we alert "Exactly".
// Afterwards, we break and exit the
// switch statement.
