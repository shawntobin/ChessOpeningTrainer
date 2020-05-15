import { SELECT_OPENING } from "../actions/opening";
import { SELECT_VOLUME } from "../actions/opening";
import VOLUME_A from "../../data/openings/volumes/VolumeA";
import VOLUME_B from "../../data/openings/volumes/VolumeB";
import VOLUME_C from "../../data/openings/volumes/VolumeC";
import VOLUME_D from "../../data/openings/volumes/VolumeD";
import VOLUME_E from "../../data/openings/volumes/VolumeE";

const initialState = {
  openingBookName: "VOLUME_B",
  selectedOpening: 5,
  movesFilter: 15,
  openingBook: VOLUME_B
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_VOLUME: {
      switch (action.id) {
        case "VOLUME_A":
          return {
            ...state,
            openingBook: VOLUME_A,
            openingBookName: action.id,
            selectedOpening: 1
          };
        case "VOLUME_B":
          return {
            ...state,
            openingBook: VOLUME_B,
            openingBookName: action.id,
            selectedOpening: 1
          };
        case "VOLUME_C":
          return {
            ...state,
            openingBook: VOLUME_C,
            openingBookName: action.id,
            selectedOpening: 1
          };
        case "VOLUME_D":
          return {
            ...state,
            openingBook: VOLUME_D,
            openingBookName: action.id,
            selectedOpening: 1
          };
        case "VOLUME_E":
          return {
            ...state,
            openingBook: VOLUME_E,
            openingBookName: action.id,
            selectedOpening: 1
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
