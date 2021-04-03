import { useState, useEffect } from 'react'
import renderBoard from '../utils/renderBoard'

const Board = () => {
  const [newGame, setNewGame] = useState(true)

  const [pickedSquare, setPickedSquare] = useState(null)
  const [pickedPiece, setPickedPiece] = useState(null)

  const [clickedSquare, setClickedSquare] = useState(null)

  const [moveNumber, setMoveNumber] = useState(1)

  useEffect(() => {
    setClickedSquare(null)
    setPickedPiece(null)
    setPickedSquare(null)
  }, [moveNumber])

  const squareClickHandler = (index, piece) => {
    if (piece) {
      setPickedSquare(index)
      setPickedPiece(piece)
    } else {
      if (pickedPiece) {
        setClickedSquare(index)
        setMoveNumber(moveNumber + 1)
        newGame && setNewGame(false)
      }
    }
  }

  return (
    <>      
      <div className="board">
        {[...Array(64)].map((_, index) => renderBoard(index, squareClickHandler, pickedSquare, pickedPiece, clickedSquare, newGame))}
      </div>

      <div className="game-info">
        {`Move number: ${moveNumber}`}
      </div>
    </>
  )
}

export default Board