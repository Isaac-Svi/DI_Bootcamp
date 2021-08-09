fetch('/1234')
    .then((res) => res.json())
    .then((data) => (document.body.innerText = JSON.stringify(data)))
    .catch((err) => console.log(err))
