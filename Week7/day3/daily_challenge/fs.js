const fs = require('fs')

// 3
const calculateEndPosition = () => {
    const steps = fs.readFileSync('./right-left.txt').toString().split('')
    let finalPosition = 0

    console.log(steps)

    for (const step of steps) {
        finalPosition += step === '>' ? 1 : -1
    }

    console.log('Total Steps:', finalPosition)
}

calculateEndPosition()

// 4
const findFirstMinus = () => {
    const steps = fs.readFileSync('./right-left.txt').toString().split('')
    let position = 0
    let numSteps = 0

    console.log(steps)

    for (const step of steps) {
        numSteps++
        position += step === '>' ? 1 : -1
        if (position === -1) break
    }

    console.log('Total Steps:', position)
    console.log(`First time in left side is in: ${numSteps} steps`)
}

findFirstMinus()
