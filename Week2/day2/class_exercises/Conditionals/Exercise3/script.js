let a = 2 + 2

switch (a) {
  case 4:
    alert('Right!')
    break

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!')
    alert("Why don't you take a math class?")
    break

  default:
    alert('The result is strange. Really.')
}

// In this case, since a is 4, we hit case 4 right away,
// which then alerts "Right".  Afterwards we break and
// exit the switch statement.
