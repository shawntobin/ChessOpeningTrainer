import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  Modal,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useDispatch } from "react-redux";
import { resetPieces } from "../store/actions/pieces";
import { Ionicons } from "@expo/vector-icons";
import ChessLogic from "../components/ChessLogic";
import OpeningScreen from "./OpeningScreen";

const MainBoardScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const dispatch = useDispatch();
  const handleRefresh = () => {
  //  dispatch(resetPieces());
  };

  return (
    <View style={styles.container}>
      <View style={styles.contentBar}>
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
        <Modal
          animationType="slide"
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
          }}
        >
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
    alignItems: "flex-end",
    marginTop: 10,
    marginBottom: 50,
    marginHorizontal: 20
  }
});

export default MainBoardScreen;
