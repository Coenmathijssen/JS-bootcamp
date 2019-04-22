let white
let black
const spaces = 8
let chessboard = ""
for (let row = 0; row < spaces; row++) {
  for (let space = 0; space < spaces; space++ ) {
    if (space % 2 === 0) {
      white = "#"
      black = " "
    } else {
      white = " "
      black = "#"
  }

  if (row % 2 === 0) {
      chessboard += white
  } else {
      chessboard += black
    }
  }
  chessboard += "\n"
}

console.log(chessboard)
