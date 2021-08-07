import { Ionicons } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import SettingComponent from "../../components/SettingComponent";

const Contacts = () => {
  const [visibleModal, setVisibleModal] = useState(false);
  const [modalName, setModalName] = useState(null);
  const [sortBy, setSortBy] = useState(null);
  const [nameFormat, setnameFormat] = useState(null);
  const [email, setEmail] = useState(null);
  const [username, setUsername] = useState(null);

  const sortByItems = [
    {
      title: "First name",
      selected: sortBy === "First name",
      icon: <Ionicons name="checkmark" size={20} />,
      onPress: () => {
        setSortBy("First name");
        saveSettings("sortBy", "First name");
        setVisibleModal(false);
      },
    },
    {
      title: "Last name",
      selected: sortBy === "Last name",
      icon: <Ionicons name="checkmark" size={20} />,
      onPress: () => {
        setSortBy("Last name");
        saveSettings("sortBy", "Last name");
        setVisibleModal(false);
      },
    },
  ];

  const nameFormatItems = [
    {
      title: "First name first",
      selected: nameFormat === "First name first",
      icon: <Ionicons name="checkmark" size={20} />,
      onPress: () => {
        setnameFormat("First name first");
        saveSettings("nameFormat", "First name first");
        setVisibleModal(false);
      },
    },
    {
      title: "Last name first",
      selected: nameFormat === "Last name first",
      icon: <Ionicons name="checkmark" size={20} />,
      onPress: () => {
        setnameFormat("Last name first");
        saveSettings("nameFormat", "Last name first");
        setVisibleModal(false);
      },
    },
  ];

  const settingItems = [
    { title: "Your account", subTitle: username, onPress: () => {} },
    {
      title: "Default account for new contacts",
      subTitle: email,
      onPress: () => {},
    },
    {
      title: "Contacts to display",
      subTitle: "All contacts",
      onPress: () => {},
    },
    {
      title: "Sort by",
      subTitle: sortBy,
      onPress: () => {
        setModalName("Sort by");
        setVisibleModal(true);
      },
    },
    {
      title: "Name format",
      subTitle: nameFormat,
      onPress: () => {
        setModalName("Name format");
        setVisibleModal(true);
      },
    },
    { title: "Import", subTitle: "", onPress: () => {} },
    { title: "Export", subTitle: "", onPress: () => {} },
    { title: "Blocked numbers", subTitle: "", onPress: () => {} },
  ];

  const saveSettings = (name, value) => {
    AsyncStorage.setItem(name, value);
  };

  const setSettings = async () => {
    const sortBy = await AsyncStorage.getItem("sortBy");
    const nameFormat = await AsyncStorage.getItem("nameFormat");
    const user = await AsyncStorage.getItem("user");

    if (user) {
      const email = JSON.parse(user).user.email;
      const username = JSON.parse(user).user.username;
      setEmail(email);
      setUsername(username);
    }

    if (sortBy) {
      setSortBy(sortBy);
    }
    if (nameFormat) {
      setnameFormat(nameFormat);
    }
  };

  useEffect(() => {
    setSettings();
  }, []);

  return (
    <SettingComponent
      settingItems={settingItems}
      visibleModal={visibleModal}
      setVisibleModal={setVisibleModal}
      modalName={modalName}
      sortByItems={sortByItems}
      nameFormatItems={nameFormatItems}
    />
  );
};

export default Contacts;
