let menu = [
    {
        type: 'starter',
        name: 'Houmous with Pita',
    },
    {
        type: 'starter',
        name: 'Vegetable Soup with Houmous peas',
    },
    {
        type: 'dessert',
        name: 'Chocolate Cake',
    },
]

// 1
console.log(menu.some((x) => x.type === 'dessert'))

// 2
console.log(menu.every((x) => x.type === 'starter'))

// 3
if (!menu.some((x) => x.type === 'main course')) {
    menu.push({
        type: 'main course',
        name: 'Spaghetti and Meatballs',
    })
}
console.log(menu)

// ---------------------------------------------------------
let vegetarian = ['vegetable', 'houmous', 'eggs', 'vanilla', 'potatoes']

menu.forEach((item, index) => {
    const name = item.name.toLowerCase().split(' ')
    menu[index].vegetarian = name.some((x) => vegetarian.includes(x))
})

console.log(menu)
