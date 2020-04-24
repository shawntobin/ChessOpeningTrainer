//import OPENING_LINES from "../data/openings/openingData";

const openingLine = "E2E4 E7E5 G1F3 B8C6 F1B5 A7A6 B5A4 B7B5 A4B3";

//const openingLine = OPENING_LINES[0].moves;

const moves = openingLine.toUpperCase().split(" ");

const startMoves = () => {
  return moves.map(move => move.substring(0, 2));
};
const endMoves = () => {
  return moves.map(move => move.substring(2, 5));
};

const createNotation = (startMoves, endMoves) => {
  let newArr = [];
  let i;
  for (i = 0; i < startMoves.length; i++) {
    newArr.push({ start: startMoves[i], end: endMoves[i] });
  }
  return newArr;
};

const start = startMoves();
const end = endMoves();

export const notationData = () => {
  return createNotation(start, end);
};
