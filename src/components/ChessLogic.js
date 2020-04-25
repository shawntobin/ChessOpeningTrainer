import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View, Alert } from "react-native";
import _ from "lodash";
import BOARDLAYOUT from "../data/boardLayout";
import Chessboard from "../components/Chessboard";

import {
  pieceMove,
  selectPiece,
  resetPieces,
  didCastle
} from "../store/actions/pieces";

import { notationData } from "../utils/notationLogic";

const ChessLogic = () => {
  const userColor = "w";
  const openingLine = useSelector(state => state.board.opening);
  const notationLogic = notationData(openingLine);
  const [moveStart, setMoveStart] = useState(true);
  const [userMoveComplete, setUserMoveComplete] = useState(false);
  const currentPosition = useSelector(state => state.board.position);
  const selectedPiece = useSelector(state => state.board.selectedPiece);
  const moveNumber = useSelector(state => state.board.moveNumber);
  const dispatch = useDispatch();

  const castleLogic = square => {
    if (square === "G1") return { piece: "wr", start: "H1", end: "F1" };
    if (square === "C1") return { piece: "wr", start: "A1", end: "D1" };
    if (square === "G8") return { piece: "br", start: "H8", end: "F8" };
    if (square === "C8") return { piece: "br", start: "A8", end: "D8" };
  };

  const currentBoardLayout = BOARDLAYOUT.map(item => {
    return {
      ...item,
      piece: currentPosition.filter(square => square.id == item.id)[0].piece
    };
  });

  useEffect(() => {
    dispatch(resetPieces());
    if (userColor == "b") computerPieceMove(notationLogic[0]);
  }, []);

  useEffect(() => {
    if (userMoveComplete) {
      if (_.isUndefined(notationLogic[moveNumber])) {
        Alert.alert("Line complete!");
        dispatch(resetPieces());
        setUserMoveComplete(false);
      } else {
        computerPieceMove(notationLogic[moveNumber]);
      }
    }
  }, [userMoveComplete]);

  const computerPieceMove = id => {
    dispatch(selectPiece(id.start));
    dispatch(pieceMove(id.end));

    const isCastle =
      currentPosition
        .filter(square => square.id === id.start)[0]
        .piece.substring(1, 2) === "k";

    isCastle && dispatch(didCastle(castleLogic(id.end)));
    setUserMoveComplete(false);
  };

  const handleMove = squarePressed => {
    const piece = currentPosition.filter(
      square => square.id === squarePressed
    )[0].piece;

    if (moveStart) {
      if (!piece) {
        return;
      }
      dispatch(selectPiece(squarePressed));
      setMoveStart(false);
    } else {
      if (piece.substring(0, 1) === userColor) {
        setMoveStart(true);
        return;
      }

      if (_.isUndefined(notationLogic[moveNumber + 1])) {
        Alert.alert("Line complete!");
        dispatch(resetPieces());
        setUserMoveComplete(false);
        setMoveStart(true);
        return;
      }

      const startingSquare = notationLogic[moveNumber].start;
      const endingSquare = notationLogic[moveNumber].end;

      if (selectedPiece !== startingSquare || squarePressed !== endingSquare) {
        setMoveStart(true);
        console.log("not the currently selected line - try again");
        console.log("expected sequence:");
        console.log(startingSquare);
        console.log(endingSquare);
        return;
      }

      const isKing =
        currentPosition
          .filter(square => square.id === selectedPiece)[0]
          .piece.substring(1, 2) === "k";

      const isCastle =
        isKing && endingSquare === "G1" && startingSquare === "E1"
          ? true
          : false;

      setMoveStart(true);

      setTimeout(() => {
        setUserMoveComplete(true);
      }, 0);

      dispatch(pieceMove(squarePressed));
      isCastle && dispatch(didCastle(castleLogic(squarePressed)));
    }
  };
  return (
    <View>
      <Chessboard
        activeSquare={selectedPiece}
        boardLayout={currentBoardLayout}
        handleSquarePress={handleMove}
        boardOrientation={userColor}
      />
    </View>
  );
};

export default ChessLogic;
