;(async () => {
    const output = document.querySelector('.output')
    try {
        const res = await fetch('/items')
        const data = await res.json()

        for (const { name, amount } of data) {
            const html = `<h3>${name} : ${amount}</h3>`
            output.insertAdjacentHTML('beforeend', html)
        }
    } catch (err) {
        output.innerHTML = err.message
    }
})()
