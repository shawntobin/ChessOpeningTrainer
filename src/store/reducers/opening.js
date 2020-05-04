import { SELECT_OPENING } from "../actions/opening";
import { SELECT_VOLUME } from "../actions/opening";
import VOLUME_A from "../../data/openings/VolumeA";
import VOLUME_B from "../../data/openings/VolumeB";
import VOLUME_C from "../../data/openings/VolumeC";
import VOLUME_D from "../../data/openings/VolumeD";
import VOLUME_E from "../../data/openings/VolumeE";

const initialState = {
  openingBookName: "VOLUME_A",
  selectedOpening: 7,
  movesFilter: 20,
  openingBook: VOLUME_A
};
// saved openings need to specify volume

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VOLUME: {
      switch (action.id) {
        case "VOLUME_A":
          return {
            ...state,
            openingBook: VOLUME_A,
            openingBookName: action.id
          };
        case "VOLUME_B":
          return {
            ...state,
            openingBook: VOLUME_B,
            openingBookName: action.id
          };
        case "VOLUME_C":
          return {
            ...state,
            openingBook: VOLUME_C,
            openingBookName: action.id
          };
        case "VOLUME_D":
          return {
            ...state,
            openingBook: VOLUME_D,
            openingBookName: action.id
          };
        case "VOLUME_E":
          return {
            ...state,
            openingBook: VOLUME_E,
            openingBookName: action.id
          };
        default:
          return VOLUME_A;
      }
    }

    case SELECT_OPENING: {
      return {
        ...state,
        selectedOpening: action.id
      };
    }
    default:
      return state;
  }
};
