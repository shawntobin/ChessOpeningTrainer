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

  const renderItem = ({ item }) => {
    return (
      <TouchableOpacity
        key={item.id}
        activeOpacity={0.6}
        onPress={() => props.handleChooseOpening(item)}
      >
        <View style={styles.textContainer}>
          <View style={styles.name}>
            <Text style={{ ...styles.item, fontWeight: "bold" }}>
              {item.name.trim()}
            </Text>
            <Text style={styles.itemDesc} numberOfLines={1}>
              {item.shortName}
            </Text>
            <Text style={{...styles.itemDesc}} numberOfLines={1}>
              {item.moves}
            </Text>
          </View>

          {handleShowButton(item)}
        </View>
        <View style={styles.line} />
      </TouchableOpacity>
    );
  };

  const handleShowButton = id => {
    if (_.isUndefined(props.savedOpeningData)) return;

    const matchItem = props.savedOpeningData.filter(
      item => item.id === id.id
    )[0];

    if (!matchItem) {
      return (
        <View style={{ flex: 0 }}>
          <TouchableOpacity onPress={() => props.buttonPush(id)}>
            <Ionicons name="ios-add-circle-outline" size={30} color='#718aa3'/>
          </TouchableOpacity>
        </View>
      );
    } else {
      if (props.showRemoveButtons) {
        return (
          <TouchableOpacity onPress={() => props.buttonPush(id)}>
            <Ionicons name="ios-remove-circle-outline" size={30} color='#718aa3' />
          </TouchableOpacity>
        );
      }
    }
  };

  return (
    <View style={{ marginBottom: 0, flex: 1 }}>
      {props.filteredData.length === 0 && (
        <Text style={styles.noOpenings}>No openings found</Text>
      )}

      <View style={{ paddingBottom: 0, flex: 0 }}>
        <FlatList
          style={{ paddingBottom: 150 }}
          showsVerticalScrollIndicator={false}
          data={props.filteredData}
          extraData={props.filteredData}
          renderItem={renderItem}
          onEndReachedThreshold={.7}
          keyExtractor={item => item.id.toString()}
          removeClippedSubviews
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
    width: "90%",
    color: '#474747'
  },
  name: {
    marginVertical: 10,
    height: 35,
    justifyContent: "center",
    flex: 1
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
