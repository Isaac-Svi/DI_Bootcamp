// 3: BONUS - 1
class Task {
    static currentId = 0
    static listTasks = []
    static taskSplice(start, count = Task.listTasks.length) {
        for (let i = start; i < start + count; i++) {
            Task.listTasks[i].$el.remove()
        }
        Task.listTasks.splice(start, count)
    }

    constructor(text, done = false) {
        Task.listTasks.push(this)
        this.task_id = Task.currentId++

        this.text = text
        this.done = done

        this.setupEl()
    }

    setupEl() {
        this.$el = document.createElement('div')
        this.$el.setAttribute('data-task-id', this.task_id)

        const deleteBtn = document.createElement('button')
        deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

        const checkBox = document.createElement('input')
        checkBox.type = 'checkbox'

        const span = document.createElement('span')
        span.innerText = this.text

        this.$el.append(deleteBtn)
        this.$el.append(checkBox)
        this.$el.append(span)

        checkBox.addEventListener('click', this.doneTask.bind(this))
        deleteBtn.addEventListener('click', this.deleteTask.bind(this))
    }

    // 3.4
    doneTask() {
        this.done = true
        this.$el.children[2].classList.toggle('crossed-out')
    }

    // 4: BONUS - 2
    deleteTask() {
        const index = Task.listTasks.findIndex(({ $el }) => {
            return Number($el.dataset.taskId) === this.task_id
        })

        Task.taskSplice(index, 1)
    }
}

// 1, 3.1 - Initializing automatically pushes them into Task.listTasks
new Task('wash dishes')
new Task('code')
new Task('feed pets')
new Task('work out')

// 2:
const addTaskForm = document.getElementById('add-task')
const tasks = document.querySelector('.listTasks')

for (const { $el } of Task.listTasks) {
    tasks.append($el)
}

const addTask = (e) => {
    e.preventDefault()

    const { value } = e.target.children[0]

    if (!value) return

    const newTask = new Task(value)

    tasks.append(newTask.$el)
    e.target.reset()
}

addTaskForm.addEventListener('submit', addTask)

// clear button
const clearBtn = document.querySelector('.clear')
clearBtn.addEventListener('click', () => Task.taskSplice(0))
