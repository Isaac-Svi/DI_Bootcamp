function add() {
    let counter = 0 // 2) initialize counter
    // 3) define plus function
    function plus() {
        counter += 1
        console.log(counter)
    }
    plus() // 4) call plus function
    // 5) counter = 1
    // 6) log 1
}

add() // 1) add gets put in call stack

// --------------------------------------------------
function add1() {
    let counter = 0
    function plus() {
        counter += 1
        console.log(counter)
    }
    plus()
    plus()
}
add1()

// 1
// 2

function add2() {
    let counter = 0
    function plus() {
        counter += 1
        console.log(counter)
    }
    plus()
}
add2()
add2()

// 1
// 1
