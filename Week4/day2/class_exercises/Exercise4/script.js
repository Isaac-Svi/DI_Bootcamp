// variable add is declared and initialized with whatever value is returned from the self invoking function on the right of the =
let add = (function () {
    // initialize counter wih value of 0
    let counter = 0

    // define function 'calculus'
    function calculus() {
        // when calculus is called the counter in line 4 gets incremented by 1. The incremented value is returned
        counter += 1
        return counter
    }

    // the self invoking function returns the calculus function, allowing the global scope to use it if need be
    return calculus
})()

// Therefore, based on the above, 'add' now stores a reference to the calculus function defined in the self invoking function.  By doing this, we can use the calculus function without getting direct access to the counter variable which lives in "add"'s scope.

add() // this returns 1
add() // returns 2
add() // returns 3

// Counter gets incremented by 1 each time add is called
console.log(add()) // should be 4 here
