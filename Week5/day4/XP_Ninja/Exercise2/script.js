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

//The Promise.all() method returns a single Promise that fulfills when all of the promises passed as an iterable have been fulfilled.

let concurrentPromise = function () {
    console.log('==CONCURRENT START with Promise.all==')
    return Promise.all([resolveAfter2Seconds(), resolveAfter1Second()]).then(
        (messages) => {
            console.log(messages[0])
            console.log(messages[1])
        }
    )
}

setTimeout(concurrentPromise, 1000)

// output:
/**
 * ==CONCURRENT START with Promise.all==
 * starting slow promise
 * starting fast promise
 * fast promise is done
 * slow promise is done
 * slow
 * fast
 */

/**
 * The reason for this is that Promise.all calls each of the promises in the array in sequence in a loop.  Therefore, slow is called first. However, the timeout in resolveAfter1Second resolves before resolveAfter2Seconds.  Therefore, you have "fast promise is done" before "slow promise is done".  However, Promise.all keeps he results of all resolved promises in the sequence in which they were given in the array.  Therefore, even though resolveAfter1Second finishes first, since resolveAfter2Seconds was first in the provided array, Promise.all makes sure that the result of that promise is added first.  Therefore, "slow" comes before "fast".
 */
