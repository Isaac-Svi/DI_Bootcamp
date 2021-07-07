let amazonBasket = {
  glasses: 1,
  books: 2,
  floss: 100
}

// 1
const checkBasket = () => {
  const item = prompt('Enter an item:')

  if (item.toLowerCase().trim() in amazonBasket) {
    alert('Your item is in the basket')
    return
  }

  alert('Your item is not in the basket')
}

checkBasket()