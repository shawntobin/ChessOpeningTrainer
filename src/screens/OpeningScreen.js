import React, { useState, useMemo } from "react";
import { useDispatch } from "react-redux";
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
  const dispatch = useDispatch();

  const handleChangeText = text => {
    const newData = OPENING_LINES.filter(
      line => line.name.toLowerCase().indexOf(text.toLowerCase()) !== -1
    );

    setFilteredData(newData);
  };

  const handleChooseOpening = id => {
    dispatch(selectOpening(id-1));
    dispatch(resetPieces());
    props.setModalVisible();
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

      <View style={styles.line} />

      <ScrollView
        horizontal={true}
        style={{ marginBottom: 220 }}
      >
        {filteredData.length === 0 && (
          <Text style={styles.noOpenings}>No openings found</Text>
        )}

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
    marginTop: 30
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
  }
});

export default OpeningScreen;
