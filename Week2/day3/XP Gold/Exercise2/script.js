let numbers = [123, 8409, 100053, 333333333, 7]

for (const number of numbers) {
  console.log(number % 3 ? false : true)
  console.log('\n') // line break
}
