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

  const closeModal = () => {
    return props.toggleModal({ visible: false, type: ""})
  }

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={props.ui.modal.visible}
      onRequestClose={() => {
        console.log("Modal has been closed.");
      }}
    >
      <View style={{ backgroundColor: "#00000090", flex: 1 }}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.modalBar}>
              <TouchableOpacity style={styles.closeButton} activeOpacity={0.6} onPress={() => closeModal()}>
                <Feather name="x" size={24} />
              </TouchableOpacity>
            </View>
            <View style={{ width: "100%" }}>
              {props.ui.modal.type === "about" ? <AboutMono /> : <TeamMono />}
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
  closeButton: {
    backgroundColor: "#ffffff",
    borderRadius: 30,
    width: 40,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  modalView: {
    marginHorizontal: 30,
    marginBottom: 40,
    backgroundColor: "white",
    borderRadius: 40,
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
    alignItems: "center",
    alignSelf: "center",
    position: "absolute",
    top: -55,
    marginBottom: 0
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MonoModal);
