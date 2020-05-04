import { ADD_OPENING } from "../actions/playlist";

const initialState = {
  playlist: []
};

export default (state = initialState, action) => {

  switch (action.type) {
    case ADD_OPENING: {
      return { ...state, playlist: [...state.playlist, action.id] };
    }
    default:
      return state;
  }
};
