export const castleLogic = (startSquare, endSquare) => {
  if (startSquare === "E1" && endSquare === "G1") return { piece: "wr", start: "H1", end: "F1" };
  if (startSquare === "E1" && endSquare === "C1") return { piece: "wr", start: "A1", end: "D1" };
  if (startSquare === "E8" && endSquare === "G8") return { piece: "br", start: "H8", end: "F8" };
  if (startSquare === "E8" && endSquare === "C8") return { piece: "br", start: "A8", end: "D8" };
};
