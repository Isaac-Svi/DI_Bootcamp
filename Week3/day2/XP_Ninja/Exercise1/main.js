// Part 1
const calculateTip = () => {
    // 2.1
    let { value: billAmount } = document.getElementById('billamt')

    // 2.2
    let { value: serviceQuality } = document.getElementById('serviceQual')

    // 2.3
    let { value: numberOfPeople } = document.getElementById('peopleamt')

    // 2.4
    if (!serviceQuality || !billAmount) {
        alert('Please fill in missing fields')
        return
    }

    // 2.5
    if (!numberOfPeople || numberOfPeople < 1) {
        numberOfPeople = 1
        document.getElementById('each').style.display = 'none'
    }

    // 2.6, 2.7
    const total = ((billAmount * serviceQuality) / numberOfPeople).toFixed(2)

    // 2.8
    document.getElementById('totalTip').style.display = 'block'

    // 2.9
    document.getElementById('tip').innerText = total
}
