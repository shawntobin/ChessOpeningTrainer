import { SELECT_OPENING } from "../actions/opening";

initialState = {
  selectedOpening: 1,
  movesFilter: 10,
  categoryFilter: "A"
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_OPENING: {
      return {
        ...state,
        selectedOpening: action.id
      };
    }
    default:
      console.log(action.type);
      return state;
  }
};
