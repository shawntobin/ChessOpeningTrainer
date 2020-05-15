import { combineReducers } from "redux";
import opening from "./opening";
import boardLayout from "./boardLayout";
import playlist from "./playlist";
import settings from "./settings";
import categories from "./categories";

export default combineReducers({
  board: boardLayout,
  opening,
  playlist,
  settings,
  categories
});
