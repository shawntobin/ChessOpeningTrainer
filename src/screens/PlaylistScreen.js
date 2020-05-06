import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView
} from "react-native";
import { useSelector, useDispatch } from "react-redux";

import { Ionicons } from "@expo/vector-icons";

import OpeningContainer from "../components/OpeningContainer";
import { selectOpening } from "../store/actions/opening";
import { deleteOpening } from "../store/actions/playlist";
import { resetPieces } from "../store/actions/pieces";
import { selectVolume } from "../store/actions/opening";

const PlaylistScreen = props => {
  const playlistData = useSelector(state => state.playlist.playlist);

  const dispatch = useDispatch();

  const handleChooseOpening = id => {
    dispatch(selectVolume(`VOLUME_${id.name.substring(0,1)}`))
    dispatch(selectOpening(id.volId));
    dispatch(resetPieces());
    props.navigation.navigate("Chessboard");
  };

  const handleDelete = id => {
    dispatch(deleteOpening(id));
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Favorite Openings</Text>

        <TouchableOpacity
          activeOpacity={0.4}
          onPress={() => {
            props.navigation.navigate("Chessboard");
          }}
        >
          <Ionicons name="md-close" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.line} />
      <OpeningContainer
        handleChooseOpening={id => handleChooseOpening(id)}
        filteredData={playlistData}
        showRemoveButtons
        buttonPush={id => handleDelete(id)}
        savedOpeningData={playlistData}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    marginHorizontal: 20,
    flex: 1
  },
  header: {
    fontSize: 26,
    flex: 1,
    marginVertical: 15,
    fontWeight: 'bold'
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20
  },
  line: {
    borderBottomWidth: 0.5
  }
});
export default PlaylistScreen;
