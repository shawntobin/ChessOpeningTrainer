export const notationData = (openingBook, openingId) => {
  const openingLine = openingBook[openingId].moves;
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

  return createNotation(start, end);
};
