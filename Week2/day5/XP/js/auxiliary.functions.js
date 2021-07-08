const isValidNumber = (input) => {
  return input && typeof input === 'number' ? true : false
}

const isWithinRange = (input, min, max) => {
  return !(input < min || input > max)
}

const randomNumInRange = (min, max) => {
  max -= min
  return 0 | (Math.random() * max + min)
}
