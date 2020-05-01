import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

const OpeningContainer = props => {
  const handlePress = id => {};

  return (
    <View style={{ marginBottom: 220 }}>
      {props.filteredData.length === 0 && (
        <Text style={styles.noOpenings}>No openings found</Text>
      )}

      <View style={{ paddingBottom: 40 }}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={props.filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity
              key={item.id}
              activeOpacity={0.6}
              onPress={() => props.handleChooseOpening(item)}
            >
              <View style={styles.textContainer}>
                <View style={styles.name}>
                  <Text style={{ ...styles.item, fontWeight: "bold" }}>
                    {" "}
                    {item.shortName}{" "}
                  </Text>
                  <Text style={styles.itemDesc} numberOfLines={1}>
                    {item.name.substring(item.name.indexOf(":") + 1, 99)}
                  </Text>
                </View>
                <TouchableOpacity onPress={() => props.addToPlaylist(item)}>
                  <Ionicons name="md-add-circle-outline" size={35} />
                </TouchableOpacity>
              </View>
              <View style={styles.line} />
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id.toString()}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 14
  },
  itemDesc: {
    fontSize: 12,
    width: "90%"
  },
  name: {
    marginVertical: 10,
    height: 35,
    justifyContent: "center",
    flex: 1,
    width: "100%"
  },
  noOpenings: {
    fontSize: 18,
    marginTop: 10,
    fontStyle: "italic"
  },
  line: {
    borderBottomWidth: 0.5,
    borderColor: "#d6d6d6"
  },
  textContainer: {
    flexDirection: "row",
    alignItems: "center"
  }
});

export default OpeningContainer;
