import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

const CategoriesScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}> Popular Openings </Text>
      <View style={styles.bodyContainer}>
        <ScrollView>
          <View style={styles.rowContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/ruylopez1.png")}
                />
                <Text style={styles.text}> Spanish (Ruy Lopez)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/french1.png")}
                />
                <Text style={styles.text}> French Defence</Text>
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/ruylopez1.png")}
                />
                <Text style={styles.text}> Spanish (Ruy Lopez)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/french1.png")}
                />
                <Text style={styles.text}> French Defence</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/ruylopez1.png")}
                />
                <Text style={styles.text}> Spanish (Ruy Lopez)</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/french1.png")}
                />
                <Text style={styles.text}> French Defence</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 70,
    paddingHorizontal: 10
  },

  image: {
    width: 160,
    height: 160,
    borderRadius: 9,
    borderWidth: 0.5,
    marginHorizontal: 8
  },
  header: {
    fontWeight: "bold",
    fontSize: 22,
    marginBottom: 30,
    marginLeft: 27
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 20
  },
  openingContainer: {
    flexDirection: "column"
  },
  text: {
    fontWeight: "bold",
    marginTop: 8,
    marginLeft: 4
  },
  bodyContainer: {
    alignItems: "center"
  }
});
