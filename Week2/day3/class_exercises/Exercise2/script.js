let names = ['john', 'sarah', 23, 'Rudolf', 34]

// 1
for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== 'string') continue
  names[i] = names[i][0].toUpperCase() + names[i].slice(1)
  console.log(names[i])
}

console.log('---------------------')

// 2
for (let i = 0; i < names.length; i++) {
  if (typeof names[i] !== 'string') break
  console.log(names[i])
}
