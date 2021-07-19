const gameInfo = [
    {
        username: 'john',
        team: 'red',
        score: 5,
        items: ['ball', 'book', 'pen'],
    },
    {
        username: 'becky',
        team: 'blue',
        score: 10,
        items: ['tape', 'backpack', 'pen'],
    },
    {
        username: 'susy',
        team: 'red',
        score: 55,
        items: ['ball', 'eraser', 'pen'],
    },
    {
        username: 'tyson',
        team: 'green',
        score: 1,
        items: ['book', 'pen'],
    },
]

// 1
const usernames = []
gameInfo.forEach((x) => {
    usernames.push(x.username + '!')
})
console.log(usernames)

// 2
const userWithBigScores = []
gameInfo.forEach((x) => {
    x.score > 5 ? userWithBigScores.push(x.username) : ''
})
console.log(userWithBigScores)

// 3
console.log(gameInfo.reduce((a, b) => a + b.score, 0))
