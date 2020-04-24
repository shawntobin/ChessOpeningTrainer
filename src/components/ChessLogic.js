import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import _ from "lodash";
import BOARDLAYOUT from "../data/boardLayout";
import Chessboard from "../components/Chessboard";
import { pieceMove, selectPiece, resetPieces } from "../store/actions/pieces";

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

  const currentBoardLayout = BOARDLAYOUT.map(item => {
    return {
      ...item,
      piece: currentPosition.filter(square => square.id == item.id)[0].piece
    };
  });

  useEffect(() => {
    if (userColor == "b") computerPieceMove(notationLogic[0]);
    dispatch(resetPieces());
  }, []);

  useEffect(() => {
    if (userMoveComplete) {
      if (_.isUndefined(notationLogic[moveNumber])) {
        alert("Line complete!");
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

      setMoveStart(true);      

      setTimeout(() => {
        setUserMoveComplete(true);
      }, 0);
      dispatch(pieceMove(squarePressed));
    }
  };
  return (
    <View>
      <Chessboard
        boardLayout={currentBoardLayout}
        handleSquarePress={handleMove}
        boardOrientation={userColor}
      />
    </View>
  );
};

export default ChessLogic;
