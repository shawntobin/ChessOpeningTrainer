import React, { useState } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";

import { resetPieces } from "../store/actions/pieces";

import ChessLogic from "../components/ChessLogic";
import OPENING_LINES from "../data/openings/openingData";
import OpeningScreen from "./OpeningScreen";
import PopupModal from "./PopupModal";

const MainBoardScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lineFinishModalVisible, setLineFinishModalVisible] = useState(false);
  const lineId = useSelector(state => state.opening.selectedOpening);
  const moveNumber = useSelector(state => state.board.moveNumber);
  const dispatch = useDispatch();

  /*
  const handleLineFinish = () => {
    setLineFinishModalVisible(state => !state);
    dispatch(resetPieces());
  };
*/
  const lineData = OPENING_LINES.filter(line => line.id === lineId)[0];
  const currentLineName = lineData.name;
  const currentLineMoves = lineData.moves;
  const currentLineMovesArray = currentLineMoves.split(" ");

  const activeMove = currentLineMoves.split(" ")[moveNumber];

  return (
    <View style={styles.container}>
      <View style={styles.contentBar}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={2} style={styles.lineText}>
            {currentLineName}
          </Text>
        </View>
        <View style={styles.settings}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              dispatch(resetPieces());
            }}
          >
            <Ionicons name="ios-refresh" size={35} />
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            setModalVisible(true);
          }}
        >
          <Ionicons name="md-list" size={35} />
        </TouchableOpacity>
      </View>

      <View style={styles.boardContainer}>
        <ChessLogic />
      </View>
      
        <View style={styles.moveContainer}>
          {currentLineMovesArray.map(move => {
            if (move == activeMove) {
              return (
                <Text style={{ ...styles.moveText, ...styles.activeMove }}>
                  {move}  </Text>
              );
            } else {
              return <Text style={styles.moveText}>{move}  </Text>;
            }
          })}
        
      </View>

      <PopupModal isVisible={lineFinishModalVisible} />

      <Modal animationType="slide" visible={modalVisible}>
        <OpeningScreen setModalVisible={() => setModalVisible(!modalVisible)} />
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40
  },
  textStyle: {
    color: "white",
    fontWeight: "bold"
  },
  boardContainer: {
    alignItems: "center"
  },
  contentBar: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 50,
    marginHorizontal: 20
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  lineText: {
    fontSize: 14,
    width: "100%"
  },
  modalView: {
    margin: 20,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },
  titleContainer: {
    flex: 1,
    width: "90%",
    flexWrap: "wrap"
  },
  settings: {
    marginHorizontal: 30
  },
  moveContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 30,
    marginHorizontal: 20,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  activeMove: {
  //  height:36,
    fontWeight: "bold",
    fontSize: 16
  },
  moveText: {
    height: 30,
    fontSize: 12
  }
});

export default MainBoardScreen;
