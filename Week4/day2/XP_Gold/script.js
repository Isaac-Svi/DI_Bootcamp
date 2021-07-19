// 1: store reference to function in landscape
let landscape = function () {
    // 2: initialize result as empty string
    let result = ''

    // 3: initialize flat as a function that takes a single parameter 'x'. The function appends x number of '_' to the current value of result.
    let flat = function (x) {
        for (let count = 0; count < x; count++) {
            result = result + '_'
        }
    }

    // 4: initialize mountain as a function that takes a single parameter 'x'. it appends a string that looks like this: /'\, where there are x number of ' between the opening and closing slashes.
    let mountain = function (x) {
        result = result + '/'
        for (let counter = 0; counter < x; counter++) {
            result = result + "'"
        }
        result = result + '\\'
    }

    // 5: We call flat with x = 4.  This appends '____' to result.
    flat(4)

    // 6: We call mountain with x = 4.  This appends "/''''\" to result.
    mountain(4)

    // 7: Once again, appending '____' to result.
    flat(4)

    // 8: Finally we return result, which equals: "____/''''\____"
    return result
}

landscape()
