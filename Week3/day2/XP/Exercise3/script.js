const form = document.getElementById('MyForm')

// 4/3 πr3
const handleSubmit = (e) => {
    e.preventDefault()

    const [{ value: radius }, volume] = e.target.querySelectorAll('input')

    volume.value = (4 / 3) * Math.PI * radius ** 3
}

form.addEventListener('submit', handleSubmit)
