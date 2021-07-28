// Exercise Game - The word game
// Create 4 fuctions, that return 4 promises
// 1. The 1st function : Receive 2 famous persons name from the user - if the names are not string -> reject
// 2. The 2nd function : Receive a noun - if the noun is less than 3 letters - reject
// 3. The 3rd function : Receive a city - if the city doesn't start with an uppercase letter -> reject
// 4. The 4rh function : Receive a verb (finishing with ing) - if it doesn't end with "ing" -> reject
// 5. The last function, is an async function : receive all the promise, and return a sentence with it
// Ex: "Beyonce is playing football with Barack Obama in Paris"

// 1
const getNames = (...names) =>
    new Promise((resolve, reject) => {
        const valid = names.every((name) => {
            return isNaN(name) && typeof name === 'string'
        })

        if (!valid) reject(new Error('Invalid input. Not string.'))

        resolve(names)
    })

// 2
const getNoun = (noun) =>
    new Promise((resolve, reject) => {
        if (noun.length < 3) reject(new Error('Noun must be at least 3 characters'))

        resolve(noun)
    })

// 3
const getCity = (city) =>
    new Promise((resolve, reject) => {
        if (city[0].toUpperCase() !== city[0])
            reject(new Error('City name must be capitalized'))

        resolve(city)
    })

// 4
const getVerb = (verb) =>
    new Promise((resolve, reject) => {
        if (!verb.endsWith('ing')) reject(new Error('Verb must end with "ing"'))

        resolve(verb)
    })

// 5
const printSentence = async () => {
    try {
        const [name1, name2] = await getNames('Bob', 'Bill')
        const noun = await getNoun('food')
        const city = await getCity('London')
        const verb = await getVerb('eating')

        return `${name1} is ${verb} ${noun} with ${name2} in ${city}.`
    } catch (err) {
        return err.message
    }
}

// Second version using Promise.all instead of async await.
const printSentence2 = async () => {
    try {
        const [[name1, name2], noun, city, verb] = await Promise.all([
            getNames('Beyonce', 'Barack Obama'),
            getNoun('food'),
            getCity('London'),
            getVerb('eating'),
        ])

        return `${name1} is ${verb} ${noun} with ${name2} in ${city}.`
    } catch (err) {
        return err.message
    }
}

// Using for/await that Andrei used in video
// Small problem with sentence builder.  For this use case, it would be better
// to not use this syntax, but this is just showing how for/await works sort of
// like Promise.all.
const sentenceBuilder = (placeholder, sentence) => {
    let newSentence = sentence
    return {
        buildSentence(newWord) {
            console.log(newSentence)
            newSentence = newSentence.replace(placeholder, newWord)
        },
        getSetence() {
            return newSentence
        },
    }
}

const printSentence3 = async () => {
    const { buildSentence, getSetence } = sentenceBuilder('#', `# is # # with # in #`)

    try {
        const promiseArray = [
            getNames('Beyonce', 'Barack Obama'),
            getNoun('food'),
            getCity('London'),
            getVerb('eating'),
        ]

        for await (const data of promiseArray) {
            console.log(data)
            buildSentence(data)
        }

        return getSetence()
    } catch (err) {
        return err.message
    }
}

let counter = 0
printSentence().then((x) => console.log(new Date(), x, ++counter))
printSentence2().then((x) => console.log(new Date(), x, ++counter))
printSentence3().then((x) => console.log(x))

// Since Promise.all doesn't force each promise to wait for the other,
// printSentence2 works faster than printSentence.  This is because in
// Promise.all, each of the promises are called simultaneously.
