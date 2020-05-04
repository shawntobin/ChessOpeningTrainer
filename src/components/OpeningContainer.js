import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Dimensions
} from "react-native";
import _ from "lodash";
import { Ionicons } from "@expo/vector-icons";

const OpeningContainer = props => {

  const handleShowButton = id => {
    if (_.isUndefined(props.savedOpeningData)) return;

    const matchItem = props.savedOpeningData.filter(
      item => item.id === id.id
    )[0];

    if (!matchItem) {
      return (
        <TouchableOpacity onPress={() => props.buttonPush(id)}>
          <Ionicons name="md-add-circle-outline" size={30} />
        </TouchableOpacity>
      );
    } else {
      return (
        <TouchableOpacity onPress={() => props.buttonPush(id)}>
          <Ionicons name="md-remove-circle-outline" size={30} />
        </TouchableOpacity>
      );
    }
  };

  return (
    <View style={{ marginBottom: 220 }}>
      {props.filteredData.length === 0 && (
        <Text style={styles.noOpenings}>No openings found</Text>
      )}

      <View style={{ paddingBottom: 0 }}>
        <FlatList
          style={{ height: "100%" }}
          showsVerticalScrollIndicator={false}
          data={props.filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={{}}
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
                {handleShowButton(item)}
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
