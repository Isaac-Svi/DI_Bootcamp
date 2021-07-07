const calculateFinalBill = () => {
  // 1
  const bill = Number(prompt('Enter total price on bill:'))

  // 2
  const tip = bill < 50 ? bill * 0.2 : bill >= 50 && bill <= 200 ? bill * 0.15 : bill * 0.1

  // 3
  return {
    tip: tip.toFixed(2),
    finalBill: (bill + tip).toFixed(2),
  }
}

const { tip, finalBill } = calculateFinalBill()
console.log("Tip:", tip)
console.log("Final bill:", finalBill)