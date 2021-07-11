// 2 and 3
const allBooks = [
    new Book(
        '20,000 Leagues Under The Sea',
        'Jules Verne',
        'https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4027/9781402725999.jpg',
        false
    ),
    new Book(
        'Foundation',
        'Isaac Asimov',
        'https://upload.wikimedia.org/wikipedia/en/2/25/Foundation_gnome.jpg',
        true
    ),
]

// 4
HTMLElement.prototype.appendAll = function () {
    for (const el of arguments) {
        this.append(el)
    }
}

const fillRow = ({ row, childTag, content }) => {
    row.appendAll(
        ...content.map((t) => {
            const x = document.createElement(childTag)
            x.append(t) // append can append text or HTMLElement

            return x
        })
    )
}

// create table
const table = document.createElement('table')

// create and append table header
const tableHeader = document.createElement('tr')
fillRow({
    row: tableHeader,
    childTag: 'th',
    content: ['Details', 'Image'],
})
table.append(tableHeader)

// create and append rest of table rows
for (const book of allBooks) {
    // create and append row
    const row = document.createElement('tr')
    table.append(row)

    // set up details and image for row
    const details = `${book.title} written by ${book.author}`
    const img = new Image()
    img.style.width = '100px'
    img.src = book.image

    // fill row with details
    fillRow({
        row,
        childTag: 'td',
        content: [details, img],
    })

    if (book.alreadyRead) {
        row.children[0].style.color = 'red'
    }
}

// after table is made, append to listBooks
document.querySelector('.listBooks').append(table)
