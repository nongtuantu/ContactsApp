import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ContainerComponent from "../common/ContainerComponent";
import { useRoute } from "@react-navigation/core";
import styles from "./styles";
import { DEFAULT_IMAGE_URL } from "../../constants/general";
import colors from "../../constants/colors";
import CustomButton from "../common/CustomButton";
import { useNavigation } from "@react-navigation/core";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { CREATE_CONTACT } from "../../constants/routeName";

const ContactsComponent = ({ contact }) => {
  const [loadingImage, setLoadingImage] = useState(false);
  const { navigate } = useNavigation();

  const onLoadStart = () => {
    setLoadingImage(true);
  };
  const onLoadEnd = () => {
    setLoadingImage(false);
  };

  return (
    <ContainerComponent>
      <View>
        {loadingImage && <Text>Loading image...</Text>}
        <Image
          source={{ uri: contact.contact_picture || DEFAULT_IMAGE_URL }}
          style={styles.image}
          onLoadStart={onLoadStart}
          onLoadEnd={onLoadEnd}
        />
      </View>
      <View style={{ height: 0.5, backgroundColor: colors.grey }} />

      <View style={styles.nameTop}>
        <Text style={{ fontSize: 24, paddingRight: 5 }}>
          {contact.first_name}
        </Text>
        <Text style={{ fontSize: 24 }}>{contact.last_name}</Text>
      </View>

      <View style={{ height: 0.5, backgroundColor: colors.grey }} />

      <View style={styles.contactMethods}>
        <View>
          <TouchableOpacity>
            <Ionicons name="call-outline" size={24} color={colors.primary} />
            <Text style={{ color: colors.primary }}>Call</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <AntDesign name="message1" size={24} color={colors.primary} />
            <Text style={{ color: colors.primary }}>Text</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <Ionicons
              name="videocam-outline"
              size={24}
              color={colors.primary}
            />
            <Text style={{ color: colors.primary }}>Video</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={{ height: 0.5, backgroundColor: colors.grey }} />

      <TouchableOpacity style={styles.phoneNumber}>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <View style={{ marginHorizontal: 10 }}>
            <Text style={{ fontSize: 21, color: colors.primary }}>
              {contact.phone_number}
            </Text>
            <Text style={{ fontSize: 14 }}>Phone</Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons
            name="call-outline"
            size={18}
            color={colors.black}
            style={{ marginRight: 10 }}
          />
          <AntDesign name="message1" size={18} color={colors.black} />
        </View>
      </TouchableOpacity>

      <View style={{ height: 0.5, backgroundColor: colors.grey }} />

      <View style={{ justifyContent: "flex-end", flexDirection: "row" }}>
        <CustomButton
          style={{ width: 150, marginTop: 20 }}
          primary
          title="Edit contact"
          onPress={() => navigate(CREATE_CONTACT, { contact })}
        />
      </View>
    </ContainerComponent>
  );
};

export default ContactsComponent;
