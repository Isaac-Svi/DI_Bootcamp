const handleSubmit1 = (e) => {
    e.preventDefault()
    const { username: u, password: p } = e.target

    fetch(`/login-fetch?username=${u.value}&password=${p.value}`)
        .then((res) => res.json())
        .then((data) => (root.innerText = JSON.stringify(data)))
        .catch((err) => console.log(err.message))
}

const handleSubmit2 = (e) => {
    e.preventDefault()

    fetch('/login-fetch', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            username: e.target.username.value,
            password: e.target.password.value,
        }),
    })
        .then((res) => res.json())
        .then((data) => (root.innerText = JSON.stringify(data)))
        .catch((err) => console.log(err.message))
}
