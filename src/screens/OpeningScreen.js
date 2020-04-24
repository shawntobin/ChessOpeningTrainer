import React from "react";
import {
  View,
  Text,
  Button,
  Picker,
  StyleSheet,
  FlatList,
  ScrollView,
  TouchableOpacity,
  Alert,
  TextInput
} from "react-native";

import OPENING_LINES from "../data/openings/openingData";

const OpeningScreen = () => {


const handleChooseOpening = () => {
    
}


  return (
    <View style={styles.container}>
      <Text style={styles.header}>Opening Database</Text>
      <TextInput 
      placeholder="this is my placeholder"
      />


<View style={styles.line}/>

      <ScrollView horizontal={true}>
        <FlatList
          data={OPENING_LINES}
          renderItem={({ item }) => (
            <TouchableOpacity
            onPress={() =>handleChooseOpening(item.id)}
            >
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
    marginVertical: 15
  },

  line: {
      borderWidth: 0.5,
      marginTop: 20
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
