let names = ['Jack', 'Philip', 'Sarah', 'Amanda', 'Bernard', 'Kyle']

names.sort()

let ss = ''

for (const name of names) {
  ss += name[0]
}

console.log(ss)
