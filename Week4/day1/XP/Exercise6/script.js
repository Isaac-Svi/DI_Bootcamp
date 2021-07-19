// 1
let bankAmount = 10000 // not real number xD

// 2
let VAT = 0.17

// 3
let details = ['+200', '-100', '+146', '+167', '-2900']

// 4
const includeTaxes = () => {
    for (let i = 0; i < details.length; i++) {
        details[i] *= 1 + VAT
        details[i] = (details[i] < 0 ? '' : '+') + details[i]
    }
}

// 5 - I'm assuming the instructions meant bankAmount, not bankAccount
includeTaxes()

for (const detail of details) {
    bankAmount += Number(detail)
}

console.log(bankAmount)
