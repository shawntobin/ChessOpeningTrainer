import React from "react";
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
import { resetPieces } from "../store/actions/pieces";

const PlaylistScreen = props => {
  const playlistData = useSelector(state => state.playlist.playlist);

  const dispatch = useDispatch();

  const handleChooseOpening = id => {
    dispatch(selectOpening(id.volId));
    dispatch(resetPieces());
    props.navigation.navigate("Main");
  };

  return (
    <View style={styles.container}>
      <OpeningContainer
        handleChooseOpening={handleChooseOpening}
        filteredData={playlistData}
      />

      <TouchableOpacity
        activeOpacity={0.4}
        onPress={() => {
          props.navigation.navigate("Menu");
          //setModalVisible(true);
        }}
      >
        <Ionicons name="md-list" size={35} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 150
  }
});
export default PlaylistScreen;
