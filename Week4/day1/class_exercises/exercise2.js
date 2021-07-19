function checkAge(age) {
    if (age < 18) {
        const message = "Sorry, you're too young."
    } else {
        const message = "Yay! You're old enough!"
    }

    return message
}

console.log(checkAge(21))

// output will be undefined, because const can't be accessed outside if block.
