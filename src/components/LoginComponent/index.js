import React, { useRef } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import ContainerComponent from "../common/ContainerComponent";
import CustomButton from "../common/CustomButton";
import CustomInput from "../common/CustomInput";
import styles from "./styles";
import { useNavigation } from "@react-navigation/core";
import { REGISTER } from "../../constants/routeName";
import CustomMessage from "../common/CustomMessage";

const RegisterComponent = ({ form, loading, error, onChangeText, onPress }) => {
  const { navigate } = useNavigation();

  const passRef = useRef();

  return (
    <ContainerComponent>
      <Image
        source={require("../../constants/images/logo.png")}
        style={styles.image}
      />

      <Text style={styles.title}>Welcome to contacts</Text>
      <Text style={styles.subTitle}>Please log in here</Text>

      {error?.error && <CustomMessage message={error.error} error />}

      {error && !error.error && (
        <CustomMessage message="Invalid credentials!" error onDismiss />
      )}

      <View>
        <CustomInput
          value={form.username || null}
          label="Username"
          placeholder="Enter username"
          onChangeText={(value) => {
            onChangeText({ name: "username", value: value });
          }}
          returnKeyType="next"
          onSubmitEditing={() => passRef.current.focus()}
        />
        <CustomInput
          refInput={passRef}
          label="Password"
          placeholder="Enter password"
          iconNameHide="eye-off"
          iconNameShow="eye"
          secureTextEntry
          onChangeText={(value) => {
            onChangeText({ name: "password", value: value });
          }}
        />
      </View>

      <CustomButton
        title="Log in"
        isDisable={false}
        primary
        onPress={onPress}
        isDisable={loading}
        loading={loading}
      />

      <View style={{ flexDirection: "row", marginVertical: 10 }}>
        <Text>If you don't have an account?</Text>
        <TouchableOpacity onPress={() => navigate(REGISTER)}>
          <Text style={styles.link}>Register</Text>
        </TouchableOpacity>
      </View>
    </ContainerComponent>
  );
};

export default RegisterComponent;
