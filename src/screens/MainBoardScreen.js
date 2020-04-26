import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Modal,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { resetPieces } from "../store/actions/pieces";
import { Ionicons } from "@expo/vector-icons";
import ChessLogic from "../components/ChessLogic";
import OPENING_LINES from "../data/openings/openingData";
import OpeningScreen from "./OpeningScreen";
import PopupModal from "./PopupModal";

const MainBoardScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [lineFinishModalVisible, setLineFinishModalVisible] = useState(false);
  const lineId = useSelector(state => state.board.opening);
  const dispatch = useDispatch();
  const handleRefresh = () => {
    //  dispatch(resetPieces());
  };

  /*
  const handleLineFinish = () => {
    setLineFinishModalVisible(state => !state);
    dispatch(resetPieces());
  };
*/
  const currentLine = OPENING_LINES.filter(line => line.id === lineId)[0].name;

  return (
    <View style={styles.container}>
      <View style={styles.contentBar}>
        <View style={styles.titleContainer}>
          <Text numberOfLines={2} style={styles.lineText}>
            {currentLine}
          </Text>
        </View>
        <View style={styles.settings}>
          <Ionicons name="ios-refresh" size={35} />
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
      <ScrollView scrollEnabled={false} onScrollEndDrag={() => handleRefresh()}>
        <View style={styles.boardContainer}>
          <ChessLogic />
        </View>

        <PopupModal isVisible={lineFinishModalVisible} />

        <Modal animationType="slide" visible={modalVisible}>
          <OpeningScreen
            setModalVisible={() => setModalVisible(!modalVisible)}
          />
        </Modal>
      </ScrollView>
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
    fontSize: 16,
    width: "80%"
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
    width: "80%",
    flexWrap: "wrap"
  },
  settings: {
    marginHorizontal: 30
  }
});

export default MainBoardScreen;
