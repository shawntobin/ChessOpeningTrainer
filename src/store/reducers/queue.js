import {
  ADD_QUEUE,
  NEXT_ITEM_IN_QUEUE,
  CLEAR_QUEUE,
  RESET_QUEUE_INDEX
} from "../actions/queue";

const initialState = {
  queueList: [],
  queueIndex: 0
};

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_QUEUE: {
      return { ...state, queueList: action.id };
    }
    case NEXT_ITEM_IN_QUEUE: {
      return { ...state, queueIndex: state.queueIndex + 1 };
    }
    case CLEAR_QUEUE: {
      return { ...state, queueList: [], queueIndex: 0 };
    }

    case RESET_QUEUE_INDEX: {
      return { ...state, queueIndex: 0 };
    }
    default: {
      return state
    }
  }
};
