if (!localStorage.getItem('todos')) {
    localStorage.setItem('todos', JSON.stringify([]))
}

const elements = () => {
    const form = document.forms[0]

    return {
        form,
        name: form.name,
        description: form.description,
        start: form.start,
        end: form.end,
        notification: document.querySelector('.notification'),
    }
}

const verifyInputs = (...inputs) =>
    inputs.every((input) => input !== null && input !== undefined)

const handleSubmit = (e) => {
    e.preventDefault()

    const { notification, name, description, start, end } = elements()

    if (!verifyInputs(name, start, end)) return

    const todos = JSON.parse(localStorage.getItem('todos'))

    todos.push({
        id: getRandomId(),
        name: name.value,
        description: description.value,
        start: start.value,
        end: end.value,
        done: false,
    })

    localStorage.setItem('todos', JSON.stringify(todos))

    e.target.reset()

    notification.classList.add('active')

    setTimeout(() => notification.classList.remove('active'), 3000)
}

elements().form.addEventListener('submit', handleSubmit)
