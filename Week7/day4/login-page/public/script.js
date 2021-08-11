const registerForm = document.forms.register
const loginForm = document.forms.login
const output = document.querySelector('pre.output')

loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const { username, password } = e.target

    try {
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        })

        const user = await res.json()

        output.innerText = user.message
            ? user.message
            : `OK Hello your username is ${user.username}`

        e.target.reset()
    } catch (err) {
        console.log(err.message)
    }
})

registerForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const { fname, lname, email, username, password } = e.target

    try {
        const res = await fetch('/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                fname: fname.value,
                lname: lname.value,
                email: email.value,
                username: username.value,
                password: password.value,
            }),
        })

        const user = await res.json()

        output.innerText = JSON.stringify(user, null, 2)

        e.target.reset()
    } catch (err) {
        console.log(err.message)
    }
})
