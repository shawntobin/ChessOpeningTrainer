export const SELECT_OPENING = "SELECT_OPENING";
export const SELECT_VOLUME = "SELECT_VOLUME";
export const RANDOM_OPENING = "RANDOM_OPENING";

export const selectOpening = id => {
  return { type: SELECT_OPENING, id };
};

export const selectVolume = id => {
  return { type: SELECT_VOLUME, id };
};

export const randomOpening = id => {
  return { type: RANDOM_OPENING, id };
};
