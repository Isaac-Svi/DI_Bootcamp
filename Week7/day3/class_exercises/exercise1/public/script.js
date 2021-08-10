const createOption = (value, text) => {
    const option = document.createElement('option')
    option.innerText = text
    option.value = value
    return option
}

fetch('/countries')
    .then((res) => res.json())
    .then((data) => {
        for (const { country_id, country } of data) {
            countries.append(createOption(country_id, country))
        }
    })
    .catch((err) => console.log(err.message))
