const abbrevName = (str) => {
  const [firstName, lastName] = str.split(' ')

  return `${firstName} ${lastName[0]}.`
}

console.log(abbrevName("Robin Singh"))