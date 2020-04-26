export const PIECE_MOVE = "PIECE_MOVE";
export const SELECT_PIECE = "SELECT_PIECE";
export const RESET_PIECES = "RESET_PIECES";
export const DID_CASTLE = "DID_CASTLE";


export const didCastle = id => {
  return { type: DID_CASTLE, id: id };
};

export const pieceMove = (id) => {
  return { type: PIECE_MOVE, id: id };
};

export const selectPiece = id => {
  return { type: SELECT_PIECE, id: id };
};

export const resetPieces = () => {
  return { type: RESET_PIECES };
};