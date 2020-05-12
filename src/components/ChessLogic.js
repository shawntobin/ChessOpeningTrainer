import React, { useState, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import _ from "lodash";
import BOARDLAYOUT from "../data/boardLayout";
import Chessboard from "../components/Chessboard";
import { notationData } from "../utils/notationLogic";
import playSoundImport from "../utils/sound";
import { castleLogic, isCastle, isKingMove } from "../utils/helperFunctions";

import {
  pieceMove,
  selectPiece,
  resetPieces,
  didCastle
} from "../store/actions/pieces";

let expectedMoveStart;
let expectedMoveEnd;

const ChessLogic = props => {
  const playSound = useMemo(() => playSoundImport);

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
  }, []);

  useEffect(() => {
    if (userMoveComplete) {
      if (_.isUndefined(notationLogic[moveNumber + 1])) {
        computerPieceMove(notationLogic[moveNumber]);
        setAllowUserMove(false);
      } else {
        computerPieceMove(notationLogic[moveNumber]);
      }
    }
  }, [userMoveComplete]);

  const userPieceMove = squarePressed => {
    expectedMoveStart = null;
    expectedMoveEnd = null;
    const startingSquare = notationLogic[moveNumber].start;
    const endingSquare = notationLogic[moveNumber].end;
    const piece = currentPosition.filter(
      square => square.id === squarePressed
    )[0].piece;

    // check if blank square
    if (moveStart) {
      if (!piece) {
        return;
      }

      // check if piece is user's, and that it's the user's turn
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

      // check if the move follows the selected opening sequence
      if (selectedPiece !== startingSquare || squarePressed !== endingSquare) {
        setMoveStart(true);
        expectedMoveStart = notationLogic[moveNumber].start;
        expectedMoveEnd = notationLogic[moveNumber].end;

        dispatch(selectPiece(null));
        playSound(sound, wrongMoveSound);

        return;
      }

      // all checks now complete so move is valid

      setMoveStart(true);

      const didCapture =
        currentPosition.filter(square => square.id === endingSquare)[0].piece
          .length === 2;

      didCapture ? playSound(sound, captureSound) : playSound(sound, moveSound);

      dispatch(pieceMove(squarePressed));

      // executed when move is castling
      if (
        isKingMove(currentPosition, selectedPiece) &&
        isCastle(startingSquare, endingSquare)
      ) {
        dispatch(didCastle(castleLogic(startingSquare, endingSquare)));
      }

      // executed when line has completed successfully
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

  const computerPieceMove = id => {
    const didCapture =
      currentPosition.filter(square => square.id === id.end)[0].piece.length ===
      2;

    didCapture ? playSound(sound, captureSound) : playSound(sound, moveSound);
    dispatch(selectPiece(id.start));
    dispatch(pieceMove(id.end));

    if (isKingMove(currentPosition, id.start) && isCastle(id.start, id.end)) {
      dispatch(didCastle(castleLogic(id.start, id.end)));
    }

    setUserMoveComplete(false);
    setTimeout(() => {
      if (_.isUndefined(notationLogic[moveNumber + 1])) {
        lineFinished();
      }
    }, 1000);
  };

  return (
    <View>
      <Chessboard
        activeSquare={selectedPiece}
        boardLayout={currentBoardLayout}
        handleSquarePress={userPieceMove}
        boardOrientation={userColor}
        expectedMoveStart={expectedMoveStart}
        expectedMoveEnd={expectedMoveEnd}
        notation={notation}
      />
    </View>
  );
};

export default ChessLogic;
