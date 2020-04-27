import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import _ from "lodash";
import BOARDLAYOUT from "../data/boardLayout";
import Chessboard from "../components/Chessboard";
import { notationData } from "../utils/notationLogic";
import playSound from "../utils/sound";
import { castleLogic } from "../utils/helperFunctions";

import {
  pieceMove,
  selectPiece,
  resetPieces,
  didCastle
} from "../store/actions/pieces";

const ChessLogic = props => {
  const userColor = "w";
  const openingBook = useSelector(state => state.opening.openingBook);
  const openingLine = useSelector(state => state.opening.selectedOpening);
  const notationLogic = notationData(openingBook, openingLine);
  const [moveStart, setMoveStart] = useState(true);
  const [userMoveComplete, setUserMoveComplete] = useState(false);
  const [allowUserMove, setAllowUserMove] = useState(true);
  const currentPosition = useSelector(state => state.board.position);
  const selectedPiece = useSelector(state => state.board.selectedPiece);
  const moveNumber = useSelector(state => state.board.moveNumber);
  const dispatch = useDispatch();

  const moveSound = "moveSound";
  const captureSound = "captureSound";

  const currentBoardLayout = BOARDLAYOUT.map(item => {
    return {
      ...item,
      piece: currentPosition.filter(square => square.id == item.id)[0].piece
    };
  });

  const lineFinished = () => {
    //setLineFinishModalVisible(state => !state);
    dispatch(resetPieces());
    setUserMoveComplete(false);
    setAllowUserMove(true);
  };

  useEffect(() => {
    dispatch(resetPieces());
    if (userColor == "b") computerPieceMove(notationLogic[0]);
  }, []);

  useEffect(() => {
    if (userMoveComplete) {
      if (_.isUndefined(notationLogic[moveNumber + 1])) {
        //   Alert.alert("Line complete!");
        //dispatch(resetPieces());
        //setUserMoveComplete(false);
        computerPieceMove(notationLogic[moveNumber]);
        setAllowUserMove(false);
        //setTimeout(lineFinished(), 1000)
      } else {
        computerPieceMove(notationLogic[moveNumber]);
      }
    }
  }, [userMoveComplete]);

  const computerPieceMove = id => {
    const didCapture =
      currentPosition.filter(square => square.id === id.end)[0].piece.length ===
      2;

    didCapture ? playSound(captureSound) : playSound(moveSound);
    dispatch(selectPiece(id.start));
    dispatch(pieceMove(id.end));

    const isCastle =
      currentPosition
        .filter(square => square.id === id.start)[0]
        .piece.substring(1, 2) === "k";

    isCastle && dispatch(didCastle(castleLogic(id.end)));
    setUserMoveComplete(false);

    setTimeout(() => {
      if (_.isUndefined(notationLogic[moveNumber + 1])) {
        lineFinished();
      }
    }, 1500);
  };

  const handleMove = squarePressed => {
    const piece = currentPosition.filter(
      square => square.id === squarePressed
    )[0].piece;
    if (moveStart) {
      if (!piece) {
        return;
      }

      if (piece.substring(0, 1) !== userColor) return;

      if (!allowUserMove) return;

      dispatch(selectPiece(squarePressed));
      setMoveStart(false);
    } else {
      if (piece.substring(0, 1) === userColor) {
        dispatch(selectPiece(squarePressed));
        setMoveStart(false);
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

      const didCapture =
        currentPosition.filter(square => square.id === endingSquare)[0].piece
          .length === 2;

      const isKing =
        currentPosition
          .filter(square => square.id === selectedPiece)[0]
          .piece.substring(1, 2) === "k";

      const isCastle =
        isKing && endingSquare === "G1" && startingSquare === "E1"
          ? true
          : false;

      didCapture ? playSound(captureSound) : playSound(moveSound);

      dispatch(pieceMove(squarePressed));
      isCastle && dispatch(didCastle(castleLogic(squarePressed)));

      setTimeout(() => {
        if (!_.isUndefined(notationLogic[moveNumber + 1])) {
          setUserMoveComplete(true);
        } else {
          setAllowUserMove(false);
          setTimeout(() => {
            if (_.isUndefined(notationLogic[moveNumber + 1])) {
              lineFinished();
            }
          }, 1500);
        }
      }, 500);
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
