import { Feather } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableHighlight,
  TouchableOpacity,
} from "react-native";
import { connect } from "react-redux";
import { TOGGLE_MODAL } from "../redux/action-types";
import AboutMono from "./AboutMono";
import TeamMono from "./TeamMono";

const mapStateToProps = (state) => {
  const { ui } = state;
  return {
    ui,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    toggleModal: (status) => dispatch({ type: TOGGLE_MODAL, payload: status }),
  };
};

function MonoModal(props) {
  const [modalVisible, setModalVisible] = useState(props.visible);
  console.log(props);
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={false}
      onRequestClose={() => {
        Alert.alert("Modal has been closed.");
      }}
    >
      <View style={{ backgroundColor: "#00000090", flex: 1 }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalBar}></View>
            <View style={{ width: "100%" }}>
              {/* <AboutMono /> */}
              {/* <TeamMono /> */}
              <Text>
                {JSON.stringify(props.ui)}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    marginTop: 22,
  },
  closeButtonWrap: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
    // paddingVertical: 10,
    width: "100%",
    marginBottom: 15,
  },
  closeButton: {
    backgroundColor: "#00000015",
    padding: 5,
    borderRadius: 30,
  },
  modalView: {
    marginHorizontal: 30,
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 20,
    paddingHorizontal: 20,
    paddingVertical: 20,
    alignItems: "center",
    flex: 0.5,
    width: "90%",
  },
  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
  },
  modalBar: {
    height: 4,
    backgroundColor: "white",
    borderRadius: 30,
    width: "20%",
    position: "relative",
    top: -40,
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MonoModal);
