const elements = () => {
    const form = document.forms[0]

    return {
        form,
        username: form.username,
        password: form.password,
        output: document.querySelector('.output'),
    }
}

const handleSubmit = async (e) => {
    e.preventDefault()

    const { output, username, password } = elements()

    try {
        const res = await fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        })

        const data = await res.json()

        if (data.error) throw new Error(data.error)

        output.innerText = `Hi ${data.username} welcome back again!`

        e.target.reset()
    } catch (err) {
        console.log(err.message)
        output.innerText = err.message
    }
}
