let details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer',
}

let string = ''
for (const key in details) {
  string += key + ' ' + details[key] + ' '
}

console.log(string.trim())
