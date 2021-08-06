const openTask = (e) => {
    const el = e.target
    if (el.tagName === 'INPUT') return

    const description = el.querySelector('.description')
    if (!description) return

    if (el.dataset.open) {
        el.style.height = el.offsetHeight - description.offsetHeight - 10 + 'px'
        el.dataset.open = ''
        return
    }

    el.style.height = el.offsetHeight + description.offsetHeight + 10 + 'px'
    el.dataset.open = true
}

const displayTimeLeft = (timeLeft) => {
    return `Time left (d:h:m:s:ms) - ${timeLeft}`
}

const toggleTaskState = (e) => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const todoId = e.target.id.replace('task-', '')

    const todoIndex = todos.findIndex((x) => x.id === todoId)
    todos[todoIndex].done = e.target.checked

    localStorage.setItem('todos', JSON.stringify(todos))

    const { start, end, done } = todos[todoIndex]
    const $todo = document.getElementById(todoId)
    const timeLeft = getTimeLeft(start, end)

    if (!done && !timeLeft) {
        $todo.classList.add('overdue')
        $todo.querySelector('.details').children[1].innerText = displayTimeLeft(timeLeft)
    } else if (timeLeft && done) {
        $todo.classList.remove('todo')
        $todo.querySelector('.details').children[1].innerText = 'complete'
    } else {
        if (timeLeft && !done) $todo.classList.add('todo')
        $todo.classList.remove('overdue')
        $todo.querySelector('.details').children[1].innerText = done
            ? 'complete'
            : displayTimeLeft(timeLeft)
    }
}

const getTimeLeft = (start, end) => {
    let dateOffset = +new Date(start) - Date.now()
    dateOffset = dateOffset < 0 ? 0 : dateOffset

    let timeLeft = partitionMs(+new Date(end) - (Date.now() - dateOffset))
    return timeLeft ? timeLeft : 0
}

const deleteTask = (e) => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const task = e.target.parentNode.parentNode

    const todoIndex = todos.findIndex((x) => x.id === task.id)
    todos.splice(todoIndex, 1)
    localStorage.setItem('todos', JSON.stringify(todos))

    task.remove()
}

const toggleEditModal = (modal) => {
    modal.classList.toggle('active')
    document.querySelector('.overlay').classList.toggle('active')
}

const editTask = (e) => {
    const modal = document.querySelector('.modal')
    toggleEditModal(modal)

    const task = e.target.parentNode.parentNode
    modal.dataset.todoId = task.id
    const todos = JSON.parse(localStorage.getItem('todos'))
    const todoIndex = todos.findIndex((x) => x.id === task.id)
    const todo = todos[todoIndex]

    const [name, description, startDate, endDate] = [
        ...modal.querySelectorAll('input,textarea'),
    ]

    name.value = todo.name
    startDate.value = todo.start
    endDate.value = todo.end
    description.value = todo.description

    toggleMenu(task.querySelector('.action-menu'))
}

const saveEdits = (e) => {
    e.preventDefault()

    const [name, description, startDate, endDate] =
        e.target.querySelectorAll('input, textarea')

    const todos = JSON.parse(localStorage.getItem('todos'))
    const todoId = e.target.dataset.todoId

    const todoIndex = todos.findIndex((x) => x.id === todoId)
    todos[todoIndex].name = name.value
    todos[todoIndex].description = description.value
    todos[todoIndex].start = startDate.value
    todos[todoIndex].end = endDate.value

    localStorage.setItem('todos', JSON.stringify(todos))

    location.reload()
}

const toggleMenu = (menu) => {
    if (menu) menu.classList.toggle('active')
    else {
        const activeMenu = document.querySelector('.action-menu.active')
        if (activeMenu) activeMenu.classList.remove('active')
    }
}

const closeModal = (modal) => toggleEditModal(modal)

const setupTodos = () => {
    const todos = JSON.parse(localStorage.getItem('todos'))
    const tasks = document.querySelector('.tasks')

    for (const { id: todoId, name, description, start, end, done } of todos) {
        const timeLeft = getTimeLeft(start, end)

        const id = `task-${todoId}`
        const doneAttrs = { type: 'checkbox', id, onchange: 'toggleTaskState(event)' }
        if (done) doneAttrs.checked = ''

        tasks.append(
            createElement({
                attributes: {
                    class: `task ${done ? '' : timeLeft && !done ? 'todo' : 'overdue'}`,
                    id: todoId,
                    'data-open': '',
                    onclick: 'openTask(event)',
                },
            }).appendMany(
                createElement({
                    tag: 'h2',
                    html: `<span class="editable">${name}</span>`,
                }),
                createElement({ attributes: { class: 'details' } }).appendMany(
                    createElement({
                        text: `Start - ${new Date(start).toLocaleDateString()}`,
                    }),
                    createElement({
                        text: done ? 'complete' : displayTimeLeft(timeLeft),
                    })
                ),
                createElement({
                    text: `\nDescription - \n ${description}`,
                    attributes: { class: 'description' },
                }),
                createElement({
                    attributes: { class: 'checkbox-group', title: 'toggle done' },
                }).appendMany(
                    createElement({ tag: 'input', attributes: doneAttrs }),
                    createElement({ tag: 'label', attributes: { for: id } })
                ),
                createElement({
                    tag: 'button',
                    html: '<i class="fas fa-ellipsis-h"></i>',
                    attributes: {
                        title: 'Open Menu',
                        class: 'popup-btn',
                        style: 'box-shadow: none',
                        onclick:
                            'toggleMenu(this.parentNode.querySelector(".action-menu"))',
                    },
                }),
                createElement({ attributes: { class: 'action-menu' } }).appendMany(
                    createElement({
                        tag: 'button',
                        html: '<span>Delete</span> <i class="fas fa-times"></i>',
                        attributes: {
                            title: 'remove todo',
                            class: 'close-btn',
                            style: 'box-shadow: none',
                            onclick: 'deleteTask(event)',
                        },
                    }),
                    createElement({
                        tag: 'button',
                        html: '<span>Edit</span> <i class="fas fa-edit"></i>',
                        attributes: {
                            title: 'edit todo',
                            class: 'edit-btn',
                            style: 'box-shadow: none',
                            onclick: 'editTask(event)',
                        },
                    })
                )
            )
        )
    }
}

setupTodos()

window.addEventListener('click', (e) => {
    const actionMenu = document.querySelector('.action-menu.active')

    if (actionMenu && !e.target.classList.contains('popup-btn')) toggleMenu()
})
