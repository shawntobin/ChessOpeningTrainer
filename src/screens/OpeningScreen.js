import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { resetPieces } from "../store/actions/pieces";
import { selectOpening, selectVolume } from "../store/actions/opening";

import BubbleContainer from "../components/BubbleContainer";
import SliderContainer from "../components/SliderContainer";
import OpeningContainer from "../components/OpeningContainer";

const OpeningScreen = props => {
  const OPENING_LINES = useSelector(state => state.opening.openingBook);
  const openingBookName = useSelector(state => state.opening.openingBookName);
  const [filteredData, setFilteredData] = useState(OPENING_LINES);
  const [filteredMoves, setFilteredMoves] = useState(10);
  const dispatch = useDispatch();

  const handleSliderChange = moves => {
    setFilteredMoves(moves);
    const newData = OPENING_LINES.filter(line => line.numMoves >= moves);
    setFilteredData(newData);
  };

  const handleChangeText = text => {
    const newData = OPENING_LINES.filter(
      line => line.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );
    //const newData = filterOnSearch.filter(line => line.numMoves <= filteredMoves)
    setFilteredData(newData);
  };

  const handleChooseOpening = id => {
    dispatch(selectOpening(id));
    dispatch(resetPieces());
    props.setModalVisible();
  };

  const handleChangeVolume = id => {
    console.log(id)
    dispatch(selectVolume(id));

    setTimeout(() => {
      handleSliderChange(20);
    }, 0);
  };

  useEffect(() => {
    handleSliderChange(10);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={styles.hideModalButton}
          activeOpacity={0.4}
          onPress={() => {
            props.setModalVisible();
          }}
        >
          <Ionicons name="md-close" size={35} />
        </TouchableOpacity>
      </View>
      <Text style={styles.header}>Opening Database</Text>

      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Search database"
          style={styles.inputTextStyle}
          onChangeText={text => handleChangeText(text)}
        />
      </View>

      <BubbleContainer
        id={openingBookName}
        handlePress={id => handleChangeVolume(id)}
      />

      <SliderContainer
        handleSliderChange={handleSliderChange}
        filteredMoves={filteredMoves}
      />

      <View style={styles.line} />

      <OpeningContainer
        handleChooseOpening={handleChooseOpening}
        filteredData={filteredData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  header: {
    fontSize: 28,
    marginBottom: 25
  },
  line: {
    borderWidth: 0.5,
    marginTop: 10
  },
  hideModalButton: {
    height: 30,
    marginTop: 5
  },
  inputContainer: {
    height: 45,
    borderWidth: 0.5,
    borderRadius: 25,
    justifyContent: "center",
    paddingLeft: 20
  },
  inputTextStyle: {
    fontSize: 16
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginHorizontal: 10
  }
});

export default OpeningScreen;
