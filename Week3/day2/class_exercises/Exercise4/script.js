const getvalue = (e) => {
    e.preventDefault()

    // way 1
    const formData = new FormData(e.target)
    const fname = formData.get('fname')
    const lname = formData.get('lname')
    console.log(fname, lname)

    // way 2
    const [fname2, lname2] = e.target.querySelectorAll('input[type="text"]')
    console.log(fname2.value, lname2.value)
}
