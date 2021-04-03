import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faChessPawn,
  faChessKnight,
  faChessBishop,
  faChessRook,
  faChessQueen,
  faChessKing,
} from '@fortawesome/free-solid-svg-icons'

const Piece = ({ piece, color }) => {
  let icon;

  switch (piece) {
    case 'rook':
      icon = faChessRook;
      break;
    case 'knight':
      icon = faChessKnight;
      break;
    case 'bishop':
      icon = faChessBishop;
      break;
    case 'queen':
      icon = faChessQueen;
      break;
    case 'king':
      icon = faChessKing;
      break;
    case 'pawn':
      icon = faChessPawn;
      break;
    default:
      break;
  }

  return (
    <FontAwesomeIcon icon={icon} className={`piece ${color}`} />
  )
}

export default Piece
