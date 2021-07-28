function resolveAfter2Seconds() {
    return new Promise((resolve) => {
        setTimeout(() => {
            // Promise only resolves after 2 seconds
            resolve('resolved')
        }, 2000)
    })
}

async function asyncCall() {
    console.log('calling')
    // waits for 2 seconds before setting result to the resolved value
    let result = await resolveAfter2Seconds()
    console.log(result)
}

asyncCall()

// The outcome will be:
/**
 * calling
 * - waits for 2 seconds -
 * resolved
 */
