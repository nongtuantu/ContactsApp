import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import RBSeet from "react-native-raw-bottom-sheet";
import styles from "./styles";
import ImageCropPicker from "react-native-image-crop-picker";

const ImagePicker = React.forwardRef(({ onSelected, error }, ref) => {
  const items = [
    {
      icon: <Ionicons name="image-outline" size={24} />,
      title: "Choose a picture from gallery",
      onPress: () => {
        ImageCropPicker.openPicker({
          height: 300,
          width: 300,
          cropping: true,
        })
          .then((image) => {
            onSelected(image);
          })
          .catch((err) => {});
      },
    },
    {
      icon: <Ionicons name="camera-outline" size={24} />,
      title: "Create a picture from camera",
      onPress: () => {
        ImageCropPicker.openCamera({
          height: 300,
          width: 300,
          cropping: true,
        })
          .then((image) => {
            onSelected(image);
          })
          .catch((err) => {});
      },
    },
  ];
  return (
    <RBSeet
      ref={ref}
      closeOnDragDown
      customStyles={{
        container: {
          height: 150,
          width: "100%",
          borderTopLeftRadius: 10,
          borderTopRightRadius: 10,
        },
      }}
    >
      {items.map(({ icon, title, onPress }) => (
        <TouchableOpacity
          onPress={onPress}
          key={title}
          style={styles.container}
        >
          {icon}
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      ))}
    </RBSeet>
  );
});

export default ImagePicker;
