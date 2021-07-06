let building = {
  numberLevels: 4,
  numberOfAptByLevel: {
    1: 3,
    2: 4,
    3: 9,
    4: 2,
  },
  nameOfTenants: ['Sarah', 'Dan', 'David'],
  numberOfRoomsAndRent: {
    Sarah: [3, 990],
    Dan: [4, 1000],
    David: [1, 500],
  },
}

// 1 - Find number of levels in building
console.log(building.numberLevels)

// 2 - Number of apartments on levels 1 and 3
const { 1: one, 3: three } = building.numberOfAptByLevel
console.log(one + three)

// 3 - Name of 2nd tenant and number of rooms in apartment
const name2ndTenant = building.nameOfTenants[1]
const {
  [name2ndTenant]: [numRooms2ndTenant],
} = building.numberOfRoomsAndRent
console.log(name2ndTenant, numRooms2ndTenant)

// 4 - Check if sum of Sarah and David's rent is bigger than Dan's rent
const { Sarah, Dan, David } = building.numberOfRoomsAndRent
const sarahAndDavidRent = Sarah[1] + David[1]

if (sarahAndDavidRent > Dan[1]) {
  Dan[1] += 50 // increasing Dan's rent by 50
}

console.log(building)
