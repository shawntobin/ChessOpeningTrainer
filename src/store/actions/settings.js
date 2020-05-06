export const CHANGE_SQUARE_COLOR = "CHANGE_SQUARE_COLOR";
export const TOGGLE_NOTATION = "TOGGLE_NOTATION";

export const toggleNotation = id => {
  return { type: TOGGLE_NOTATION, id: id };
};

export const changeSquareColor = id => {
  return { type: CHANGE_SQUARE_COLOR, id: id };
};
