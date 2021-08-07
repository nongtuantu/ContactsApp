import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import colors from "../../../constants/colors";
import styles from "./styles";

const CustomMessage = ({ message, primary, success, error, onDismiss }) => {
  const [dismiss, setDismiss] = useState(false);

  useEffect(() => {
    setDismiss(false);
  }, []);

  const setBgColor = () => {
    if (primary) {
      return colors.primary;
    } else if (error) {
      return colors.error;
    } else if (success) {
      return colors.success;
    }
  };

  return (
    <>
      {dismiss ? null : (
        <TouchableOpacity
          style={[styles.wrapper, { backgroundColor: setBgColor() }]}
        >
          <Text style={styles.text}>{message}</Text>

          {onDismiss && (
            <TouchableOpacity onPress={() => setDismiss(true)}>
              <Text style={styles.dismiss}>X</Text>
            </TouchableOpacity>
          )}
        </TouchableOpacity>
      )}
    </>
  );
};

export default CustomMessage;
