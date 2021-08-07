import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import styles from "./styles";
import { Ionicons } from "@expo/vector-icons";
import colors from "../../../constants/colors";
import { useState } from "react";

const CustomInput = ({
  placeholder,
  label,
  style,
  onChangeText,
  value,
  iconNameShow,
  iconNameHide,
  error,
  icon,
  iconPosition,
  secureTextEntry,
  returnKeyType,
  refInput,
  onSubmitEditing,
}) => {
  const [isShowPass, setIsShowPass] = useState(false);
  const [onFocused, setOnfocused] = useState(false);

  const setBoderColor = () => {
    if (onFocused) {
      return colors.accent;
    } else if (error) {
      return colors.error;
    } else {
      return colors.grey;
    }
  };

  const setFlexDirection = () => {
    if (iconPosition === "left") {
      return "row";
    }
    if (iconPosition === "right") {
      return "row-reverse";
    }
  };

  return (
    <View style={styles.container}>
      {label && <Text style={styles.label}>{label}</Text>}
      <View
        style={[
          styles.wrapper,
          {
            borderColor: setBoderColor(),
            flexDirection:
              icon && iconPosition ? setFlexDirection() : "row-reverse",
          },
        ]}
      >
        {icon && iconPosition && <View>{icon}</View>}
        <TouchableOpacity onPress={() => setIsShowPass(!isShowPass)}>
          {isShowPass ? (
            <Ionicons name={iconNameHide} size={24} color={colors.grey} />
          ) : (
            <Ionicons name={iconNameShow} size={24} color={colors.grey} />
          )}
        </TouchableOpacity>
        <TextInput
          style={[style, styles.textInput]}
          placeholder={placeholder}
          label={label}
          onChangeText={onChangeText}
          value={value}
          secureTextEntry={isShowPass ? !secureTextEntry : secureTextEntry}
          onFocus={() => setOnfocused(true)}
          onBlur={() => setOnfocused(false)}
          returnKeyType={returnKeyType}
          onSubmitEditing={onSubmitEditing}
          ref={refInput}
        />
      </View>

      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  );
};

export default CustomInput;
