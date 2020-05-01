import { combineReducers } from "redux";
import opening from "./opening";
import boardLayout from "./boardLayout";
import playlist from "./playlist";

export default combineReducers({
  board: boardLayout,
  opening: opening,
  playlist
});
