import React from "react";
import { View, Text, StyleSheet, FlatList, ScrollView, TouchableOpacity } from "react-native";

const OpeningContainer = props => {
  return (
    <ScrollView horizontal={true} style={{ marginBottom: 220 }}>
      {props.filteredData.length === 0 && (
        <Text style={styles.noOpenings}>No openings found</Text>
      )}

      <View style={{ paddingBottom: 40 }}>
        <FlatList
          data={props.filteredData}
          renderItem={({ item }) => (
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={() => props.handleChooseOpening(item.id)}
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
  );
};

const styles = StyleSheet.create({
  item: {
    fontSize: 16
  },
  name: {
    marginVertical: 10
  },
  noOpenings: {
    fontSize: 18,
    marginTop: 10,
    fontStyle: "italic"
  }
});

export default OpeningContainer;
