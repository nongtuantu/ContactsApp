import React from "react";
import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";
import colors from "../../../constants/colors";
import styles from "./styles";

const CustomButton = ({
  title,
  onPress,
  primary,
  isDisable,
  loading,
  success,
  style,
}) => {
  const setBgColor = () => {
    if (isDisable) {
      return colors.grey;
    } else if (primary) {
      return colors.primary;
    } else if (success) {
      return colors.success;
    }
  };

  return (
    <TouchableOpacity
      style={[styles.wrapper, { backgroundColor: setBgColor() }, style]}
      onPress={onPress}
      disabled={isDisable}
    >
      <View style={{ flexDirection: "row" }}>
        {loading && (
          <ActivityIndicator color={colors.white} style={{ marginRight: 5 }} />
        )}
        <Text style={{ color: isDisable ? colors.black : colors.white }}>
          {loading ? "Please wait" : title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomButton;
