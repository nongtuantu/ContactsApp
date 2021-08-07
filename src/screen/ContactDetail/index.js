import React, { useContext, useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  Alert,
} from "react-native";
import ContactDetail from "../../components/ContactDetail";
import { useNavigation } from "@react-navigation/core";
import { useRoute } from "@react-navigation/core";
import { MaterialCommunityIcons, Ionicons } from "@expo/vector-icons";
import colors from "../../constants/colors";
import { GlobalContext } from "../../context/Provider";
import deleteContact from "../../config_api/action/deleteContact";
import { CONTACTS_LIST } from "../../constants/routeName";

const Contacts = () => {
  const { setOptions, navigate } = useNavigation();
  const { params: { item = {} } = {} } = useRoute();

  const {
    contactsState: {
      deleteContact: { loading },
    },
    contactsDispatch,
  } = useContext(GlobalContext);

  const handleDelete = () => {
    Alert.alert("Delete", "Are you sure want to delete this contact?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "OK",
        onPress: () => {
          deleteContact(item.id)(contactsDispatch)(() => {
            navigate(CONTACTS_LIST);
          });
        },
      },
    ]);
  };


  useEffect(() => {
    setOptions({
      headerTitle: item.first_name + " " + item.last_name,
      headerRight: () => {
        return (
          <View style={{ flexDirection: "row", paddingHorizontal: 10 }}>
            <Ionicons
              name="star"
              size={22}
              color={item.is_favorite ? "#ee0" : colors.grey}
              style={{ paddingRight: 10 }}
            />
            {loading ? (
              <ActivityIndicator color="#000" />
            ) : (
              <TouchableOpacity onPress={handleDelete}>
                <MaterialCommunityIcons
                  name="delete"
                  size={21}
                  color={colors.grey}
                />
              </TouchableOpacity>
            )}
          </View>
        );
      },
    });
  }, [item, loading]);

  return <ContactDetail contact={item} />;
};

export default Contacts;
