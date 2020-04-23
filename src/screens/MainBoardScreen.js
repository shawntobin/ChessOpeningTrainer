import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { View } from "react-native";
import _ from "lodash";
import BOARDLAYOUT from "../data/boardLayout";
import Chessboard from "../components/Chessboard";
import { pieceMove, selectPiece } from "../store/actions/pieceMove";

const MainBoardScreen = () => {
  const [moveStart, setMoveStart] = useState({});
  const currentPosition = useSelector(state => state.board.position);
  const dispatch = useDispatch();

  const newBoardLayout = BOARDLAYOUT.map(item => {
    return {
      ...item,
      piece: currentPosition.filter(square => square.id == item.id)[0].piece
    };
  });

  const handleSquarePress = id => {
    if (_.isEmpty(moveStart)) {
      if (id.piece === "") {
        return;
      }
      setMoveStart(id);
      dispatch(selectPiece(id));
    } else {
      setMoveStart({});
      dispatch(pieceMove(id));
    }
  };

  return (
    <View>
      <Chessboard
        boardLayout={newBoardLayout}
        handleSquarePress={handleSquarePress}
      />
    </View>
  );
};

export default MainBoardScreen;
