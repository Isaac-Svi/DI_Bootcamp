const createUser = async () => {
    const username = document.getElementById('username')
    const password = document.getElementById('password')

    try {
        const res = await fetch('/user', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                username: username.value,
                password: password.value,
            }),
        })
        const newUser = await res.json()

        user.innerText = JSON.stringify(newUser, null, 2)

        username.value = ''
        password.value = ''
    } catch (err) {
        console.log(JSON.stringify(err, null, 2))
    }
}
