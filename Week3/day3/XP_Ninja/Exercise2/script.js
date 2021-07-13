// loader 2
const dots = document.querySelector('.loader-2 span')
let numDots = 0
setInterval(() => {
    dots.innerText = '.'.repeat(numDots++)
    if (numDots > 3) numDots = 0
}, 300)

// loader 3
const letters = document.querySelectorAll('.loader-3 span')
const steps = [[0], [1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [5]]
let activeStep = 0
let interval = setInterval(animation3, 300)

function animation3() {
    for (let i = 0; i < letters.length; i++) {
        if (steps[activeStep].includes(i)) {
            letters[i].style.visibility = 'visible'

            if (i === 5) {
                if (activeStep === 5 || activeStep === steps.length - 1) {
                    letters[i].style.animation = `fade-out 0.${activeStep}s forwards`
                    clearInterval(interval)

                    const delayFactor = activeStep === 5 ? 100 : 200

                    setTimeout(() => {
                        letters[i].style.animation = 'none'
                    }, delayFactor * activeStep)

                    setTimeout(() => {
                        interval = setInterval(animation3, 300)
                    }, activeStep * 100)
                }
            }
            continue
        }
        letters[i].style.visibility = 'hidden'
    }
    activeStep = activeStep === steps.length - 1 ? 0 : ++activeStep
}
