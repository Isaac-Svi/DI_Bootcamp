const output = document.querySelector('.output')

const scrollDown = () => {
  output.scrollTop = output.scrollHeight
}

const number = (num) => {
  output.innerHTML += num + ''
  scrollDown()
}

const operator = (operator) => {
  output.innerHTML += operator + ''
  scrollDown()
}

const equal = () => {
  // just using function constructor instead, cuz i heard eval is evil
  const func = new Function(`return ${output.innerHTML}`)
  output.innerHTML = func()
}

const backspace = () => {
  let newOutput = output.innerHTML.split('')
  newOutput.pop()
  output.innerHTML = newOutput.join('')
}

const reset = () => {
  output.innerHTML = ''
}
