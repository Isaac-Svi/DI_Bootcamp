// 1: Make a function that takes in a single parameter and returns a new promise.
// 2: using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// 3: if the input is a string, the promise resolves with that same string uppercased.
// 4: if the input is anything but a string it rejects with that same input
// 5: if the promise is resolved, use then to console.log the string twice (use repeat)
// 6: If the promise is rejected use catch to console.log the error
// 7: finally call a function that console.log ("congratulation") (edited)

// Initially wanted then, catch, finally to be part of function, but Lise wanted those to be outside.

// 1
const func = (x) =>
    new Promise((resolve, reject) => {
        // 2
        setTimeout(() => {
            // 3
            if (typeof x === 'string') {
                return resolve(x.toUpperCase())
            }
            // 4
            reject(x)
        }, 5000)
    })

func('Howdy')
    .then((res) => console.log(res.repeat(2))) // 5
    .catch((err) => console.log(err)) // 6
    .finally(() => console.log('congratulation')) // 7

func(25)
    .then((res) => console.log(res.repeat(2))) // 5
    .catch((err) => console.log(err)) // 6
    .finally(() => console.log('congratulation')) // 7

//--------------------------------------------------------------

const func2 = (x) =>
    new Promise((resolve, reject) => {
        // 2
        setTimeout(() => {
            // 3
            if (typeof x === 'string') {
                return resolve(x.toUpperCase())
            }
            // 4
            reject(x)
        }, 5000)
    })
        .then((res) => console.log(res.repeat(2))) // 5
        .catch((err) => console.log(err)) // 6
        .finally(() => console.log('congratulation')) // 7

func2('Howdy')
func2(25)
