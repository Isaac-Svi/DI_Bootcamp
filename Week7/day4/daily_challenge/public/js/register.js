const elements = () => {
    const form = document.forms[0]

    return {
        form,
        fname: form.fname,
        lname: form.lname,
        email: form.email,
        username: form.username,
        password: form.password,
        output: document.querySelector('.output'),
    }
}

const handleSubmit = async (e) => {
    e.preventDefault()

    const { output, fname, lname, email, username, password } = elements()

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

        const data = await res.json()

        if (data.error) throw new Error(data.error)

        output.innerText = 'Hello, your account is now created!'

        e.target.reset()
    } catch (err) {
        console.log(err.message)
        output.innerText = err.message
    }
}
