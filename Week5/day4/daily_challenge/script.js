const promise1 = Promise.resolve(3)
const promise2 = 42
const promise3 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'foo')
})
// expected output: Array [3, 42, "foo"]

const awaitAll = (promises) =>
    new Promise(async (resolve, reject) => {
        const results = []

        try {
            for await (const data of promises) {
                results.push(data)

                if (results.length === promises.length) {
                    resolve(results)
                }
            }
        } catch (err) {
            reject(err.message)
        }
    })

awaitAll([promise1, promise2, promise3]).then((x) => console.log(x))
