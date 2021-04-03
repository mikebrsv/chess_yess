import { useState, useEffect } from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChessPawn,
  faChessKnight,
  faChessBishop,
  faChessRook,
  faChessQueen,
  faChessKing,
} from '@fortawesome/free-solid-svg-icons'

const Square = ({
  index,
  file,
  rank,
  color,

  squareClickHandler,

  pickedSquare,
  pickedPiece,
  clickedSquare,
}) => {
  const [currentPiece, setCurrentPiece] = useState()

  useEffect(() => {
    if (index === clickedSquare) {
      setCurrentPiece(pickedPiece)
    }

    return () => {
      if (clickedSquare && (index === pickedSquare)) setCurrentPiece(null)
    }
  }, [index, clickedSquare, pickedPiece, pickedSquare])

  useEffect(() => {
    if (index === 0 || index === 7 || index === 56 || index === 63) {
      setCurrentPiece((currentPiece) => ({ ...currentPiece, icon: faChessRook, piece: 'rook' }))
    } else if (index === 1 || index === 6 || index === 57 || index === 62) {
      setCurrentPiece((currentPiece) => ({ ...currentPiece, icon: faChessKnight, piece: 'knight' }))
    } else if (index === 2 || index === 5 || index === 58 || index === 61) {
      setCurrentPiece((currentPiece) => ({ ...currentPiece, icon: faChessBishop, piece: 'bishop' }))
    } else if (index === 3 || index === 59) {
      setCurrentPiece((currentPiece) => ({ ...currentPiece, icon: faChessQueen, piece: 'queen' }))
    } else if (index === 4 || index === 60) {
      setCurrentPiece((currentPiece) => ({ ...currentPiece, icon: faChessKing, piece: 'king' }))
    } else if ((index >= 8 && index <= 15) || (index >= 48 && index <= 55)) {
      setCurrentPiece((currentPiece) => ({ ...currentPiece, icon: faChessPawn, piece: 'pawn' }))
    }

    if (index >= 0 && index <= 15) {
      setCurrentPiece((currentPiece) => ({ ...currentPiece, color: 'black' }))
    }
    else if (index >= 48 && index <= 63) {
      setCurrentPiece((currentPiece) => ({ ...currentPiece, color: 'white' }))
    }
  }, [index])

  return (
    <div
      className={`square ${color} ${pickedSquare === index ? 'active' : ''}`}
      onClick={() => { squareClickHandler(index, currentPiece ? currentPiece : null) }}
    >
      <span className="square-debug">{`${index}/${file}${rank}`}</span>
      {currentPiece && <FontAwesomeIcon icon={currentPiece.icon} className={`piece ${currentPiece.color}`} />}
    </div>
  )
}

export default Square
