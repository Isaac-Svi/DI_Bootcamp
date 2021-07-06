const family = {
  father: 'Azriel',
  mother: 'Chana',
  brother: 'Yehoshua',
}

for (const member in family) {
  console.log(member + ':', family[member])
}
