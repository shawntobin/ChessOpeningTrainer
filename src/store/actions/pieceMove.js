const PIECE_MOVE = "PIECE_MOVE";

export const pieceMove = id => {
  return { type: PIECE_MOVE, id: id };
};
