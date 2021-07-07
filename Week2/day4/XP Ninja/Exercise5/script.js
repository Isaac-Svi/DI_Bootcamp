const list = [1,2,3,3,3,3,4,5]

// 1 - Easy way using set
const removeDups = (arr) => [... new Set(arr)]

// 2 - More formal way using simple object
const removeDups2 = (arr) => {
  const dupMap = {},
        newArr = []

  for (const num of arr) {
    if (num in dupMap) continue

    dupMap[num] = true // just random value to fill it up
    newArr.push(num)
  }

  return newArr
}

// 3 - More formal way using map
const removeDups3 = (arr) => {
  const dupMap = new Map(),
        newArr = []

  for (const num of arr) {
    if (dupMap.has(num)) continue

    dupMap.set(num, true) // just random value to fill it up
    newArr.push(num)
  }

  return newArr
}

// 4 - Implementation
console.log(removeDups(list))
console.log(removeDups2(list))
console.log(removeDups3(list))