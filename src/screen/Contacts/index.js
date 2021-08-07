import React, { useCallback, useRef, useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ContactsComponent from "../../components/ContactsComponent";
import { useNavigation } from "@react-navigation/core";
import { useEffect } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useContext } from "react";
import { GlobalContext } from "../../context/Provider";
import getContacts from "../../config_api/action/getContacts";
import { useFocusEffect } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { CONTACT_DETAIL } from "../../constants/routeName";

const Contacts = () => {
  const { setOptions, toggleDrawer, navigate } = useNavigation();

  const [sortBy, setSortBy] = useState(null);
  const [nameFormat, setNameFormat] = useState(null);
  const contactRef = useRef([]);

  const saveSettings = async () => {
    const sortBy = await AsyncStorage.getItem("sortBy");
    const nameFormat = await AsyncStorage.getItem("nameFormat");
    if (sortBy) {
      setSortBy(sortBy);
    }

    if (nameFormat) {
      setNameFormat(nameFormat);
    }
  };

  useFocusEffect(
    React.useCallback(() => {
      saveSettings();
    }, [])
  );

  const {
    contactsState: {
      getContacts: { data, loading },
    },
    contactsDispatch,
  } = useContext(GlobalContext);

  useEffect(() => {
    getContacts()(contactsDispatch);
  }, []);

  useEffect(() => {
    setOptions({
      headerTitleAlign: "center",
      headerLeft: () => (
        <TouchableOpacity onPress={() => toggleDrawer()}>
          <Ionicons name="menu" size={32} style={{ paddingLeft: 5 }} />
        </TouchableOpacity>
      ),
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      const oldList = contactRef.current;
      contactRef.current = data;
      const newList = contactRef.current;

      if (oldList.length > 0 && newList.length - oldList.length === 1) {
        const item = data.find(
          (item) => item.id != oldList.map((item) => item.id)
        );
        navigate(CONTACT_DETAIL, { item });
      }
    }, [data.length])
  );

  return (
    <ContactsComponent
      data={data}
      loading={loading}
      sortBy={sortBy}
      nameFormat={nameFormat}
    />
  );
};

export default Contacts;
