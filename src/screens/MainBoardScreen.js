import React, { useState, useMemo } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView
} from "react-native";

import { useSelector, useDispatch } from "react-redux";
import { Audio } from "expo-av";
import _ from "lodash";
import { Ionicons } from "@expo/vector-icons";
import { resetPieces } from "../store/actions/pieces";
import { addOpening, deleteOpening } from "../store/actions/playlist";
import ChessLogic from "../components/ChessLogic";
import PopupModal from "../components/PopupModal";

import HeaderContainer from "../components/HeaderContainer";

const MainBoardScreen = props => {
  const [favoritesModalVisible, setFavoritesModalVisible] = useState(false);
  const [blackOrWhite, setBlackOrWhite] = useState("w");
  const [lineFinishModalVisible, setLineFinishModalVisible] = useState(false);
  const lineId = useSelector(state => state.opening.selectedOpening);
  const moveNumber = useSelector(state => state.board.moveNumber);

  const favoriteOpenings = useSelector(state => state.playlist.playlist);
  const lineData = useSelector(state => state.opening.openingBook).filter(
    line => line.volId === lineId
  )[0];
  const dispatch = useDispatch();
  const isFavOpening = favoriteOpenings.filter(
    item => item.id === lineData.id
  )[0];
  const currentLineMoves = lineData.moves;
  const currentLineMovesArray = currentLineMoves.split(" ");

  const sound = useMemo(() => new Audio.Sound());

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

      <HeaderContainer
        lineId={lineId}
        isFavOpening={isFavOpening}
        lineData={lineData}
        onPress={() => props.navigation.navigate("Favorite Openings")}
        onStarPress={handleSetFavorite}
      />

      <View style={styles.boardContainer}>
        <ChessLogic
          handleModalVisible={handleLineFinish}
          pieceColor={blackOrWhite}
          sound={sound}
        />
      </View>

      <ScrollView style={{ paddingBottom: 20 }}>
        <View style={styles.moveContainer}>
          {currentLineMovesArray.map((move, index) => {
            if (moveNumber - 1 === index) {
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

      <PopupModal
        animationType="slide"
        isVisible={favoritesModalVisible}
        modalText="Added to favorites"
      />

      <PopupModal
        animationType="fade"
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
    fontWeight: "bold",
    fontSize: 14
  },
  moveText: {
    height: 20,
    fontSize: 12
  },
  reverse: {
    justifyContent: "flex-start",
    flex: 1
  }
});

export default MainBoardScreen;
