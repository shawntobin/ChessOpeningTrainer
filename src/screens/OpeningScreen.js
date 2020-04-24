import React from "react";
import {
  View,
  Text,
  Button,
  Picker,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native";

import OPENING_LINES from "../data/openings/openingData";

const OpeningScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Opening Database</Text>
      <ScrollView horizontal={true}>
        <FlatList
          data={OPENING_LINES}
          renderItem={({ item }) => (
            <TouchableOpacity>
              <View style={styles.name}>
                <Text style={styles.item}> {item.name} </Text>
              </View>
            </TouchableOpacity>
          )}
          keyExtractor={item => item.id}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    paddingHorizontal: 20
  },
  item: {
    fontSize: 18
  },
  name: {
    marginVertical: 10
  },
  header: {
    fontSize: 28,
    alignItems: "center",
    marginBottom: 30
  }
});

export default OpeningScreen;

/*
     <Picker style={styles.picker} onValueChange={() => {}}>
        {OPENING_LINES.map(opening => {
          return <Picker.Item label={opening.name} value={opening.id} />;
        })}
        </Picker>
*/
