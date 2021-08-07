import React from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";

const AppModal = ({ visibleModal, setVisibleModal, title, body }) => {
  return (
    <Modal visible={visibleModal} transparent>
      <View style={styles.wrapper}>
        <View style={styles.container}>
          <View style={styles.header}>
            <TouchableOpacity onPress={() => setVisibleModal(false)}>
              <Ionicons name="close" size={26} />
            </TouchableOpacity>
            <Text style={styles.title}>{title || "title"}</Text>
            <View />
            <View />
          </View>

          <View style={{ height: 0.5, backgroundColor: "#ccc" }} />

          <View style={styles.body}>{body}</View>
        </View>
      </View>
    </Modal>
  );
};

export default AppModal;
