import React from "react";
import { View, Text, ScrollView } from "react-native";
import styles from "./styles";

const ContainerComponent = ({ children }) => {
  return <ScrollView style={styles.wrapper}>{children}</ScrollView>;
};

export default ContainerComponent;
