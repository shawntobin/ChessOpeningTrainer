export const ADD_OPENING = "ADD_OPENING";
export const DELETE_OPENING = "DELETE_OPENING";

export const addOpening = id => {
  return { type: ADD_OPENING, id };
};

export const deleteOpening = id => {
  return { type: DELETE_OPENING, id };
};
