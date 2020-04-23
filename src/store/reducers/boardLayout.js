import START_POSITION from "../../data/startPosition";

import { PIECE_MOVE, SELECT_PIECE } from "../actions/pieceMove";
import Position from "../../models/position";

const initialState = {
  position: START_POSITION,
  selectedPiece: {}
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_PIECE:
      return { ...state, selectedPiece: action.id };
    case PIECE_MOVE:
      const newPosition = new Position(action.id.id, state.selectedPiece.piece);
      const oldPosition = new Position(state.selectedPiece.id, "");
      return {
        ...state,
        position: state.position
          .filter(square => square.id !== action.id.id)
          .filter(square => square.id !== state.selectedPiece.id)
          .concat(newPosition, oldPosition)          
      };
    default:
      return state;
  }
};
