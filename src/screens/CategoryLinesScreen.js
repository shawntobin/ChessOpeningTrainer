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
import _ from "lodash";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { resetPieces } from "../store/actions/pieces";
import { addQueue, clearQueue } from "../store/actions/queue";
import { selectOpening, selectVolume } from "../store/actions/opening";
import SliderContainer from "../components/SliderContainer";
import OpeningContainer from "../components/OpeningContainer";
import PopupModal from "../components/PopupModal";

import { addOpening } from "../store/actions/playlist";

const CategoryLinesScreen = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [inputText, setInputText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const openings = useSelector(state => state.categories.openings);
  const savedOpenings = useSelector(state => state.playlist.playlist);
  const [filteredData, setFilteredData] = useState(openings);
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
    const newData = openings.filter(line => {
      return (
        line.numMoves >= filteredMoves &&
        (line.shortName
          .replace(/\W/g, "")
          .toLowerCase()
          .indexOf(inputText.replace(/\W/g, "").toLowerCase()) !== -1 ||
          line.name
            .replace(/\W/g, "")
            .toLowerCase()
            .indexOf(inputText.replace(/\W/g, "").toLowerCase()) !== -1 ||
          line.moves.toLowerCase().indexOf(inputText.toLowerCase()) !== -1)
      );
    });
    setFilteredData(newData);
  };

  const handlePlayAll = () => {
    dispatch(clearQueue());
    const id = filteredData[0];
    dispatch(addQueue(filteredData));
    handleChooseOpening(id);
  };

  const handleChooseOpening = id => {
    if (_.isUndefined(id)) return;
    dispatch(selectVolume(`VOLUME_${id.name.substring(0, 1)}`));
    dispatch(selectOpening(id.volId));
    dispatch(resetPieces());
    props.navigation.navigate("Chessboard");
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
    setFilteredData(openings);
    handleFilterData();
    setIsLoading(false);
  }, [openings]);

  const handleSliderLoad = () => {
    setIsLoading(true);
  };
  const { title } = props.route.params;

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <PopupModal
          animationType="fade"
          isVisible={modalVisible}
          handleToggleVisible={() => setModalVisible(state => !state)}
          modalText="Added to favorites"
        />

        <View style={styles.buttonContainer}></View>
        <View style={styles.headerContainer}>
          <Text style={styles.header} numberOfLines={1}>
            {title}
          </Text>
          <TouchableOpacity
            activeOpacity={0.4}
            onPress={() => {
              props.navigation.navigate("Chessboard");
            }}
          >
            <Ionicons name="ios-close-circle-outline" size={35} />
          </TouchableOpacity>
        </View>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Search openings"
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

        <View style={styles.rowContainer}>
          <TouchableOpacity activeOpacity={0.8} onPress={() => handlePlayAll()}>
            <View style={styles.playButtonContainer}>
              <Text style={styles.playButton}>Play All</Text>
            </View>
          </TouchableOpacity>
        </View>

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
          savedOpeningData={savedOpenings}
          showRemoveButtons={false}
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
    fontSize: 20,
    marginTop: 12,
    marginBottom: 0,
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
  },
  playButton: {
    color: "white"
  },
  playButtonContainer: {
    borderWidth: 1,
    borderRadius: 15,
    width: 120,
    padding: 8,
    alignItems: "center",
    backgroundColor: Colors.darkBlue,
    marginVertical: 10
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  }
});

export default CategoryLinesScreen;
