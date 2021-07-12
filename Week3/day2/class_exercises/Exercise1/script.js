// inline event and also event listener

const insertRow = () => {
    const table = document.querySelector('#sampleTable tbody'),
        rows = table.children,
        numColumns = rows[0].children.length,
        newRow = document.createElement('tr')

    for (let i = 0; i < numColumns; i++) {
        const newCell = document.createElement('td')
        newCell.innerText = `Row ${rows.length + 1} cell ${i + 1}`

        newRow.append(newCell)
    }

    table.append(newRow)
}

// 2nd way
const btn2 = document.getElementById('btn2')
btn2.addEventListener('click', insertRow)
