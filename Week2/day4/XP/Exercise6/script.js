const changeEnough = (change, item) => {
  let [quarters, dimes, nickels, pennies] = change

  quarters *= 0.25
  dimes *= 0.1
  nickels *= 0.05
  pennies *= 0.01

  const sumChange = quarters + dimes + nickels + pennies

  return sumChange >= item
}

// implementation
console.log(changeEnough([2, 100, 0, 0], 14.11))
console.log(changeEnough([0, 0, 20, 5], 0.75))