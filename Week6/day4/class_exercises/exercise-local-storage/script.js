// Create a shopping List
// X: Create an HTML page, add a few items and make them clickable.
// The user clicks on the item to add them to his cart.
// He can only add only 1 item per category
// The cart is an array of items, saved in the localstorage. Each item is an object containing the name of the item and the price.
// When the user is done with his shopping, he will click on the “Pay button” (which is actually an anchor) -> redirect him to another HTML page that is linked to another Javascript file.
// This HTML page displays all the items and total price and a “Submit payment” Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.

const btns = document.querySelectorAll('button')

if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]))
}

const disableButton = (e) => {
    if (
        JSON.parse(localStorage.getItem('cart')).some(
            (item) => item.name === e.target.innerText
        )
    ) {
        e.target.disabled = true
    }
}

const addItem = (e) => {
    const fruits = JSON.parse(localStorage.getItem('cart'))
    const fruitAlreadyExists = fruits.some((fruit) => fruit.name === e.target.innerText)

    if (fruitAlreadyExists) return

    const newFruit = {
        name: e.target.innerText,
        price: e.target.dataset.price,
    }
    fruits.push(newFruit)
    localStorage.setItem('cart', JSON.stringify(fruits))
    e.target.disabled = true
}

btns.forEach((btn) => btn.addEventListener('click', addItem))
btns.forEach(disableButton)
