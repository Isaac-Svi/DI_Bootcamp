const urls = [
    'https://swapi.dev/api/people/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4',
]

// Part 1
Promise.all(urls.map((x) => fetch(x).then((res) => res.json())))
    .then((x) => x.forEach((c, i) => console.log(i + 1, c)))
    .catch((err) => console.log(err))

// Part 2
const badUrls = [
    'https://swapi.dev/api/pesle/1',
    'https://swapi.dev/api/people/2',
    'https://swapi.dev/api/people/3',
    'https://swapi.dev/api/people/4',
]

Promise.all(badUrls.map((x) => fetch(x).then((x) => x.json())))
    .then((x) => x.forEach((c, i) => console.log(i + 1, c)))
    .catch((err) => console.log('fix it!!', err))
