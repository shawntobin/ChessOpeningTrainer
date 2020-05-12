export const castleLogic = (startSquare, endSquare) => {
  if (startSquare === "E1" && endSquare === "G1")
    return { piece: "wr", start: "H1", end: "F1" };
  if (startSquare === "E1" && endSquare === "C1")
    return { piece: "wr", start: "A1", end: "D1" };
  if (startSquare === "E8" && endSquare === "G8")
    return { piece: "br", start: "H8", end: "F8" };
  if (startSquare === "E8" && endSquare === "C8")
    return { piece: "br", start: "A8", end: "D8" };
};

export const isCastle = (startingSquare, endingSquare) =>
  (startingSquare === "E1" && endingSquare === "G1") ||
  (startingSquare === "E1" && endingSquare === "C1") ||
  (startingSquare === "E8" && endingSquare === "G8") ||
  (startingSquare === "E8" && endingSquare === "C8");

export const isKingMove = async (currentPosition, startingSquare) => {
  (await currentPosition
    .filter(square => square.id === startingSquare)[0]
    .piece.substring(1, 2)) === "k";
};

export const didCapture = async (currentPosition, endingSquare) => {
  (await currentPosition.filter(square => square.id === endingSquare)[0].piece
    .length) === 2;
};

export const getPiece = piece => {
  const head = piece[0];
  const tail = piece[1];

  const piecesPng = "../../assets/piecesPNG/";

  switch (head) {
    case "w":
      switch (tail) {
        case "p":
          return require(`${piecesPng}/wp.png`);
        case "k":
          return require(`${piecesPng}/wk.png`);
        case "q":
          return require(`${piecesPng}/wq.png`);
        case "r":
          return require(`${piecesPng}/wr.png`);
        case "b":
          return require(`${piecesPng}/wb.png`);
        case "n":
          return require(`${piecesPng}/wn.png`);
      }

    case "b":
      switch (tail) {
        case "p":
          return require(`${piecesPng}/bp.png`);
        case "k":
          return require(`${piecesPng}/bk.png`);
        case "q":
          return require(`${piecesPng}/bq.png`);
        case "r":
          return require(`${piecesPng}/br.png`);
        case "b":
          return require(`${piecesPng}/bb.png`);
        case "n":
          return require(`${piecesPng}/bn.png`);
      }
  }
};
