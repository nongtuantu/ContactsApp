import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  ScrollView,
  ActivityIndicator,
  Image,
} from "react-native";
import CustomButtom from "../common/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { CONTACT_DETAIL, CREATE_CONTACT } from "../../constants/routeName";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import styles from "./styles";
import colors from "../../constants/colors";
import ContainerComponent from "../common/ContainerComponent";

const ContactsComponent = ({ data, loading, sortBy, nameFormat }) => {
  const { navigate } = useNavigation();

  const renderItem = ({ item }) => {
    const {
      first_name,
      last_name,
      contact_picture,
      phone_number,
      country_code,
    } = item;

    return (
      <ScrollView style={{ paddingHorizontal: 5 }}>
        <TouchableOpacity
          onPress={() => navigate(CONTACT_DETAIL, { item })}
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={styles.viewItems}>
            {contact_picture ? (
              <Image source={{ uri: contact_picture }} style={styles.image} />
            ) : (
              <View style={styles.imageDefault}>
                <Text style={{ fontSize: 18, color: colors.white }}>
                  {first_name[0]}
                </Text>
                <Text style={{ fontSize: 18, color: colors.white }}>
                  {last_name[0]}
                </Text>
              </View>
            )}

            <View>
              {nameFormat ? (
                (nameFormat === "First name first" && (
                  <View style={styles.viewName}>
                    <Text style={styles.name}>{first_name}</Text>
                    <Text style={styles.name}>{last_name}</Text>
                  </View>
                )) ||
                (nameFormat === "Last name first" && (
                  <View style={styles.viewName}>
                    <Text style={styles.name}>{last_name}</Text>
                    <Text style={styles.name}>{first_name}</Text>
                  </View>
                ))
              ) : (
                <View style={styles.viewName}>
                  <Text style={styles.name}>{first_name}</Text>
                  <Text style={styles.name}>{last_name}</Text>
                </View>
              )}

              <Text style={styles.phoneNumber}>{phone_number}</Text>
            </View>
          </View>
          <AntDesign name="right" size={18} color={colors.grey} />
        </TouchableOpacity>
      </ScrollView>
    );
  };

  const listEmptyComponent = () => {
    return (
      <View style={{ alignItems: "center", marginVertical: 100 }}>
        <Text>No contacts to show</Text>
        <CustomButtom
          primary
          onPress={() => {
            navigate(CREATE_CONTACT);
          }}
          title="Add a new contact"
          style={{ width: 120 }}
        />
      </View>
    );
  };

  return (
    <>
      <View>
        {loading ? (
          <ActivityIndicator size="large" color={colors.grey} />
        ) : (
          <FlatList
            renderItem={renderItem}
            data={
              sortBy
                ? (sortBy === "First name" &&
                    data.sort((a, b) => {
                      const x = a.first_name.toUpperCase();
                      const y = b.first_name.toUpperCase();
                      if (x > y) {
                        return 1;
                      } else {
                        return -1;
                      }
                    })) ||
                  (sortBy === "Last name" &&
                    data.sort((a, b) => {
                      const x = a.last_name.toUpperCase();
                      const y = b.last_name.toUpperCase();
                      if (x > y) {
                        return 1;
                      } else {
                        return -1;
                      }
                    }))
                : data
            }
            keyExtractor={(item) => String(item.id)}
            ListEmptyComponent={listEmptyComponent}
            ItemSeparatorComponent={() => {
              return (
                <View
                  style={{ height: 1, backgroundColor: colors.white }}
                ></View>
              );
            }}
          />
        )}
      </View>
      <TouchableOpacity
        onPress={() => navigate(CREATE_CONTACT)}
        style={styles.addIcon}
      >
        <AntDesign name="plus" size={24} color="#fff" />
      </TouchableOpacity>
    </>
  );
};

export default ContactsComponent;
