import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import AppModal from "../common/AppModal";
import ContainerComponent from "../common/ContainerComponent";
import styles from "./styles";

const ContactsComponent = ({
  settingItems,
  visibleModal,
  setVisibleModal,
  modalName,
  sortByItems,
  nameFormatItems,
}) => {
  return (
    <ContainerComponent>
      {settingItems.map(({ title, subTitle, onPress }) => (
        <TouchableOpacity
          style={styles.container}
          key={title}
          onPress={onPress}
        >
          <View style={styles.itemsView}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </TouchableOpacity>
      ))}

      <AppModal
        title={
          (modalName === "Sort by" && "Sort by") ||
          (modalName === "Name format" && "Name format")
        }
        visibleModal={visibleModal}
        setVisibleModal={setVisibleModal}
        body={
          (modalName === "Sort by" && (
            <View>
              {sortByItems.map(({ title, icon, selected, onPress }) => (
                <TouchableOpacity
                  key={title}
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    alignItems: "center",
                  }}
                  onPress={onPress}
                >
                  {selected && icon}
                  <Text
                    style={{ fontSize: 18, paddingLeft: selected ? 15 : 30 }}
                  >
                    {title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          )) ||
          (modalName === "Name format" && (
            <View>
              {nameFormatItems.map(({ title, icon, selected, onPress }) => (
                <TouchableOpacity
                  key={title}
                  style={{
                    flexDirection: "row",
                    padding: 5,
                    alignItems: "center",
                  }}
                  onPress={onPress}
                >
                  {selected && icon}
                  <Text
                    style={{ fontSize: 18, paddingLeft: selected ? 15 : 30 }}
                  >
                    {title}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>
          ))
        }
      />
    </ContainerComponent>
  );
};

export default ContactsComponent;
