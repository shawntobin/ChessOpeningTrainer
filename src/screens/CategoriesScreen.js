import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

import { useDispatch } from "react-redux";

import { selectCategory } from "../store/actions/categories";

import OpeningGroup from "../components/OpeningGroup";

import summary from "../data/openings/summary";

const categoryNum = [
  { id: 1, title: "Flank Openings" },
  { id: 2, title: "Semi-Open Games" },
  { id: 3, title: "Open Games" },
  { id: 4, title: "Closed and Semi-Closed Games" },
  { id: 5, title: "Indian Defenses" }
];

const CategoriesScreen = props => {
  const dispatch = useDispatch();

  const handleSelectCategory = id => {
    const category = summary.filter(opening => opening.id === id);

    dispatch(selectCategory(category));

    props.navigation.navigate("Category Lines");
  };

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <Text style={styles.header}> Opening Categories </Text>

          {categoryNum.map(num => {
            return (
              <View key={num.id}>
                <Text style={styles.title}> {num.title}</Text>

                <ScrollView
                  horizontal
                  key={num.id}
                  showsHorizontalScrollIndicator={false}
                >
                  <View style={styles.rowContainer}>
                    {summary
                      .filter(opening => opening.category === num.id)
                      .map(opening => {
                        return (
                          <OpeningGroup
                            key={opening.id}
                            id={opening.id}
                            imageName={opening.image}
                            openingName={opening.name}
                            moves={opening.moves}
                            onPress={id => handleSelectCategory(id)}
                          />
                        );
                      })}
                  </View>
                </ScrollView>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default CategoriesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
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
    marginBottom: 25,
    marginLeft: 0
  },
  rowContainer: {
    flexDirection: "row",
    marginBottom: 30
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
  },
  subText: {
    fontSize: 9,
    marginLeft: 5,
    color: "grey"
  },
  title: {
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#363636"
  },
  line: {
    borderBottomWidth: 0.5,
    marginBottom: 20
  }
});

/*


            <OpeningGroup
              imageName={Images.opening.ruy}
              openingName="Ruy Lopez (Spanish)"
              moves="e2e4 e7e5 g1f3 b8c6 f1b5 ..."
            />
          </View>

          <View style={styles.rowContainer}>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/philidor.png")}
                />
                <Text style={styles.text}> Philidor Defence</Text>
                <Text style={styles.subText}> e2e4 e7e5 g1f3 d7d6 ...</Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity activeOpacity={0.7}>
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/scotch.png")}
                />
                <Text style={styles.text}> Scotch Game</Text>
                <Text style={styles.subText}>
                  {" "}
                  e2e4 e7e5 g1f3 b8c6 d2d4 ...
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={props.navigation.navigate("Chessboard")}
            >
              <View style={styles.openingContainer}>
                <Image
                  style={styles.image}
                  source={require("../../assets/openings/ruylopez1.png")}
                />
                <Text style={styles.text}> Spanish (Ruy Lopez)</Text>
                <Text style={styles.subText}> e4</Text>
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

*/
