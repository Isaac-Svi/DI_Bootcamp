const search_word = (str, word) => {
    const regex = new RegExp(word, 'ig')
    const numTimes = str.match(regex).length

    return `'${word}' was found ${numTimes} times.`
}

console.log(search_word('The quick brown fox', 'fox'))
// "'fox' was found 1 times."
