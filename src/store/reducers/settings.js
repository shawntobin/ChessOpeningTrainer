import { TOGGLE_NOTATION, CHANGE_SQUARE_COLOR } from "../actions/settings";

const initialState = {
  notationOverlay: false,
  darkSquareColor: 1
};

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NOTATION: {
      return {
        ...state,
        notationOverlay: !action.id
      };
    }
    case CHANGE_SQUARE_COLOR: {
      return { ...state, darkSquareColor: action.id };
    }

    default:
      return state
  }
};
