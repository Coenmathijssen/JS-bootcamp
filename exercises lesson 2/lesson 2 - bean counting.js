const countBs = (string) => {
  let amount = 0

  for (let letter = 0; letter < string.length; letter++) {
    if (string[letter] === 'B') {
      amount++
    }
  }
  return amount
}

const countChar = (string, character) => {
  let amount = 0

  for (let letter = 0; letter < string.length; letter++) {
    if (string[letter] === character) {
      amount++
    }
  }
  return amount
}
