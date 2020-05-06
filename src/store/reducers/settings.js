import { TOGGLE_NOTATION, CHANGE_SQUARE_COLOR } from "../actions/settings";

import Colors from "../../constants/Colors";

const initialState = {
  notationOverlay: true,
  darkSquareColor: Colors.dark
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
      return state;
  }
};
