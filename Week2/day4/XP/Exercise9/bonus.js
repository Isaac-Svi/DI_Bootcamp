// 1
const hotelCost = (numNights) => {
  const pricePerNight = 140

  return pricePerNight * numNights
}

// 2
const planeRideCost = (destination) => {
  const destinations = {
    london: 183,
    paris: 220,
  }

  destination = destination.trim().toLowerCase()

  return destinations[destination] ?? 300
}

// 3
const rentalCarCost = (numDays) => {
  const pricePerDay = 40

  let price = pricePerDay * numDays
  price = numDays < 10 ? price : price - price * 0.1

  return price
}

// 4
const totalVacationCost = () => {
  let hotelNights, carRent, destination, input
  const promptText = "Enter how many nights you'll be staying in the hotel, the number of days you'll be renting a car, and your destination, separated by commas (,): "
  
  main: while (true) {
    input = prompt(promptText)
    const [a, b, c] = input.split(',')

    const parameterMissing = !a || !b || !c,
          parameterWrongType = isNaN(Number(a)) || isNaN(Number(b)) || !isNaN(Number(c))

    if (parameterMissing || parameterWrongType) {
      alert("Some data provided was incorrect")
      continue main
    }

    hotelNights = a
    carRent = b
    destination = c
    break
  }

  return (rentalCarCost(carRent) + hotelCost(hotelNights) + planeRideCost(destination)).toFixed(2)
}

// 5
console.log(`The total cost of your vacation is $${totalVacationCost()}`)