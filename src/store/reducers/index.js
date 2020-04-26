import { combineReducers } from "redux";
import opening from "./opening";
import boardLayout from "./boardLayout";

export default combineReducers({
  board: boardLayout,
  opening
});