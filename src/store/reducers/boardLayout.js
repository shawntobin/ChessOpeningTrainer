import START_POSITION from "../../data/startPosition";
import {
  PIECE_MOVE,
  SELECT_PIECE,
  RESET_PIECES,
  DID_CASTLE
} from "../actions/pieces";
import Position from "../../models/position";

const initialState = {
  position: START_POSITION,
  selectedPiece: "",
  moveNumber: 0,
  destinationSquare: ""
};

export default (state = initialState, action) => {
  switch (action.type) {
    case DID_CASTLE: {
      const newPosition = new Position(action.id.end, action.id.piece);
      const oldPosition = new Position(action.id.start, "");

      return {
        ...state,
        position: state.position
          .filter(square => square.id !== action.id.end)
          .filter(square => square.id !== action.id.start)
          .concat(newPosition, oldPosition)
      };
    }
    case RESET_PIECES:
      return {
        ...state,
        position: START_POSITION,
        moveNumber: 0,
        destinationSquare: "",
        selectedPiece: ""
      };
    case SELECT_PIECE:
      return {
        ...state,
        selectedPiece: action.id,
        destinationSquare: ""
      };
    case PIECE_MOVE:
      const piece = state.position.filter(
        square => square.id === state.selectedPiece
      )[0].piece;

      const newPosition = new Position(action.id, piece);
      const oldPosition = new Position(state.selectedPiece, "");
      return {
        ...state,
        position: state.position
          .filter(square => square.id !== action.id)
          .filter(square => square.id !== state.selectedPiece)
          .concat(newPosition, oldPosition),
        moveNumber: state.moveNumber + 1,
        destinationSquare: action.id
      };

    default:
      return state

      
      
  }
};
