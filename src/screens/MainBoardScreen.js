import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { StyleSheet, View } from "react-native";
import _ from "lodash";
import BOARDLAYOUT from "../data/boardLayout";
import Chessboard from "../components/Chessboard";
import { pieceMove } from "../store/actions/pieceMove";

const MainBoardScreen = () => {
  const [moveStart, setMoveStart] = useState({});
  const [moveEnd, setMoveEnd] = useState({});
  const startingPosition = useSelector(state => state.board.position);
  const dispatch = useDispatch();

  const newBoardLayout = BOARDLAYOUT.map(item => {
    return {
      ...item,
      piece: startingPosition.filter(square => square.id == item.id)[0].piece
    };
  });

  const handleSquarePress = id => {
    console.log(id);

    if (_.isEmpty(moveStart)) {
      setMoveStart(id);
    } else {
      const moveEndId = {
        ...id,
        piece: moveStart.piece
      };
      setMoveEnd(moveEndId);
      setMoveStart({});
      return dispatch(pieceMove());
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
