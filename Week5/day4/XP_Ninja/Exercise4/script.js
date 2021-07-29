let resolveAfter2Seconds = function () {
    console.log('starting slow promise')
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('slow')
            console.log('slow promise is done')
        }, 2000)
    })
}

let resolveAfter1Second = function () {
    console.log('starting fast promise')
    return new Promise((resolve) => {
        setTimeout(function () {
            resolve('fast')
            console.log('fast promise is done')
        }, 1000)
    })
}

// This function does not handle errors. See warning below!
let parallelPromise = function () {
    console.log('==PARALLEL with Promise.then==')
    resolveAfter2Seconds().then((message) => console.log(message))
    resolveAfter1Second().then((message) => console.log(message))
}

setTimeout(parallelPromise, 13000)

// output
/**
 * - wait 13 seconds -
 * ==PARALLEL with Promise.then==
 * starting slow promise
 * starting fast promise
 * - wait 1 second -
 * fast promise is done
 * fast
 * - wait 1 more second -
 * slow promise is done
 * slow
 */

// In short, .then's don't wait for each other.  The JS engine just goes straight through the code, and the .then's will call their callbacks whenever the promise they've been attached to gets resolved.  In this case, resolveAfter2Seconds gets resolved after 2 secs whereas resolveAfter1Second resolves only after 1 sec.  Therefore, we get results from resolveAfter1Second first.
