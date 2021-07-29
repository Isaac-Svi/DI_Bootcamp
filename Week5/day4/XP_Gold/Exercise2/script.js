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

let concurrentStart = async function () {
    console.log('==CONCURRENT START with await==')
    const slow = resolveAfter2Seconds()
    const fast = resolveAfter1Second()
    console.log(await slow)
    console.log(await fast)
}

setTimeout(concurrentStart, 4000)

// (waits for 4 seconds)
// ==CONCURRENT START with await==
// starting slow promise
// starting fast promise
// slow promise is done
// slow
// fast promise is done
// fast

/**
 * Actual answer:
 *(waits for 4 seconds)
 * ==CONCURRENT START with await==
 * starting slow promise
 * starting fast promise
 * fast promise is done
 * slow promise is done
 * slow
 * fast
 */

// The reason why you have "fast promise is done" before "slow promise is done" is we aren't using the "await" keyword when we call the functions that return those promises. Therefore, the promises are run, and they don't wait for each other to finish. Therefore, parts of the promise that aren't passed through a resolve or reject will end up running when the timeouts are over.  The "await" keyword is like "then" where we are given the resolved or rejected value as an argument to the callback function we pass in the then.  Therefore, even though fast promise is finished before slow promise, we only access the resolved value of fast promise AFTER we access the resolved value of slow promise.  This is why you have "slow" before "fast" in lines 48/49.
