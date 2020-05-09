import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ActivityIndicator,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { resetPieces } from "../store/actions/pieces";
import { selectOpening, selectVolume } from "../store/actions/opening";
import BubbleContainer from "../components/BubbleContainer";
import SliderContainer from "../components/SliderContainer";
import OpeningContainer from "../components/OpeningContainer";
import PopupModal from "../components/PopupModal";

import { addOpening } from "../store/actions/playlist";

const OpeningScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const OPENING_LINES = useSelector(state => state.opening.openingBook);
  const openingBookName = useSelector(state => state.opening.openingBookName);
  const currentOpeningBook = useSelector(
    state => state.opening.openingBookName
  );
  const savedOpenings = useSelector(state => state.playlist.playlist);
  const [filteredData, setFilteredData] = useState(OPENING_LINES);
  const [filteredMoves, setFilteredMoves] = useState(10);
  const dispatch = useDispatch();

  const handleSliderChange = moves => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);

    setFilteredMoves(moves);
  };

  const handleChangeText = text => {
    setInputText(text);
  };

  const handleFilterData = () => {
    setIsLoading(true);
    const newData = OPENING_LINES.filter(line => {
      return (
        line.numMoves >= filteredMoves &&
        (line.shortName.toLowerCase().indexOf(inputText.toLowerCase()) !== -1 ||
          line.name.toLowerCase().indexOf(inputText.toLowerCase()) !== -1)
      );
    });
    setFilteredData(newData);
  };

  const handleChooseOpening = id => {
    dispatch(selectOpening(id.volId));
    dispatch(resetPieces());
    props.navigation.navigate("Chessboard");
  };

  const handleChangeVolume = id => {
    if (currentOpeningBook === id) return;
    dispatch(selectVolume(id));
    setIsLoading(true);
  };

  const handleAddToPlaylist = id => {
    dispatch(addOpening(id));
    setModalVisible(true);
    setTimeout(() => {
      setModalVisible(false);
    }, 1000);
  };

  useEffect(() => {
    handleFilterData();
    setIsLoading(false);
  }, [filteredMoves, inputText]);

  useEffect(() => {
    setFilteredData(OPENING_LINES);
    handleFilterData();
    setIsLoading(false);
  }, [OPENING_LINES]);

  const handleSliderLoad = () => {
    setIsLoading(true);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <PopupModal
          isVisible={modalVisible}
          handleToggleVisible={() => setModalVisible(state => !state)}
          modalText="Added to favorites"
        />

        <View style={styles.buttonContainer}></View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Opening Database</Text>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              props.navigation.navigate("Chessboard");
            }}
          >
            <Ionicons name="ios-close-circle-outline" size={35} />
          </TouchableOpacity>
        </View>

        <BubbleContainer
          id={openingBookName}
          handlePress={id => handleChangeVolume(id)}
        />

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search the selected category"
            style={styles.inputTextStyle}
            onChangeText={text => handleChangeText(text)}
            value={inputText}
          />
        </View>

        <SliderContainer
          handleSliderChange={handleSliderChange}
          filteredMoves={filteredMoves}
          loading={() => handleSliderLoad()}
        />

        <View style={styles.line} />
        <ActivityIndicator
          size="large"
          style={styles.loading}
          animating={isLoading}
        />
        <OpeningContainer
          handleChooseOpening={handleChooseOpening}
          filteredData={filteredData}
          buttonPush={handleAddToPlaylist}
          showRemoveButtons={false}
          savedOpeningData={savedOpenings}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20,
    backgroundColor: "#fafafa",
    flex: 1
  },
  header: {
    fontSize: 28,
    marginBottom: 25,
    fontWeight: "bold",
    flex: 1
  },
  line: {
    borderWidth: 0.5,
    marginTop: 10
  },
  inputContainer: {
    height: 45,
    borderWidth: 0.5,
    borderRadius: 25,
    justifyContent: "center",
    paddingLeft: 20,
    backgroundColor: "white",
    marginTop: 20
  },
  inputTextStyle: {
    fontSize: 16
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginHorizontal: 10
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%"
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: 10
  }
});

export default OpeningScreen;
