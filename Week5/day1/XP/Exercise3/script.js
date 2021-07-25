let marioGame = {
    detail: 'An amazing game!',
    characters: {
        mario: {
            description: 'Small and jumpy. Likes princesses.',
            height: 10,
            weight: 3,
            speed: 12,
        },
        bowser: {
            description: 'Big and green, Hates princesses.',
            height: 16,
            weight: 6,
            speed: 4,
        },
        princessPeach: {
            description: 'Beautiful princess.',
            height: 12,
            weight: 2,
            speed: 2,
        },
    },
}

// 1
const json = JSON.stringify(marioGame)

// The nested objects' keys are surrounded by quotes, and all single quotes get changed into double quotes.

// 2
const prettyPrintedJSON = JSON.stringify(marioGame, null, 2)
console.log(prettyPrintedJSON)

// 3
// same values, but we also add \n in certain points to pretty print the object
