import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Button,
  ActivityIndicator
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
import _ from "lodash";

import OpeningContainer from "../components/OpeningContainer";
import { selectOpening } from "../store/actions/opening";
import { deleteOpening } from "../store/actions/playlist";
import { resetPieces } from "../store/actions/pieces";
import { selectVolume } from "../store/actions/opening";
import { addQueue, clearQueue } from "../store/actions/queue";

const PlaylistScreen = props => {
  const [isLoading, setIsLoading] = useState(false);
  const playlistData = useSelector(state => state.playlist.playlist);
  const dispatch = useDispatch();

  const handleChooseOpening = id => {
    if (_.isUndefined(id)) return;
    dispatch(clearQueue());
    dispatch(selectVolume(`VOLUME_${id.name.substring(0, 1)}`));
    dispatch(selectOpening(id.volId));
    dispatch(resetPieces());
    props.navigation.navigate("Chessboard");
    setIsLoading(false)
  };

  const handlePlayAll = () => {
    setIsLoading(true);

    setTimeout(() => {
      dispatch(clearQueue());
      const id = playlistData[0];
      dispatch(addQueue(playlistData));
      handleChooseOpening(id);
    }, 100);
  };

  const handleDelete = id => {
    dispatch(deleteOpening(id));
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

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
          <Ionicons name="ios-close-circle-outline" size={35} />
        </TouchableOpacity>
      </View>
      <View style={styles.rowContainer}>
        <Button
          title="Play All"
          onPress={() => handlePlayAll()}
          disabled={playlistData.length === 0}
        />
      </View>

      <View style={styles.line} />
      <OpeningContainer
        handleChooseOpening={id => handleChooseOpening(id)}
        filteredData={playlistData}
        showRemoveButtons
        buttonPush={id => handleDelete(id)}
        savedOpeningData={playlistData}
      />
      <ActivityIndicator
        size="large"
        style={styles.loading}
        animating={isLoading}
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
    fontWeight: "bold"
  },
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20
  },
  line: {
    borderBottomWidth: 0.5
  },
  rowContainer: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%"
  }
});
export default PlaylistScreen;
