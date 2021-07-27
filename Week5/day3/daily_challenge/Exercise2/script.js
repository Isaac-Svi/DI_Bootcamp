let morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

const toJS = (json) =>
    new Promise((resolve, reject) => {
        if (!json) reject(new Error('Empty json object'))

        resolve(JSON.parse(json))
    })

const toMorse = (morseJS) =>
    new Promise((resolve, reject) => {
        const input = prompt('Enter some string')
        const translation = []

        for (let char of input) {
            char = char.toLowerCase()
            if (!(char in morseJS)) reject(new Error('Not morse'))
            translation.push(morseJS[char])
        }

        resolve(translation)
    })

const joinWords = (translation) =>
    new Promise((resolve, reject) => {
        if (!Array.isArray(translation)) {
            reject('Invalid input')
        }
        resolve(translation.join('\n'))
    })

toJS(morse)
    .then((x) => toMorse(x))
    .then((x) => joinWords(x))
    .then((x) => console.log(x))
    .catch((err) => console.log(err.message))
