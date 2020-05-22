import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
  TouchableOpacity,
  Button
} from "react-native";

import { useDispatch } from "react-redux";
import { Ionicons } from "@expo/vector-icons";
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
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();

  const handleGoToCategory = async id => {
    const category = summary.filter(opening => opening.id === id);

    await dispatch(selectCategory(category));
    setIsLoading(false);
    props.navigation.navigate("Category Lines", { title: category[0].name });
  };

  const handleSelectCategory = id => {
    setIsLoading(true);

    // hacky solution but works - activity indicator otherwise
    // would not load despite brief delay for loading

    setTimeout(() => {
      handleGoToCategory(id);
    }, 100);
  };

  useEffect(() => {
    setIsLoading(false);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.bodyContainer}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}> Opening Explorer </Text>

            <Button
              title="Back"
              onPress={() => {
                props.navigation.navigate("Chessboard");
              }}
            />
          </View>

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
                            onPress={handleSelectCategory}
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
      <ActivityIndicator
        size="large"
        style={styles.loading}
        animating={isLoading}
      />
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
    marginLeft: 0,
    flex: 1
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
  },
  loading: {
    position: "absolute",
    top: "50%",
    left: "50%"
  },
  headerContainer: {
    flexDirection: "row",
    marginVertical: 10,
    paddingRight: 15
  }
});
