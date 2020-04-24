import START_POSITION from "../../data/startPosition";
import {
  PIECE_MOVE,
  SELECT_PIECE,
  RESET_PIECES,
  SELECT_OPENING
} from "../actions/pieces";
import Position from "../../models/position";

const initialState = {
  position: START_POSITION,
  selectedPiece: "",
  moveNumber: 0,
  opening: 1072
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_OPENING: {
      return {
        ...state,
        opening: action.id
      };
    }
    case RESET_PIECES:
      return {
        ...state,
        position: START_POSITION,
        moveNumber: 0
      };
    case SELECT_PIECE:
      return {
        ...state,
        selectedPiece: action.id
      };
    case PIECE_MOVE:
      const piece = state.position.filter(
        square => square.id === state.selectedPiece
      )[0].piece;

      const castle =
        action.id === "G1" && state.selectedPiece === "E1" && piece === "wk"
          ? true
          : false;

      const newPosition = new Position(action.id, piece);
      const oldPosition = new Position(state.selectedPiece, "");

      return {
        ...state,
        position: state.position
          .filter(square => square.id !== action.id)
          .filter(square => square.id !== state.selectedPiece)
          .concat(newPosition, oldPosition),
        moveNumber: state.moveNumber + 1
      };

    default:
      return state;
  }
};
