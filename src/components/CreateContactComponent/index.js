import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity, Switch } from "react-native";
import ContainerComponent from "../common/ContainerComponent";
import CustomInput from "../common/CustomInput";
import { DEFAULT_IMAGE_URL } from "../../constants/general";
import styles from "./styles";
import colors from "../../constants/colors";
import CustomButton from "../common/CustomButton";
import CountryPicker from "react-native-country-picker-modal";
import ImagePicker from "../common/ImagePicker";

const ContactsComponent = ({
  setForm,
  form,
  onToggleSwitch,
  onChangeText,
  onPress,
  error,
  loading,
  refSheet,
  openSheet,
  onSelected,
  imageSelected,
  contact,
}) => {
  const lastNameRef = useRef();
  const phoneNumberRef = useRef();

  return (
    <ContainerComponent>
      <View>
        <Image
          source={{
            uri:
              imageSelected?.path || form.contact_picture || DEFAULT_IMAGE_URL,
          }}
          style={styles.image}
        />
        <TouchableOpacity
          onPress={() => {
            openSheet();
          }}
        >
          <Text style={{ color: colors.primary, textAlign: "center" }}>
            Choose picture
          </Text>
        </TouchableOpacity>
      </View>
      <View>
        <CustomInput
          label="First name"
          placeholder="Enter first name"
          onChangeText={(value) => {
            onChangeText({ name: "first_name", value: value });
          }}
          error={error?.first_name?.[0]}
          returnKeyType="next"
          onSubmitEditing={() => lastNameRef.current.focus()}
          value={form?.first_name}
        />
        <CustomInput
          label="Last name"
          placeholder="Enter last name"
          onChangeText={(value) => {
            onChangeText({ name: "last_name", value: value });
          }}
          error={error?.last_name?.[0]}
          refInput={lastNameRef}
          onSubmitEditing={() => phoneNumberRef.current.focus()}
          returnKeyType="next"
          value={form?.last_name}
        />
        <CustomInput
          refInput={phoneNumberRef}
          style={{ paddingLeft: 5 }}
          iconPosition="left"
          icon={
            <CountryPicker
              withCallingCode
              withCallingCodeButton
              withFlag
              countryCode={form.country_code || undefined}
              onSelect={(value) => {
                const country_code = value.cca2;
                setForm({ ...form, country_code });
              }}
            />
          }
          label="Phone number"
          placeholder="Enter phone number"
          onChangeText={(value) => {
            onChangeText({ name: "phone_number", value: value });
          }}
          error={error?.phone_number?.[0] || error?.country_code?.[0]}
          value={form?.phone_number}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginVertical: 10,
          }}
        >
          <Text>Add to favorites</Text>
          <Switch
            trackColor={{ false: "#ccc", true: "#33ffcc" }}
            thumbColor="#fff"
            ios_backgroundColor="#3e3e3e"
            onValueChange={onToggleSwitch}
            value={form.is_favorite}
          />
        </View>
        <CustomButton
          primary
          title={(!contact?.id && "Add") || "Save"}
          onPress={onPress}
          loading={loading}
          isDisable={loading}
        />
      </View>

      <ImagePicker ref={refSheet} onSelected={onSelected} />
    </ContainerComponent>
  );
};

export default ContactsComponent;
