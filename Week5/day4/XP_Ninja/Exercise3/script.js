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

let parallel = async function () {
    console.log('==PARALLEL with await Promise.all==')
    // Start 2 "jobs" in parallel and wait for both of them to complete
    await Promise.all([
        (async () => console.log(await resolveAfter2Seconds()))(),
        (async () => console.log(await resolveAfter1Second()))(),
    ])
}

setTimeout(parallel, 5000)

// output
/**
 * - wait for 5 seconds -
 * ==PARALLEL with await Promise.all==
 * starting slow promise
 * starting fast promise
 * fast promise is done
 * fast
 * slow promise is done
 * slow
 */

// The reason why everything in resolveAfter1Second happened before resolveAfter2Seconds is that in the Promise.all, we didn't provide an array of promises.  Therefore, Promise.all has no say on the order of what will be output.  It's true that we started resolveAfter2Seconds first, but we provide Promise.all with self calling functions.  Therefore, all the output of the promises depends on those functions only.
