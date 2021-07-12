const regexEmailValidate = (e) => {
    e.preventDefault()

    const regex = /(\w|\.)+@(\w|\.)+\.(\w|\.)+/
    const { value } = e.target.children[0]

    const { 0: strMatch, input } = value.match(regex)

    alert(strMatch === input ? 'Valid' : 'Invalid')
}

const noRegexEmailValidate = (e) => {
    e.preventDefault()
    const { value } = e.target.children[0]

    // check for required symbols
    for (const val of ['@', '.']) {
        if (!value.includes(val)) {
            console.log('Invalid')
            return
        }
    }

    // check for too many @
    if (value.split('').filter((x) => x === '@').length > 1) {
        console.log('Invalid')
        return
    }

    // check for letter and numbers between symbols
    const chars = value.split('@')
    const validChars = '.1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for (const val of chars) {
        for (const x of val) {
            if (!validChars.includes(x)) {
                console.log('Invalid')
                return
            }
        }
    }

    console.log('Valid')
}

const form = document.querySelector('form')
form.addEventListener('submit', regexEmailValidate)
form.addEventListener('submit', noRegexEmailValidate)
