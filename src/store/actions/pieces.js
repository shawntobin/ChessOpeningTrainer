export const PIECE_MOVE = "PIECE_MOVE";
export const SELECT_PIECE = "SELECT_PIECE";
export const RESET_PIECES = "RESET_PIECES";

export const pieceMove = id => {
  return { type: PIECE_MOVE, id: id };
};

export const selectPiece = id => {
  return { type: SELECT_PIECE, id: id };
};

export const resetPieces = () => {
  return { type: RESET_PIECES };
};