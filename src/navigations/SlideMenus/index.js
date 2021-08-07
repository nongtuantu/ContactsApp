import { AntDesign, Ionicons, MaterialIcons } from "@expo/vector-icons";
import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import logoutUserAction from "../../config_api/action/logoutUserAction";
import { SETTING } from "../../constants/routeName";
import styles from "./styles";

const SlideMenus = ({ navigation, authDispatch }) => {
  const handleLogout = () => {
    navigation.toggleDrawer();
    Alert.alert("Logout", "Are you sure want to log out this user?", [
      { text: "Cancel", onPress: () => {} },
      {
        text: "OK",
        onPress: () => {
          logoutUserAction()(authDispatch);
        },
      },
    ]);
  };

  const menuItems = [
    {
      icon: <Ionicons name="settings" size={24} />,
      name: "Setting",
      onPress: () => {
        navigation.navigate(SETTING);
      },
    },
    {
      icon: <MaterialIcons name="logout" size={24} />,
      name: "Logout",
      onPress: handleLogout,
    },
  ];

  return (
    <View>
      <Image
        source={require("../../constants/images/logo.png")}
        style={styles.image}
      />

      <View>
        {menuItems.map(({ icon, name, onPress }) => (
          <TouchableOpacity onPress={onPress} key={name} style={styles.items}>
            {icon}
            <Text style={styles.name}>{name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SlideMenus;
