// Auxiliary functions
const askNumNights = () => {
  return Number(prompt("How many nights would you like to stay in the hotel?"))
}
const askDestination = () => {
  return prompt("What's your destination?")
}
const askNumDays = () => {
  return Number(prompt("For how many days would you like to rent a car?"))
}

// 1
const hotelCost = () => {
  const pricePerNight = 140
  let numNights

  // isNaN checks if it exists as well as if numNights is a number or not
  while (!numNights || isNaN(numNights)) {
    numNights = askNumNights()
  }

  return pricePerNight * numNights
}

// 2
const planeRideCost = () => {
  const destinations = {
    london: 183,
    paris: 220,
  }

  let destination
  while (!destination || !isNaN(Number(destination))) {
    destination = askDestination().trim().toLowerCase()
  }

  return destinations[destination] ?? 300
}

// 3
const rentalCarCost = () => {
  const pricePerDay = 40

  let numDays
  while (!numDays || isNaN(numDays)) {
    numDays = askNumDays()
  }

  let price = pricePerDay * numDays
  price = numDays < 10 ? price : price - price * 0.1

  return price
}

// 4
const totalVacationCost = () => {
  return (rentalCarCost() + hotelCost() + planeRideCost()).toFixed(2)
}

// 5
console.log(`The total cost of your vacation is $${totalVacationCost()}`)