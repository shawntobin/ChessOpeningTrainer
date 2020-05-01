import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

import { resetPieces } from "../store/actions/pieces";

import ChessLogic from "../components/ChessLogic";
import OpeningScreen from "./OpeningScreen";
import PopupModal from "./PopupModal";
import playSound from "../utils/sound";

const MainBoardScreen = props => {
  const OPENING_LINES = useSelector(state => state.opening.openingBook);

  const [modalVisible, setModalVisible] = useState(false);
  const [blackOrWhite, setBlackOrWhite] = useState("w");
  const [lineFinishModalVisible, setLineFinishModalVisible] = useState(false);

  const lineId = useSelector(state => state.opening.selectedOpening);
  const moveNumber = useSelector(state => state.board.moveNumber);
  const dispatch = useDispatch();

  const handlePieceColor = () => {
    setBlackOrWhite(state => {
      return state === "w" ? "b" : "w";
    });
    dispatch(resetPieces());
  };

  const handleLineFinish = () => {
    setLineFinishModalVisible(state => !state);
  };

//  useEffect(() => {
 //   setTimeout(setLineFinishModalVisible(state => !state), 1000);
 // }, [handleLineFinish]);

  const lineData = OPENING_LINES.filter(line => line.volId === lineId)[0];

  const currentLineName = lineData.name;
  const currentLineMoves = lineData.moves;
  const currentLineMovesArray = currentLineMoves.split(" ");

  const activeMove = currentLineMoves.split(" ")[moveNumber - 1];

  return (
    <View style={styles.container}>
      <View style={styles.contentBar}>
        <View style={styles.settings}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={
              () => {
                handlePieceColor();
              }
              //dispatch(resetPieces());
            }
          >
            <Ionicons name="ios-refresh" size={35} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            props.navigation.navigate("Menu");
            //setModalVisible(true);
          }}
        >
          <Ionicons name="md-list" size={35} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.lineText}>
          {currentLineName}
        </Text>
      </View>

      <View style={styles.boardContainer}>
        <ChessLogic
          handleModalVisible={handleLineFinish}
          pieceColor={blackOrWhite}
        />
      </View>

      <View style={styles.moveContainer}>
        {currentLineMovesArray.map(move => {
          if (move == activeMove) {
            return (
              <Text
                key={Math.random()}
                style={{ ...styles.moveText, ...styles.activeMove }}
              >
                {move}{" "}
              </Text>
            );
          } else {
            return (
              <Text key={Math.random()} style={styles.moveText}>
                {move}{" "}
              </Text>
            );
          }
        })}
      </View>

      <PopupModal
        isVisible={lineFinishModalVisible}
        handleToggleVisible={handleLineFinish}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    backgroundColor: "#fafafa",
    height: "100%"
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
    marginBottom: 25,
    marginHorizontal: 35,
    alignItems: "center",
    justifyContent: "flex-end"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  lineText: {
    fontSize: 12,
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
    marginTop: 0,
    marginBottom: 15,
    marginHorizontal: 10,
    width: "80%"
  },
  settings: {
    marginHorizontal: 35
  },
  moveContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
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
  },
  finishText: {
    marginLeft: 10,
    color: "green",
    fontWeight: "bold"
  }
});

export default MainBoardScreen;

/*


      <Modal animationType="slide" visible={modalVisible}>
        <OpeningScreen setModalVisible={() => setModalVisible(!modalVisible)} />
      </Modal>


      */
