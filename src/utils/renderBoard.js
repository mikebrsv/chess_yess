import Square from '../components/Square'

const renderBoard = (index, squareClickHandler, pickedSquare, pickedPiece, clickedSquare) => {
  let squareColor;
  let squareFile;
  let squareRank;

  if (
    (index >= 0 && index <= 7)
    || (index >= 16 && index <= 23)
    || (index >= 32 && index <= 39)
    || (index >= 48 && index <= 55)
  ) {
    index % 2 === 0 ? squareColor = 'white' : squareColor = 'black'
  } else {
    index % 2 === 0 ? squareColor = 'black' : squareColor = 'white'
  }

  if (index >= 0 && index <= 7) { squareRank = 8 }
  if (index >= 8 && index <= 15) { squareRank = 7 }
  if (index >= 16 && index <= 23) { squareRank = 6 }
  if (index >= 24 && index <= 31) { squareRank = 5 }
  if (index >= 32 && index <= 39) { squareRank = 4 }
  if (index >= 40 && index <= 47) { squareRank = 3 }
  if (index >= 48 && index <= 55) { squareRank = 2 }
  if (index >= 56 && index <= 63) { squareRank = 1 }

  if (index % 8 === 0) { squareFile = 'a' }
  if ((index - 1) % 8 === 0) { squareFile = 'b' }
  if ((index - 2) % 8 === 0) { squareFile = 'c' }
  if ((index - 3) % 8 === 0) { squareFile = 'd' }
  if ((index - 4) % 8 === 0) { squareFile = 'e' }
  if ((index - 5) % 8 === 0) { squareFile = 'f' }
  if ((index - 6) % 8 === 0) { squareFile = 'g' }
  if ((index - 7) % 8 === 0) { squareFile = 'h' }

  return (
    <Square
      key={index}

      index={index}
      file={squareFile}
      rank={squareRank}
      color={squareColor}

      squareClickHandler={squareClickHandler}

      pickedSquare={pickedSquare}
      pickedPiece={pickedPiece}
      clickedSquare={clickedSquare}
    >
    </Square>
  )
}

export default renderBoard