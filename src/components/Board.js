import { useState, useEffect } from 'react'
import renderBoard from '../utils/renderBoard'

const Board = () => {
  const [newGame, setNewGame] = useState(true)

  const [pickedSquare, setPickedSquare] = useState(null)
  const [pickedPiece, setPickedPiece] = useState(null)

  const [clickedSquare, setClickedSquare] = useState(null)

  const [turnNumber, setTurnNumber] = useState(1)

  useEffect(() => {
    setClickedSquare(null)
    setPickedPiece(null)
    setPickedSquare(null)
  }, [turnNumber])

  const squareClickHandler = (index, piece) => {
    if (piece) {
      setPickedSquare(index)
      setPickedPiece(piece)
    } else {
      if (pickedPiece) {
        setClickedSquare(index)
        setTurnNumber(turnNumber + 1)
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
        {`Turn number: ${turnNumber}`}
      </div>
    </>
  )
}

export default Board