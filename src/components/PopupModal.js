import React from "react";
import { View, Modal, Text, StyleSheet, TouchableOpacity } from "react-native";

const PopupModal = props => {
  return (
    <Modal animationType={props.animationType} transparent={true} visible={props.isVisible}>
      <View style={styles.centeredView}>
        <TouchableOpacity
          onPress={() => props.handleToggleVisible()}
          activeOpacity={1}
        >
          <View style={styles.modalView}>
            <Text style={{  fontSize: 16, fontWeight: 'bold' }}>
              {props.modalText}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {},
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    width: "90%",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  }
});

export default PopupModal;
