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
const isValidNumber = (x) => {
  return x && !isNaN(Number(x))
}
const isValidString = x => {
  return x && isNaN(Number(x))
}

const totalVacationCost = () => {
  let hotelNights, carRentDuration, destination
  let hotelPrompt = "Enter how many nights you'll be staying in the hotel",
      carPrompt = "Enter the number of days you'll be renting a car",
      destinationPrompt = "Enter your destination"

  while (true) {
    hotelNights = prompt(hotelPrompt)
    if (!isValidNumber(hotelNights)) continue
    break
  }

  while (true) {
    carRentDuration = prompt(carPrompt)
    if (!isValidNumber(carRentDuration)) continue
    break
  }

  while (true) {
    destination = prompt(destinationPrompt)
    if (!isValidString(destination)) continue
    break
  }
    
  return (rentalCarCost(carRentDuration) + hotelCost(hotelNights) + planeRideCost(destination)).toFixed(2)
}

// 5
console.log(`The total cost of your vacation is $${totalVacationCost()}`)