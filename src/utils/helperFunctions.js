export const castleLogic = square => {
  if (square === "G1") return { piece: "wr", start: "H1", end: "F1" };
  if (square === "C1") return { piece: "wr", start: "A1", end: "D1" };
  if (square === "G8") return { piece: "br", start: "H8", end: "F8" };
  if (square === "C8") return { piece: "br", start: "A8", end: "D8" };
};
