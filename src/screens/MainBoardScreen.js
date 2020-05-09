import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity, ScrollView } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import { resetPieces } from "../store/actions/pieces";
import { addOpening, deleteOpening } from "../store/actions/playlist";
import ChessLogic from "../components/ChessLogic";
import PopupModal from "./PopupModal";
import FavoriteStar from "../components/FavoriteStar";
import _ from "lodash";

const MainBoardScreen = props => {
//  const OPENING_LINES = useSelector(state => state.opening.openingBook);
  const [favoritesModalVisible, setFavoritesModalVisible] = useState(false);
  const [blackOrWhite, setBlackOrWhite] = useState("w");
  const [lineFinishModalVisible, setLineFinishModalVisible] = useState(false);

  const lineId = useSelector(state => state.opening.selectedOpening);
  const moveNumber = useSelector(state => state.board.moveNumber);

  const favoriteOpenings = useSelector(state => state.playlist.playlist);

//  const lineData = OPENING_LINES.filter(line => line.volId === lineId)[0];

  const lineData = useSelector(state => state.opening.openingBook).filter(line => line.volId === lineId)[0];

  const dispatch = useDispatch();

  const isFavOpening = favoriteOpenings.filter(
    item => item.id === lineData.id
  )[0];

  const handlePieceColor = () => {
    setBlackOrWhite(state => {
      return state === "w" ? "b" : "w";
    });
    dispatch(resetPieces());
  };

  const handleSetFavorite = () => {
    if (isFavOpening) {
      dispatch(deleteOpening(lineData));
    } else {
      dispatch(addOpening(lineData));
      setFavoritesModalVisible(true);

      setTimeout(() => {
        setFavoritesModalVisible(false);
      }, 1000);
    }
  };

  const handleLineFinish = () => {
    setLineFinishModalVisible(state => !state);
    setTimeout(() => {
      setLineFinishModalVisible(state => !state);
    }, 1200);
  };

  const currentLineName = lineData.name;
  const currentLineDescription = lineData.shortName;
  const currentLineMoves = lineData.moves;
  const currentLineMovesArray = currentLineMoves.split(" ");

  const activeMove = currentLineMoves.split(" ")[moveNumber - 1];

  return (
    <View style={styles.container}>
      <View style={styles.contentBar}>
        <View style={styles.reverse}>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              handlePieceColor();
            }}
          >
            <Ionicons name="ios-refresh" size={35} />
          </TouchableOpacity>
        </View>
        <View style={styles.settings}></View>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            props.navigation.openDrawer();
          }}
        >
          <Ionicons name="ios-menu" size={40} />
        </TouchableOpacity>
      </View>

      <View style={styles.titleContainer}>
        <View style={styles.star}>
          <FavoriteStar
            id={lineId}
            selected={isFavOpening}
            handleStarPress={id => handleSetFavorite(id)}
          />
        </View>

        <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => props.navigation.navigate("Favorite Openings")}>
          <Text
            numberOfLines={1}
            style={{ ...styles.lineText, fontWeight: "bold" }}
          >
            {currentLineName}
          </Text>
          <Text numberOfLines={1} style={styles.lineText}>
            {currentLineDescription}
          </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.boardContainer}>
        <ChessLogic
          handleModalVisible={handleLineFinish}
          pieceColor={blackOrWhite}
        />
      </View>
<ScrollView
style={{paddingBottom: 20}}
>
      <View style={styles.moveContainer}>
        {currentLineMovesArray.map((move, index) => {
          //if (move === activeMove) {
            if (moveNumber-1 === index) {
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
      </ScrollView>
      <Modal
        animationType="slide"
        transparent={true}
        visible={favoritesModalVisible}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Added to favorites</Text>
          </View>
        </View>
      </Modal>

      <PopupModal
        isVisible={lineFinishModalVisible}
        handleToggleVisible={handleLineFinish}
        modalText="Line complete!"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 22,
    backgroundColor: "#fafafa",
    height: "100%",
    flex: 1
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
    marginTop: 26,
    marginBottom: 30,
    marginHorizontal: 20,
    alignItems: "center"
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  lineText: {
    fontSize: 12,
    width: 300
  },
  modalView: {
    margin: 20,
    width: "60%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,

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
    //  marginBottom: 15,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16
  },
  titleContainer: {
    marginTop: 0,
    marginBottom: 15,
    marginHorizontal: 10,
    width: "80%",
    flexDirection: "row"
  },
  settings: {
    marginHorizontal: 35
  },
  moveContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 20,
    marginHorizontal: 15,
    flexDirection: "row",
    flexWrap: "wrap",
    height: 36
  },
  activeMove: {
    //    height:36,
    fontWeight: "bold",
    fontSize: 14
  },
  moveText: {
    height: 20,
    fontSize: 12
  },
  finishText: {
    marginLeft: 10,
    color: "green",
    fontWeight: "bold"
  },
  reverse: {
    justifyContent: "flex-start",
    flex: 1
  },
  headerContainer: {
    flexDirection: "column",
    justifyContent: "center",
    marginRight: 25
  },
  star: {
    marginRight: 6,
    justifyContent: "center"
  }
});

export default MainBoardScreen;
