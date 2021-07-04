const input = prompt('Enter a number: ')

const number = Number(input)

const getBoom = (number) => {
  if (number < 2) return 'boom'

  let boom = ''

  if (number > 2) boom = `b${'o'.repeat(number)}m`

  if (number % 2 === 0) boom += '!'

  if (number % 5 === 0) boom = boom.toUpperCase()

  return boom
}

console.log(getBoom(number))
