import React, { useState, useEffect, useRef } from "react";
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

let expectedMoveStart;
let expectedMoveEnd;

const ChessLogic = props => {
  const userColor = props.pieceColor;
  const openingBook = useSelector(state => state.opening.openingBook);
  const openingLine = useSelector(state => state.opening.selectedOpening);
  const notationLogic = notationData(openingBook, openingLine);
  const [moveStart, setMoveStart] = useState(true);
  const [userMoveComplete, setUserMoveComplete] = useState(false);
  const [allowUserMove, setAllowUserMove] = useState(true);
  const currentPosition = useSelector(state => state.board.position);
  const selectedPiece = useSelector(state => state.board.selectedPiece);
  const moveNumber = useSelector(state => state.board.moveNumber);
  const notation = useSelector(state => state.settings.notationOverlay);
  const dispatch = useDispatch();

  const sound = props.sound;
  const moveSound = "moveSound";
  const captureSound = "captureSound";
  const wrongMoveSound = "wrongMoveSound";

  const currentBoardLayout = BOARDLAYOUT.map(item => ({
    ...item,
    piece: currentPosition.filter(square => square.id == item.id)[0].piece
  }));

  const isCastleUser = (startingSquare, endingSquare) =>
    (startingSquare === "E1" && endingSquare === "G1") ||
    (startingSquare === "E1" && endingSquare === "C1") ||
    (startingSquare === "E8" && endingSquare === "G8") ||
    (startingSquare === "E8" && endingSquare === "C8");

  const lineFinished = () => {
    props.handleModalVisible();

    dispatch(resetPieces());

    setUserMoveComplete(false);
    setAllowUserMove(true);
  };

  useEffect(() => {
    expectedMoveEnd = null;
    expectedMoveStart = null;
    userColor == "b" &&
      moveNumber === 0 &&
      setTimeout(() => {
        computerPieceMove(notationLogic[0]);
      }, 500);
  }, [moveNumber, userColor]);

  useEffect(() => {
    dispatch(resetPieces());

    //(userColor == "b" && moveNumber===0) && computerPieceMove(notationLogic[0])
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

    didCapture ? playSound(sound, captureSound) : playSound(sound, moveSound);
    dispatch(selectPiece(id.start));
    dispatch(pieceMove(id.end));

    const isKingMove =
      currentPosition
        .filter(square => square.id === id.start)[0]
        .piece.substring(1, 2) === "k";

    const isCastleComputer =
      (id.start === "E1" && id.end === "G1") ||
      (id.start === "E1" && id.end === "C1") ||
      (id.start === "E8" && id.end === "G8") ||
      (id.start === "E8" && id.end === "C8");

    if (isKingMove && isCastleComputer) {
      dispatch(didCastle(castleLogic(id.start, id.end)));
    }

    setUserMoveComplete(false);

    setTimeout(() => {
      if (_.isUndefined(notationLogic[moveNumber + 1])) {
        lineFinished();
      }
    }, 1000);
  };

  const handleMove = squarePressed => {
    expectedMoveStart = null;
    expectedMoveEnd = null;
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
        expectedMoveStart = notationLogic[moveNumber].start;
        expectedMoveEnd = notationLogic[moveNumber].end;

        dispatch(selectPiece(null));
        playSound(sound, wrongMoveSound);

        return;
      }
      expectedMoveStart = null;
      expectedMoveEnd = null;

      setMoveStart(true);

      const didCapture =
        currentPosition.filter(square => square.id === endingSquare)[0].piece
          .length === 2;

      const isKingMove =
        currentPosition
          .filter(square => square.id === selectedPiece)[0]
          .piece.substring(1, 2) === "k";

      didCapture ? playSound(sound, captureSound) : playSound(sound, moveSound);

      dispatch(pieceMove(squarePressed));
      if (isKingMove && isCastleUser(startingSquare, endingSquare)) {
        dispatch(didCastle(castleLogic(startingSquare, endingSquare)));
      }

      setTimeout(() => {
        if (!_.isUndefined(notationLogic[moveNumber + 1])) {
          setUserMoveComplete(true);
        } else {
          setAllowUserMove(false);
          setTimeout(() => {
            if (_.isUndefined(notationLogic[moveNumber + 1])) {
              lineFinished();
            }
          }, 1000);
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
        expectedMoveStart={expectedMoveStart}
        expectedMoveEnd={expectedMoveEnd}
        notation={notation}
      />
    </View>
  );
};

export default ChessLogic;
