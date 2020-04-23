import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Chessboard from "../components/Chessboard";

import { StyleSheet, Text, View } from "react-native";

import BOARDLAYOUT from "../data/boardLayout";
import { pieceMove } from "../store/actions/pieceMove";
import { useSelector } from "react-redux";
import _ from "lodash";
const MainBoardScreen = () => {
  const [moveStart, setMoveStart] = useState({});
  const [moveEnd, setMoveEnd] = useState({});

  const startingPosition = useSelector(state => state.board.position);

  const newBoardLayout = BOARDLAYOUT.map(item => {
    return {
      ...item,
      piece: startingPosition.filter(square => square.id == item.id)[0].piece
    };
  });

  //  console.log(startingPosition.filter(square => square.id == 'A1')[0]);

  const dispatch = useDispatch();

  const handleSquarePress = id => {
    console.log("START");
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

const styles = StyleSheet.create({});
