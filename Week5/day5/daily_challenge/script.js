// element reference function
const elementsReference = () => {
    const form = document.forms[0]

    const elements = {
        form,
        from: form.elements.from,
        to: form.elements.to,
        number: form.elements.number,
        output: document.querySelector('.output'),
    }

    return () => elements
}

// api url for conversion rates
const API =
    'http://api.currencylayer.com/live?' +
    'access_key=6b543e9294a71d26a6606f5449cf71a6' +
    '&format=1'

// function to retrieve country names based on their currency codes
const fetchCountryList = async () => {
    try {
        const res = await fetch('https://openexchangerates.org/api/currencies.json')
        const data = await res.json()

        return data
    } catch (err) {
        throw err
    }
}

// function to retrieve list of conversion rates with USD as base
const fetchConversionRates = async () => {
    try {
        const res = await fetch(API)
        const rates = await res.json()

        return rates
    } catch (err) {
        throw err
    }
}

// creates a new option element with value and text
const createOption = (value, text) => {
    const el = document.createElement('option')
    el.innerText = text
    el.value = value
    return el
}

// self calling function for initial setup. populates all selects with different country codes and options
;(async () => {
    const getElements = elementsReference()
    const { from, to } = getElements()

    try {
        const currencyList = await fetchCountryList()
        const { quotes } = await fetchConversionRates()
        for (const key in quotes) {
            const countryCode = key.replace('USD', '')

            from.append(
                createOption(quotes[key], `${countryCode} - ${currencyList[countryCode]}`)
            )
            to.append(
                createOption(quotes[key], `${countryCode} - ${currencyList[countryCode]}`)
            )
        }
    } catch (err) {
        console.log(err.message)
    }
})()

// form submit event listener.  calculates conversion and populates output
document.forms[0].addEventListener('submit', (e) => {
    e.preventDefault()

    const { output, number, from, to } = elementsReference()()

    output.innerText =
        (number.value * (to.value / from.value)).toFixed(2) +
        ' ' +
        to.children[to.selectedIndex].innerText.match(/\w{3}/)[0]
})
