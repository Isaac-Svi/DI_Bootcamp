const input = prompt('Enter a sentence containing the word "Nemo": ')

const nemoPosition = input.split(' ').findIndex((x) => x.toLowerCase() === 'nemo')

if (nemoPosition !== -1) console.log(`I found Nemo at ${nemoPosition}!`)
else console.log('I can’t find Nemo')
