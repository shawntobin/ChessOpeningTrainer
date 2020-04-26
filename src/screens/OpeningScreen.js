import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
import { Slider } from "react-native";
import _ from "lodash";
import { selectOpening, resetPieces } from "../store/actions/pieces";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  TextInput
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import OPENING_LINES from "../data/openings/openingData";

import BubbleContainer from "../components/BubbleContainer";

const OpeningScreen = props => {
  const [filteredData, setFilteredData] = useState(OPENING_LINES);
  const [filteredMoves, setFilteredMoves] = useState(10);
  const dispatch = useDispatch();

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

  const handleSliderChange = moves => {
    setFilteredMoves(moves);
    const newData = OPENING_LINES.filter(line => line.numMoves >= moves);
    setFilteredData(newData);
  };

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

      <BubbleContainer />

      <View style={styles.filterContainer}>
        <Text style={styles.label}># Moves: </Text>

        <Slider
          style={{ width: 200, height: 40 }}
          minimumValue={1}
          maximumValue={30}
          minimumTrackTintColor="grey"
          maximumTrackTintColor="grey"
          onSlidingComplete={handleSliderChange}
          //onValueChange={moves => setFilteredMoves(moves)}
          step={1}
          value={filteredMoves}
        />
        <Text style={styles.moves}>{filteredMoves}</Text>
      </View>
      <View style={styles.line} />

      <ScrollView horizontal={true} style={{ marginBottom: 220 }}>
        {filteredData.length === 0 && (
          <Text style={styles.noOpenings}>No openings found</Text>
        )}

        <View style={{ paddingBottom: 40 }}>
          <FlatList
            data={filteredData}
            renderItem={({ item }) => (
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={() => handleChooseOpening(item.id)}
              >
                <View style={styles.name}>
                  <Text style={styles.item}> {item.name} </Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={item => item.id.toString()}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
    paddingHorizontal: 20
  },
  item: {
    fontSize: 16
  },
  name: {
    marginVertical: 10
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
  noOpenings: {
    fontSize: 18,
    marginTop: 10,
    fontStyle: "italic"
  },
  buttonContainer: {
    alignItems: "flex-end",
    marginHorizontal: 10
  },
  filterContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  label: {
    fontWeight: "bold",
    marginRight: 10
  },
  moves: {
    //fontWeight: "bold",
    marginLeft: 20,
    fontSize: 16,
    color: "black"
  }
});

export default OpeningScreen;
