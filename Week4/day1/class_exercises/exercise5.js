const possibleCalcs = (a, b) => {
    const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b,
    }

    for (const operator in operators) {
        console.log(operator + ':', operators[operator](a, b))
    }
}

possibleCalcs(3, 4)
