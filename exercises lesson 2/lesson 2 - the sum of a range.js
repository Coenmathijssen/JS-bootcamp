const range = (start, end) => {
  let arrayFill = []
  for (let i = start; i <= end; i++) {
    arrayFill.push(i)
  }
  return arrayFill
}

const sum = (total, arrayNumber) => {
  return total + arrayNumber
}

range(1, 10).reduce(sum)
