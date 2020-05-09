import { ADD_OPENING, DELETE_OPENING } from "../actions/playlist";

const initialState = {
  playlist: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_OPENING: {
      return { ...state, playlist: [...state.playlist, action.id] };
    }
    case DELETE_OPENING: {
      return {
        ...state,
        playlist: state.playlist.filter(lines => lines.id !== action.id.id)
      };
    }
    default: {
      return state;
    }
  }
};
