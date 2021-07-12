const root = document.getElementById('root')

// 1
const shoppingList = []

// 2
const shoppingForm = document.createElement('form')
shoppingForm.addEventListener('submit', addItem)

const itemInput = document.createElement('input')

const addItemBtn = document.createElement('button')
addItemBtn.innerText = 'Add item'

const clearAllBtn = document.createElement('button')
clearAllBtn.innerText = 'Clear all'
clearAllBtn.addEventListener('click', clearAll)

shoppingForm.append(itemInput)
shoppingForm.append(addItemBtn)
root.append(shoppingForm)
root.append(clearAllBtn)

// 3
function addItem(e) {
    e.preventDefault()
    shoppingList.push(itemInput.value)
    shoppingForm.reset()

    console.log(shoppingList)
}

// 4
function clearAll() {
    shoppingList.splice(0)

    console.log(shoppingList)
}
