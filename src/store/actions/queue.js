export const ADD_QUEUE = "ADD_QUEUE";
export const CLEAR_QUEUE = "CLEAR_QUEUE";
export const NEXT_ITEM_IN_QUEUE = "NEXT_ITEM_IN_QUEUE";
export const RESET_QUEUE_INDEX = "RESET_QUEUE_INDEX";

export const addQueue = id => {
  return async dispatch => {

    await clearQueue();

    dispatch({ type: ADD_QUEUE, id });
  };
};
export const nextItemInQueue = () => {
  return { type: NEXT_ITEM_IN_QUEUE };
};

export const clearQueue = () => {
  return async dispatch => {
    dispatch({ type: CLEAR_QUEUE });
  };
};

export const resetQueueIndex = () => {
  return { type: RESET_QUEUE_INDEX };
};
