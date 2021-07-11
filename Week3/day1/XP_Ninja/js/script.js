// 1
const createCalendar = (year, month) => {
    // since we're starting each week with monday,
    // here's a new array that will help us rearrange stuff
    const days = [6, 0, 1, 2, 3, 4, 5]

    // 0 gets last day of previous month.
    // We also have to remember that month is 0 based.
    // Therefore, when we say 9, for example, that refers
    // to October, not September!
    // However, for the number of days in the month, it's
    // good to use October with 0, since doing so will tell
    // us the number of days in the previous month, which is
    // September, which is exactly what we want.
    const daysInMonth = new Date(year, month, 0).getDate()
    let daysLeft = daysInMonth

    // However, when we want to get the first day, we need
    // to subtract 1 from month to make it 0 based.
    let firstDay = new Date(year, month - 1).getDay()
    firstDay = days[firstDay]

    // create table
    const table = document.createElement('table')

    // initialize reusable vars
    let content = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']

    // create and append table header
    table.append(createRow({ childTag: 'th', content }))

    // first row
    content = Array(7)
        .fill(0)
        .map((_, i) => (i < firstDay ? '.' : daysInMonth - --daysLeft))
    table.append(createRow({ content }))

    // create the middle rows
    const numRows = Math.ceil(daysInMonth / 7) - 2
    for (let i = 0; i < numRows; i++) {
        content = Array(7)
            .fill(0)
            .map((_) => daysInMonth - --daysLeft)
        table.append(createRow({ content }))
    }

    // create last row
    content = Array(7)
        .fill(0)
        .map((_) => (!daysLeft ? '.' : daysInMonth - --daysLeft))
    table.append(createRow({ content }))

    // append table to doc body
    document.body.append(table)
}

createCalendar(2012, 9)
createCalendar(2021, 7)
createCalendar(1985, 7)
