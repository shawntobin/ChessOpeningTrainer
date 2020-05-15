import { SELECT_CATEGORY } from "../actions/categories";

const initialState = {
  openings: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_CATEGORY: {
      return { ...state, openings: action.id };
    }

    default: {
      return state;
    }
  }
};
