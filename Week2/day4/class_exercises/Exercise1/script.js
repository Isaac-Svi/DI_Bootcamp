function func(myAge = 20) {
  if (isNaN(myAge)) {
    console.log('Incorrect input')
    return
  }

  const ageMom = myAge * 2
  const ageDad = 0 | ageMom * 1.2 // this is Math.floor

  console.log(`My mom is ${ageMom}, and my dad is ${ageDad}`)
}

func(24)